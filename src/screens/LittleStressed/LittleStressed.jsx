import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import { textData } from "../../mooks/text";
import { ContainerLittleStressed, ImageLittleStressed } from "./styled";

const LittleStressed = () => {
  const [data, setData] = useState(null);
  const [click, setClick] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("https://dog.ceo/api/breeds/image/random").then((response) => {
      setData(response.data);
      // console.log(response.data);
    });
    setLoading(false);
  }, [click]);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <ContainerLittleStressed>
        <Title>{textData.littleStressed.title}</Title>
        <Button
          width="60%"
          height="50px"
          margin="20px 0 60px"
          onClick={handleClick}
          children={textData.littleStressed.button}
        />
        {data !== null
          ? !loading && <ImageLittleStressed src={data.message} alt="" />
          : data === null && <SubTitle> Loading ... </SubTitle>}
        {data === null && loading && (
          <SubTitle>Estamos enfrentando alguns problemas tecnicos!</SubTitle>
        )}
      </ContainerLittleStressed>
    </>
  );
};

export default LittleStressed;
