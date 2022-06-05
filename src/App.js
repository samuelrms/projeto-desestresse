import React from "react";
import ScreenRoutes from "./Routes/ScreenRoutes";
import { GlobalStyle } from "./styles/GlobalStyled";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ScreenRoutes />
    </div>
  );
};
export default App;
