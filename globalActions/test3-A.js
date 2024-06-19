import { Test2GlobalActionContext } from "gadget-server";

/**
 * @param { Test2GlobalActionContext } context
 */
export async function run({ params, logger, api, connections }) {
  const products = await api.users.findMany({
    select: {
    id:true
    }
  })


  return products
  
};
