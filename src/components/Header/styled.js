import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 20px;
  padding: 15px;
  background: #d4c6f5;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 9px 15px 0px rgba(0, 0, 0, 0.86);
  position: fixed;
  a {
    padding: 10px;
    background: #f5ddc1;
    border-radius: 10px;
    color: #000;
    font-weight: bold;

    :hover {
      background-color: #fc6130;
    }
  }

  @media (max-width: 525px) {
    flex-wrap: wrap;
    flex-direction: column;
    a {
      padding: 10px 20px;
      width: 50%;
      margin: 0 0 10px;
      :hover {
        width: 50%;
      }
    }
  }
`;
