import React from "react";
import { textData } from "../../mooks/text";
import { ContainerLittleStressed } from "./styled";

const LittleStressed = () => {
  return (
    <ContainerLittleStressed>
      <h1>{textData.littleStressed.title}</h1>
    </ContainerLittleStressed>
  );
};

export default LittleStressed;
