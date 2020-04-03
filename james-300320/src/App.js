import React, {useState} from "react";
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

  const [circleCount, setCircleCount] = useState(0);

  return (
    <Container>
      <Counter background="red" number={circleCount}/>
      <Canvas colour="red" countHandler={setCircleCount}/>
    </Container>
  );
}

export default App;
