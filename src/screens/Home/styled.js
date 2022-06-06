import styled from "styled-components";

export const ContainerHeader = styled.div`
  flex-wrap: wrap;
  padding: 80px 30px 20px;
  display: flex;
  flex-direction: column;
  hr {
    width: 60%;
  }
  a {
    padding: 20px;
    color: #1d1d1d;
    font-weight: bold;
    font-size: 1rem;
  }
  @media (max-width: 525px) {
    padding-top: 240px;
    a {
      padding: 20px 0;
      width: 100%;
    }
  }
`;

export const ContentInformations = styled.div`
  border: ${({ border }) => border};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${({ background }) => background};
  border-top: ${({ borderTop }) => borderTop};
  padding: 10px;
`;

ContentInformations.defaultProps = {
  border: "3px solid #000",
};
