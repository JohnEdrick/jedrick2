import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Container = styled.div`
  background-color: #1a1919;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  &.skill_sets {
    flex-direction: column;
    height: 100vh;
    width: 65%;
    align-items: baseline;
  }
  ul {
    font-size: 1.7vh;
    font-family: "Nunito Sans", sans-serif;
    color: #f0ecec;
    list-style-type: square;
  }
  .bg1 {
    background: linear-gradient(90deg, #fa0000, #fd0021, #fd0036, #f90049);
  }
  .bg2 {
    background: linear-gradient(90deg, #f3005c, #e9006f, #da0082, #c80095);
  }
  .bg3 {
    background: linear-gradient(90deg, #b000a7, #9200b7, #6a00c5, #171ad1);
  }
`;

export const Card = styled.div`
  &.skillsection {
    min-height: 750px;
    background-color: #141414;
    width: 100%;
    position: relative;
  }
  &.skill_category {
    width: 350px;
    background: #222222;
    height: 700px;
    margin: 25px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 500px;
    z-index: 1;
    color: white;
    line-height: 30px;
    justify-content: start;
    text-align: left;
  }
  color: #111111;
  width: 730px;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 1.8rem;
    width: 100%;
    height: 50px;
    margin: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Oswald", sans-serif;
  }

  h1 {
    opacity: 0.7;
    font-size: 8rem;
    line-height: 105px;
    -webkit-text-stroke-width: 0.08vh;
    -webkit-text-stroke-color: white;
    &.middle {
      opacity: 1;
      -webkit-text-stroke-width: 0px;
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
  }
  h2 {
    position: absolute;
    font-size: 28rem;
    line-height: 25px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    opacity: 0.2;
    &.bottom {
      bottom: 0;
    }
    &.top {
      top: 0;
    }
  }
`;

export const Title = styled.h1`
  font-size: 6.2vh;
  font-family: "Odibee Sans", cursive;
  border-bottom: 3px solid #fc0016;
  margin-left: 25px;
  margin-bottom: 20px;
  color: #faf5f6;
  letter-spacing: 4px;
`;
