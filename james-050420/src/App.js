import React from "react";
import styled from "@emotion/styled";
import Counter from "./Counter";
import Canvas from "./Canvas";
import { CountProvider } from "./CountContext";
import { ColourProvider } from "./ColourContext";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

function App() {
  return (
    <CountProvider>
      <ColourProvider>
        <Container>
          <Counter />
          <Canvas />
        </Container>
      </ColourProvider>
    </CountProvider>
  );
}

export default App;
