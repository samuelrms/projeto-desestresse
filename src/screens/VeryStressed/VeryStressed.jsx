import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Description from "../../components/Description";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { textData } from "../../mooks/text";
import {
  ContainerVeryStressed,
  ContentJoker,
  ContentVeryStressed,
  ImageLittleStressedJoke,
  RenderJoker,
} from "./styled";

const VeryStressed = () => {
  const [dataJoke, setDataJoke] = useState(null);
  const [dataDog, setDataDog] = useState(null);
  const [loading, setLoading] = useState(null);
  const [renderJoke, setRenderJoke] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);

    setInterval(() => {
      setCount(count + 1);
    }, 4000);

    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setDataDog(response.data);
      // console.log(response.data);
    });

    setLoading(false);
  }, [count]);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?type=twopart",
      )
      .then((response) => {
        setDataJoke(response.data);
        console.log(response.data);
      });

    setLoading(false);
  }, [renderJoke]);

  const handleClickJoker = () => {
    setRenderJoke(renderJoke + 1);
  };

  return (
    <ContainerVeryStressed>
      <Title>{textData.veryStressed.title}</Title>
      <Description margin="0" color="#fff">
        {textData.littleStressed.button}
      </Description>
      <hr />
      <ContentVeryStressed>
        <ContentJoker>
          <SubTitle color="#1d1d1d">Piadas</SubTitle>
          <Button
            children="Mostre-me uma piada"
            width="30%"
            height="40px"
            onClick={handleClickJoker}
          />
          {renderJoke && (
            <>
              {loading && <SubTitle>Loading ...</SubTitle>}
              {!loading && renderJoke !== null && (
                <RenderJoker>
                  <Description>Categoria: {dataJoke.category}</Description>
                  <Description>{dataJoke.setup}</Description>
                  <Description>{dataJoke.delivery}</Description>
                  {renderJoke === null && loading && (
                    <SubTitle>
                      Estamos enfrentando alguns problemas tecnicos!
                    </SubTitle>
                  )}
                </RenderJoker>
              )}
            </>
          )}
        </ContentJoker>
        <hr />
        {dataDog !== null
          ? !loading && <ImageLittleStressedJoke src={dataDog.message} alt="" />
          : dataDog === null && <SubTitle> Loading ... </SubTitle>}
        {dataDog === null && loading && (
          <SubTitle>Estamos enfrentando alguns problemas tecnicos!</SubTitle>
        )}
      </ContentVeryStressed>
    </ContainerVeryStressed>
  );
};

export default VeryStressed;
