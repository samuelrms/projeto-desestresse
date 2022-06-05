import React from "react";
import { Link } from "react-router-dom";
import { textData } from "../../mooks/text";
import { HeaderContainer } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/projeto-desestresse">{textData.routes.home}</Link>
      <Link to="/projeto-desestresse/pouco-estressado">
        {textData.routes.littleStressed}
      </Link>
      <Link to="/projeto-desestresse/estressado">
        {textData.routes.stressed}
      </Link>
      <Link to="/projeto-desestresse/muito-estressado">
        {textData.routes.veryStressed}
      </Link>
    </HeaderContainer>
  );
};

export default Header;
