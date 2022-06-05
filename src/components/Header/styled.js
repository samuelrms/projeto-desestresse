import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 15px;
  a {
    padding: 10px;

    :hover {
      background-color: #fc6130;
      border-radius: 10px;
    }
  }

  @media (max-width: 525px) {
    flex-wrap: wrap;
    flex-direction: column;
    a {
      padding: 10px 0;
      :hover {
        width: 50%;
      }
    }
  }
`;
