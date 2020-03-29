import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSpring, animated, config } from "react-spring";

const Container = styled.div({
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Heading = styled(animated("h2"))({
  fontSize: "5rem",
  fontFamily: "Arial",
});

function App() {
  const [reset, setReset] = useState(false);
  const [reverse, setReverse] = useState(false);

  const styleProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay: 1000,
    onStart: () => {
      setReset(false);
    },
    onRest: () => {
      setReverse(!reverse);
      setReset(true);
    },
    reset: reset,
    reverse: reverse,
  });

  return (
    <Container>
      <Heading style={styleProps}>Animated Text</Heading>
    </Container>
  );
}

export default App;
