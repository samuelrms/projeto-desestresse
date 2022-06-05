import React from "react";
import { DescriptionDefault } from "./styled";

const Description = ({ children, fontSize, ...restProps }) => {
  return (
    <DescriptionDefault fontSize={fontSize} {...restProps}>
      {children}
    </DescriptionDefault>
  );
};

export default Description;
