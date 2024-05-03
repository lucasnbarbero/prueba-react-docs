import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container sx={{ p: 4 }}>
      <Outlet />
    </Container>
  );
};

export default MainLayout;
