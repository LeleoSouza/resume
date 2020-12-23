import Typist from "react-typist";
function Intro(props: any) {
  return (
    <div className="container" style={styles.container}>
      <Typist>
        <h1>
          I'M
          <br />
          LEONARDO
          <br />
          SOUZA
        </h1>
      </Typist>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "gray",
    height: "100vh",
    color: "white",
    width: "70%",
    marginLeft: "15%",
    marginRight: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
  },
};
export default Intro;
