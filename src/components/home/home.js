import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  color: #dddfdf;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 1008px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    text-align: center;
    height: 95vh;

    justify-content: flex-start;
  }
`;

export const Info = styled.div`
  h1 {
    font-size: 4rem;
    font-family: "Kanit", sans-serif;
    line-height: 70px;
    word-wrap: break-word;
  }
  h3 {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.1rem;
  }
  @media (max-width: 800px) {
    margin-top: 50px;
    h1 {
      font-size: 3rem;
      line-height: 55px;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const ImgContainer = styled.img`
  width: 450px;
  @media (max-width: 1008px) {
    width: 395px;
  }
`;

export const Icons = styled.div`
  font-size: 1.2rem;
  margin: 40px 0 40px;
`;

export const Icon = styled.span`
  transition: all 0.2s ease-in-out;
  padding-right: 25px;
  border: none;
  :hover {
    cursor: pointer;
    background-color: #222222;
  }
`;

export const ButtonCV = styled.button`
  border-radius: 2px;
  margin-bottom: 20px;
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
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
  padding: 12px 10px;
  width: 170px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
