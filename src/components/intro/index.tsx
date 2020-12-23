function Intro(props: any) {
  return (
    <div className="container" style={styles.container}>
      <h1>INTRO</h1>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "pink",
    height: "100vh",
    color: "black",
    width: "70%",
    marginLeft: "15%",
    marginRight: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default Intro;
