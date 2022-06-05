import React from "react";
import { SubTitleDefault } from "./styled";

const SubTitle = ({ fontSize, children, ...restProps }) => {
  return (
    <SubTitleDefault fontSize={fontSize} {...restProps}>
      {children}
    </SubTitleDefault>
  );
};

export default SubTitle;
