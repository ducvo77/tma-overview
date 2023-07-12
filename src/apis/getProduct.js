import axios from "../axios";

const getAllProducts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "/products",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

const getOneProduct = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `/products/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export { getAllProducts, getOneProduct };
