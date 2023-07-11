import axios from "../axios";

const getProduct = () =>
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

// const getProduct = async () => {
//   const res = await axios.get("/products");
//   return res;
// };
export default getProduct;
