import React, { useEffect, useState } from 'react';
import { useUser } from "@gadgetinc/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SalesTable from "../components/salestable.jsx"; // Adjust the path as necessary
import { api } from "../api";

export default function SignedInPage() {
  const user = useUser(api);
  const [collections, setCollections] = useState([]);
  const [collectionName, setCollectionName] = useState('');

const fetchCollections = async () => {
  if (!user || !user.keys) {
    setCollectionName('None yet! Ask a staff member to assign keys to you :)');
    return;
  }

  const keys = user.keys.split(',').map(key => key.trim()).filter(key => key);
  if (keys.length === 0) {
    setCollectionName('Invalid or empty keys provided.');
    return;
  }

  try {
    const responses = await Promise.all(keys.map(key =>
      api.shopifyCollection.findMany({
          filter: { handle: { equals: key.trim() } },
          select: {
            title: true,
            sales: true,
            collectionType: true,
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
        
        // Your existing API call configuration

      })
    ));

    // Check if any of the promises were rejected.
    const collectionsData = responses.flat().filter(response => response && response.length > 0);

    if (collectionsData.length === 0) {
      setCollectionName('No collections found for provided keys.');
      return;
    }

    const processedCollections = collectionsData.map(collection => {
      return {
        ...collection,
        ...parseCollection(collection)
      };
    });

    setCollections(processedCollections);
  } catch (error) {
    console.error("Failed to fetch collections", error);
    setCollectionName('Error fetching collections. Please try again later.');
  }
};


const parseCollection = (collection) => {
  const sortByStatusAndSales = (a, b) => {
    const statusOrder = { active: 1, archived: 2, draft: 3 };
    if (statusOrder[a.node.status] !== statusOrder[b.node.status]) {
      return statusOrder[a.node.status] - statusOrder[b.node.status];
    }
    return b.node.sales - a.node.sales;
  };

  let sortedProducts;
  let initialProductCount = 0;

  if (collection.collectionType === "smart") {
    initialProductCount = collection.smartProducts.edges.length;
    sortedProducts = collection.smartProducts.edges
      .filter(({ node }) => node.sales > 0)
      .sort(sortByStatusAndSales);
  } else if (collection.collectionType === "custom") {
    initialProductCount = collection.products.edges.length;
    sortedProducts = collection.products.edges
      .filter(({ node }) => node.sales > 0)
      .sort(sortByStatusAndSales);
  }

  let totalSales = 0;
  const productsData = sortedProducts.map(({ node }, index) => {
    totalSales += node.sales;
    return {
      ...node,
      index: index + 1
    };
  });

  return {
    totalProductCount: initialProductCount,
    productsData,
    cSales: totalSales.toFixed(2)
  };
};

  useEffect(() => {
    fetchCollections();
  }, [user, user?.keys]);

  return user ? (
    <div className="scrollable">
      <div className="dash-greeting">
        <div>
          <h4>Welcome, {user.firstName}!<br/> Your keys are: "{user.keys}"</h4> 
          <Link to="/change-key" className ="btn btn-dark border">Change</Link>
        </div>
      </div>

<div className="rounded-container dash-outer">
  {collections.length > 0 ? collections.map((collection, index) => (
    collection.productsData && collection.productsData.length > 0 ? (
      <SalesTable key={index} collection={collection} />
    ) : null // Or render some placeholder indicating no data
  )) : <p>{collectionName}</p>}
</div>

    </div>
  ) : null;
}
