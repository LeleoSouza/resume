import Typical from "react-typical";
import styles from "./styles";
import { Row, Col } from "react-bootstrap";
import "./index.css";
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
          <div className="content">
            <Typical
              steps={[
                "Front End Developer",
                1000,
                "Web Designer",
                1000,
                "Back End Developer",
                1000,
              ]}
              loop={3}
              wrapper="p"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Intro;
