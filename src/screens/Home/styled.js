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
    }
  }
`;

export const ContentInformations = styled.div`
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: 10px;
`;
