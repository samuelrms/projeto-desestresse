import styled from "styled-components";

export const ContainerLittleStressed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 30px 20px;
  hr {
    width: 60%;
  }
`;

export const ImageLittleStressed = styled.img`
  max-width: 50%;
  height: 300px;
  background-size: cover;
  border-radius: 10px;

  @media (max-width: 525px) {
    max-width: 100%;
  }
`;
