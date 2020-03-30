import React from "react";
import styled from "@emotion/styled";
import Counter from "./Counter";
import Canvas from "./Canvas";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const COLOURS = ["tomato", "hotpink", "honeydew", "slategray"];

function App() {

  

  return (
    <Container>
      <Counter colour="red"/>
      <Canvas colour="red"/>
    </Container>
  );
}

export default App;
