import React from "react";
import { textData } from "../../mooks/text";
import { ContainerHeader } from "./styled";
import Title from "../../components/Title";

const Home = () => {
  return (
    <ContainerHeader>
      <Title>{textData.home.titleHome}</Title>
    </ContainerHeader>
  );
};

export default Home;
