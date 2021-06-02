import { Container, Card, Form, Icons, Icon, Footer } from "./contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function contact() {
  return (
    <>
      <Container id="contact">
        <Card>
          <Form>
            <h1>Contact Me</h1>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea rows="5" placeholder="Message"></textarea>
            <input type="submit" value="Send Message" />
            <p>or</p>
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
            </Icons>
          </Form>
        </Card>
        <Footer>Created By: John Edrick Nubla</Footer>
      </Container>
    </>
  );
}

export default contact;
