import {
  Container,
  ImgContainer,
  Card,
  DescriptionContainer,
  Title,
  Tags,
} from "./works";
import { Projects } from "../datas/projects";
function Works() {
  return (
    <Container id="portfolio">
      <Title>Projects</Title>
      {Projects.map((project, index) => {
        return (
          <Card className={index % 2 === 0 ? "even" : ""}>
            <ImgContainer src={project.image} alt="Ed" />

            <DescriptionContainer>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <Tags>
                {project.tools.map((tool, index) => {
                  return <p>{tool}</p>;
                })}
              </Tags>
            </DescriptionContainer>
          </Card>
        );
      })}
    </Container>
  );
}

export default Works;
