import React, { useEffect, useState } from 'react';
import { useUser } from "@gadgetinc/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { api } from "../api";

export default function SignedInPage() {
  const user = useUser(api);
  const [collections, setCollections] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [collection, setCollection] = useState('');
  const [collectionName, setCollectionName] = useState('');
  const [products, setProducts] = useState([]);
  const [cSales, setCSales] = useState('');

  const fetchCollections = async () => {
    if (user && user.keys) {
      // Assuming user.keys contains the handle of the collection
      const handle = user.keys;
      try {
        const response = await api.shopifyCollection.findMany({
          filter: { handle: { equals: handle } },
          select: {
            title: true,
            sales: true,
            collectionType:true,
            id: true,
            shop: {
              handle: true
            },
            smartProducts: {
              edges: {
                node: {
                  title: true,
                  sales: true,
                  status: true,
                }
              }
            },
            products: {
              edges: {
                node: {
                  title: true,
                  sales: true,
                  status: true,
                }
              }
            },
          }
        });

        if (response.length > 0) {
          setCollections(response);
          setCollection(response[0]);
        } else {
          setCollectionName('None yet! Ask a staff member to assign keys to you :)');
        }
      } catch (error) {
        console.error("Failed to fetch collection", error);
        setCollectionName('Error fetching collection');
      }
    } else if (user.keys === ""){
      setCollectionName('None yet! Ask a staff member to assign keys to you :)');
    }
  };

  const parseCollection = async (collection) => {
  // Custom sorting function
  const sortByStatusAndSales = (a, b) => {
    const statusOrder = { active: 1, archived: 2, draft: 3 };
    if (statusOrder[a.node.status] !== statusOrder[b.node.status]) {
      return statusOrder[a.node.status] - statusOrder[b.node.status];
    }
    return b.node.sales - a.node.sales;
  };

  let sortedProducts;
  let initialProductCount = 0; // Initialize the count
  console.log(collection.collectionType);

  if (collection.collectionType === "smart") {
    // Set initial product count before filtering and sorting
    initialProductCount = collection.smartProducts.edges.length;
    // Sort products by status and then by sales
    sortedProducts = collection.smartProducts.edges
      .filter(({ node }) => node.sales > 0)
      .sort(sortByStatusAndSales);

  } else if (collection.collectionType === "custom") {
    // Set initial product count before filtering and sorting
    initialProductCount = collection.products.edges.length;
    sortedProducts = collection.products.edges
      .filter(({ node }) => node.sales > 0)
      .sort(sortByStatusAndSales);
  }

  // Update state with the initial product count
  setTotalProductCount(initialProductCount);
  let totalSales = 0;
  const productSalesArray = sortedProducts.map(({ node: { title, sales, status } }, index) => {
    totalSales += sales;
    return (
      <tr key={index} className={status === 'active' ? 'active-product' : ''}>
        <td>{index + 1}</td>
        <td>{title}</td>
        <td>{status}</td>
        <td>$ {sales.toFixed(2)}</td>
      </tr>
    );
  });

  setProducts(productSalesArray);
  setCSales(totalSales.toFixed(2));
};


  useEffect(() => {
    fetchCollections();
  }, [user, user?.keys]);

  useEffect(() => {
    if (collection) {
      parseCollection(collection);
    }
  }, [collection, collections]);

  return user ? (
    <div className="scrollable">
      <div className="dash-greeting">
        <div>
          <h4>Welcome, {user.firstName}!<br/> Your keys are: "{user.keys}"</h4> 
          <Link to="/change-key" className ="btn btn-dark border"> change </Link>
        </div>
      </div>

      <div className="rounded-container dash-outer">
      <h4>Collection Name: {collection.title} </h4>
      <p>Total Products in Collection: {totalProductCount}*</p>
        {collections.length > 1 && (
          <select className= "form-select form-select-lg mb-3" onChange={(e) => setCollection(e.target.value)} value={collection}>
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {`${collection.title} - ${collection.shop.handle}`}
              </option>
            ))}
          </select>
        )}
        
        <div className="data-container">
          <table className="table">
            <thead>
              <tr>
                <td><h4>#</h4></td>
                <th><h4>Product Title</h4></th>
                <th><h4>Status</h4></th>
                <th><h4>Sales</h4></th>
              </tr>
            </thead>
            <tbody>
            {products}
            <tr>
              <td><h4>#</h4></td>
              <td><h4>Total Sales</h4></td>
              <th><h4> </h4></th>
              <td><h4>$ {cSales}</h4></td>
            </tr>
           </tbody>
          </table>
          <p> *Products with no sales are not displayed. </p>
        </div>
      </div>
    </div>
  ) : null;
}