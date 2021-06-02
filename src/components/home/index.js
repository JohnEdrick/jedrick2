import { Container, ImgContainer, Info, Icons, Icon, ButtonCV } from "./home";
import front_img from "../img/front_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
      <Container id="home">
        <Info>
          <h3>John Edrick Nubla,</h3>
          <h1>Software Engineer.</h1>
          <Icons>
            <Icon>
              <FontAwesomeIcon icon={faFacebookF} />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faTwitter} />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faYoutube} />
            </Icon>
            <Icon>
              <FontAwesomeIcon icon={faGithub} />
            </Icon>
          </Icons>
          <ButtonCV>Download CV</ButtonCV>
        </Info>

        <ImgContainer src={front_img} alt="Ed" />
      </Container>
    </>
  );
}

export default Home;
