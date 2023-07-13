import { useEffect, useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import Section from "../components/Section";
import { getAllProducts } from "../apis/getProduct";
import { Link } from "react-router-dom";

function Shop() {
  const [dataProducts, setDataProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllProducts();
      if (res) setDataProducts(res);
    };
    fetchData();
  }, []);

  console.log("re-render");

  return (
    <>
      <Header />
      <Container>
        <Section>
          <h2 className="text-center text-2xl font-bold">Shop Page!!</h2>
          <ul className="grid grid-cols-6 gap-20">
            {dataProducts &&
              dataProducts.map((product: any) => (
                <li key={product.id} className="flex flex-col">
                  <img className="w-full" src={product.image} alt="" />
                  <div>
                    <Link to={`/shop/${product.id}`} className="font-semibold">
                      {product.title}
                    </Link>
                    <p className="text-gray-400 text-sm">
                      {product.description}
                    </p>
                    <span className="text-red-500">{product.price}$</span>
                  </div>
                </li>
              ))}
          </ul>
        </Section>
      </Container>
    </>
  );
}

export default Shop;
