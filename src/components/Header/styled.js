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
    background: #f5ee76;
    border-radius: 10px;
    color: #000;
    font-weight: bold;
    :last-child {
      background: #e63856;
    }
    :nth-child(3) {
      background: #fc6130;
    }
    :first-child {
      background: #fff;
    }
    :hover {
      background-color: #1d1d1d;
      :last-child {
        color: #e63856;
      }
      :nth-child(3) {
        color: #fc6130;
      }
      :nth-child(2) {
        color: #f5ee76;
      }
      :first-child {
        color: #fff;
      }
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
