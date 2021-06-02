import { Container, Card, Title, SkillsContainer } from "./about";
import React from "react";
function About(props) {
  return (
    <Container id="about">
      {/* About Me */}
      <Container>
        <Card className="skillsection">
          <h2 className="top">ABOUTME</h2>
          <h2 className="bottom">ABOUTME</h2>

          <h1>GAMER</h1>
          <h1 className="middle">GAMER</h1>
          <h1>GAMER</h1>
        </Card>
      </Container>
      {/* Skill */}
      <Container className="skill_sets">
        <Title>Skills</Title>
        <SkillsContainer>
          <Card className="skill_category">
            <h4 className="bg1">Development</h4>

            <ul>
              {props.skillDev.map((skill) => (
                <li>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="skill_category">
            <h4 className="bg2">Tools</h4>
            <ul>
              {props.skillTools.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </Card>
          <Card className="skill_category">
            <h4 className="bg3">Knowledge</h4>
            <ul>
              {props.skillKnow.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </Card>
        </SkillsContainer>
      </Container>
    </Container>
  );
}
export default About;
