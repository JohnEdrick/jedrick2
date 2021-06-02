import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #141414;
  color: white;
  position: relative;
`;

export const Card = styled.div`
  display: flex;
  width: 1100px;
  background: rgba(27, 27, 27, 0.5);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 120px;
  &.even {
    flex-direction: row-reverse;
  }
`;

export const DescriptionContainer = styled.div`
  width: 550px;
  background: rgba(31, 30, 30, 0.1);
  padding: 20px;
  position: relative;
  p {
    padding-top: 20px;
    line-height: 25px;
    font-family: "PT Serif", serif;
  }
  h1 {
    font-family: "Poppins", sans-serif;
  }
`;

export const ImgContainer = styled.img`
  width: 550px;
  display: table;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 6vh;
  letter-spacing: 6px;
  font-family: "Squada One", cursive;
  padding: 5px 30px;
  text-align: center;
  margin: 90px;
  background: linear-gradient(
    90deg,
    #fa0000,
    #fd0021,
    #fd0036,
    #f90049,
    #f3005c,
    #e9006f,
    #da0082,
    #c80095,
    #b000a7,
    #9200b7,
    #6a00c5,
    #171ad1
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Tags = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  text-align: center;
  p {
    font-size: 1.4vh;
    margin-right: 10px;
    border-radius: 20px;
    width: 80px;
    padding: 2px;
    background: linear-gradient(
      90deg,
      #fa0000,
      #fd0021,
      #fd0036,
      #f90049,
      #f3005c,
      #e9006f,
      #da0082,
      #c80095,
      #b000a7,
      #9200b7,
      #6a00c5,
      #171ad1
    );
  }
`;
