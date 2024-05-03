import { StyledEngineProvider, CssBaseline } from "@mui/material";
import NavigationScroll from "./layout/NavigationScroll";
import MainRouter from "./routes";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <NavigationScroll>
          <MainRouter />
        </NavigationScroll>
      </StyledEngineProvider>
    </BrowserRouter>
  );
};

export default App;
