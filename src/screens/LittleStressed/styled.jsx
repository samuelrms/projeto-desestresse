import styled from "styled-components";

export const ContainerLittleStressed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 30px 20px;
  hr {
    width: 60%;
  }
  @media (max-width: 525px) {
    padding-top: 240px;
  }
`;

export const ImageLittleStressed = styled.img`
  max-width: 50%;
  height: 300px;
  background-size: cover;
  border-radius: 10px;
  box-shadow: -5px 9px 15px -3px rgba(0, 0, 0, 0.86);

  @media (max-width: 525px) {
    max-width: 100%;
  }
`;
