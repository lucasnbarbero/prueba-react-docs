import { useEffect, useState } from "react";
import ProductService from "./core/application/ProductService";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Grid,
} from "@mui/material";

interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productService = new ProductService();
      try {
        const fetchedProducts = await productService.getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" sx={{ mb: 8 }}>
        Lista de productos
      </Typography>
      <Grid container spacing={2}>
        {products.map((p) => (
          <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "cover",
                  }}
                />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {p.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
