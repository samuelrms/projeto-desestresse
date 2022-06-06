import axios from "axios";
import React, { useEffect, useState } from "react";
import Description from "../../components/Description";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title/Title";
import { textData } from "../../mooks/text";
import { ImageLittleStressed } from "../LittleStressed/styled";
import { ContainerStressed } from "./styled";

const Stressed = () => {
  const [dataDog, setDataDog] = useState(null);
  const [loading, setLoading] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setCount(count + 1);
    }, 5500);

    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setDataDog(response.data);
      // console.log(response.data);
    });
    setLoading(false);
  }, [count]);

  return (
    <ContainerStressed>
      <Title>{textData.stressed.title}</Title>
      <Description margin="0">{textData.littleStressed.button}</Description>
      <hr />
      {dataDog !== null
        ? !loading && <ImageLittleStressed src={dataDog.message} alt="" />
        : dataDog === null && <SubTitle> Loading ... </SubTitle>}
      {dataDog === null && loading && (
        <SubTitle>Estamos enfrentando alguns problemas tecnicos!</SubTitle>
      )}
    </ContainerStressed>
  );
};

export default Stressed;
