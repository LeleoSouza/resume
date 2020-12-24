import Typical from "react-typical";
import styles from "./styles";
import { Row, Col } from "react-bootstrap";
function Intro(props: any) {
  return (
    <div className="container" style={styles.container}>
      <Row>
        <Col>
          {" "}
          <h1>
            Hi,
            <br />
            I'm Leonardo Souza,
          </h1>
        </Col>
        <Col>
          {" "}
          <Typical
            steps={["Web Developer", 1000, "Designer", 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Intro;
