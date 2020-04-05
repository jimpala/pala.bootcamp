import React from "react";
import styled from "@emotion/styled";
import {useCount} from "./CountContext";
import {useColour} from "./ColourContext";
const HalfDivider = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Number = styled.h2`
  color: white;
  font-size: 12rem;
  font-weight: bold;
`;

const Counter = () => {
  const [count, ] = useCount();
  const [colour, ] = useColour();
  return (
    <HalfDivider style={{ backgroundColor: colour }}>
      <Number>{count}</Number>
    </HalfDivider>
  );
};

export default Counter;
