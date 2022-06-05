import React from "react";
import { textData } from "../../mooks/text";
import { ContainerStressed } from "./styled";

const Stressed = () => {
  return (
    <ContainerStressed>
      <h1>{textData.stressed.title}</h1>
    </ContainerStressed>
  );
};

export default Stressed;
