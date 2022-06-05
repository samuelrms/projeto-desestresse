import styled from "styled-components";
import { ImageLittleStressed } from "../LittleStressed/styled";

export const ContainerStressed = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 30px 20px;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  hr {
    width: 60%;
  }
`;

export const ImageStressed = styled(ImageLittleStressed)`
  width: 60%;
  max-width: 60%;

  @media (max-width: 525px) {
    max-width: 100%;
  }
`;
