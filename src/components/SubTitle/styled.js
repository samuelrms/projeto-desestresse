import styled from "styled-components";

export const SubTitleDefault = styled.h2`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
`;

SubTitleDefault.defaultProps = {
  color: "#FFF",
};
