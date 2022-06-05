import React from "react";
import { textData } from "../../mooks/text";
import { ContainerVeryStressed } from "./styled";

const VeryStressed = () => {
  return (
    <ContainerVeryStressed>
      <h1>{textData.veryStressed.title}</h1>
    </ContainerVeryStressed>
  );
};

export default VeryStressed;
