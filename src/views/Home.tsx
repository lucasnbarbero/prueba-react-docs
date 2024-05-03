import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ProductCard from "../components/product/ProductCard";
import ProductService from "../core/application/ProductService";
import { IProduct } from "../core/domain/models/IProduct";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const _service = new ProductService();
        const _data = await _service.getProducts();
        setProducts(_data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
