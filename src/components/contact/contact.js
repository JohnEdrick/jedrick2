import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101010;
  color: white;
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  h1 {
    margin-bottom: 70px;
    font-size: 5vh;
    font-family: "Oswald", sans-serif;
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
  }
  p {
    margin: 40px;
  }
  input,
  textarea {
    width: 80%;
    font-size: 1.5vh;
    padding: 10px;
    margin-bottom: 10px;
    outline: none;
    border: none;
    border: 1px solid #f5f4f4;
    background: none;
    resize: none;
    color: white;
    border-radius: 2px;
    text-align: center;
  }
  input[type="submit"] {
    margin-top: 20px;
    border-radius: 2px;
    border: 1px solid #101010;
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
    width: 80%;
    &:hover {
      cursor: pointer;
      background: none;
      border-image-slice: 1;
      border-image-source: linear-gradient(
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
  }
`;

export const Card = styled.div`
  width: 30%;
  height: 70vh;
  background: #181818;
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 5px;
`;

export const Icon = styled.span`
  transition: transform 0.2s;
  padding: 12px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #222222;
  }
`;
export const Icons = styled.div`
  font-size: 1.2rem;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 20px;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 1.4vh;
  letter-spacing: 2px;
`;
