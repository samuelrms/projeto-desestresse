import styled from "styled-components";
import { ImageLittleStressed } from "../LittleStressed/styled";

export const ContainerVeryStressed = styled.div`
  display: flex;
  justify-content: center;
  padding: 70px 30px 20px;
  flex-direction: column;
  align-items: center;
  hr {
    width: 60%;
  }
  @media (max-width: 525px) {
    padding-top: 240px;
  }
`;

export const ContentJoker = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background: #d4c6f5;
  padding: 0 30px;
  border: 3px solid #000;

  @media (max-width: 525px) {
    padding: 30px;
    height: auto;
  }
`;

export const RenderJoker = styled.div`
  flex-wrap: wrap;
  padding: 20px 0;

  h2 {
    margin-bottom: 30px;
  }
`;

export const ContentVeryStressed = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0 20px;
  max-width: 100%;
  min-width: 96%;

  hr {
    width: 3px;
    min-width: 3px;
    height: 400px;
    border: none;
    background: #fff;
    margin: 0 15px;
  }
  @media (max-width: 525px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    hr {
      height: 3px;
      min-width: 100%;
      width: auto;
      margin: 20px 0;
    }
  }
`;

export const ImageLittleStressedJoke = styled(ImageLittleStressed)`
  max-height: 400px;
  min-height: 400px;
  min-width: 30%;
  max-width: 30%;
  box-shadow: -5px 9px 15px -3px rgba(0, 0, 0, 0.86);

  @media (max-width: 525px) {
    min-width: 100%;
    max-width: 100%;
  }
`;
