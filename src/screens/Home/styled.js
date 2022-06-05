import styled from "styled-components";

export const ContainerHeader = styled.div`
  flex-wrap: wrap;
  padding: 15px 30px 20px;
  display: flex;
  flex-direction: column;
  hr {
    width: 60%;
  }
  a {
    padding: 20px 80px;
    color: #1d1d1d;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const ContentInformations = styled.div`
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: 10px;
`;
