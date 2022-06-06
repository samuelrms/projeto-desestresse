import React from "react";
import { textData } from "../../mooks/text";
import { ContainerHeader, ContentInformations } from "./styled";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Description from "../../components/Description";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ContainerHeader>
      <Title>{textData.home.titleHome}</Title>
      <SubTitle>{textData.home.subTitle}</SubTitle>
      <hr />
      <ContentInformations background="#D4C6F5" borderRadius="10px 10px 0 0">
        <SubTitle>{textData.home.subTitleLittleStressed}</SubTitle>
        <Button
          width="30%"
          height="40px"
          background="#F5DDC1"
          children={
            <Link to="/projeto-desestresse/pouco-estressado">
              {textData.routes.littleStressed}
            </Link>
          }
        />
        <Description>{textData.home.descriptionLittleStressed}</Description>
      </ContentInformations>
      <hr />
      <ContentInformations background="#D4C6F5">
        <SubTitle color="#1d1d1d">{textData.home.subTitleStressed}</SubTitle>
        <Button
          width="30%"
          height="40px"
          background="#FC6130"
          children={
            <Link to="/projeto-desestresse/estressado">
              {textData.routes.stressed}
            </Link>
          }
        />
        <Description>{textData.home.descriptionStressed}</Description>
      </ContentInformations>
      <hr />
      <ContentInformations background="#D4C6F5" borderRadius="0 0 10px 10px">
        <SubTitle color="#1d1d1d">
          {textData.home.subTitleVeryStressed}
        </SubTitle>
        <Button
          width="30%"
          height="40px"
          background="#E63856"
          children={
            <Link to="/projeto-desestresse/muito-estressado">
              {textData.routes.veryStressed}
            </Link>
          }
        />
        <Description>{textData.home.descriptionVeryStressed}</Description>
      </ContentInformations>
    </ContainerHeader>
  );
};

export default Home;
