import { useEffect, useState } from "react";
import { getOneProduct } from "../apis/getProduct";
import { Link, useParams } from "react-router-dom";
import { Button, Container } from "@mui/material";

function ProductDetail() {
  const [dataProduct, setDataProduct] = useState(null);
  const params = useParams();
  const idProduct = params.name;
  useEffect(() => {
    const fetchDataProduct = async () => {
      let res = await getOneProduct(idProduct);
      setDataProduct(res);
    };
    fetchDataProduct();
  }, [idProduct]);

  return (
    dataProduct && (
      <Container>
        <div>
          <h1>{dataProduct.title}</h1>
          <img src={dataProduct.image} alt="dataProduct.title" />
          <Button variant="contained">
            <Link to="/shop">Back</Link>
          </Button>
        </div>
      </Container>
    )
  );
}

export default ProductDetail;
