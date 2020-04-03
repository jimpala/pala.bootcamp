import React from "react";
import styled from "@emotion/styled";
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

const Counter = ({ background, number }) => {
  return (
    <HalfDivider style={{ backgroundColor: background }}>
      <Number>{number}</Number>
    </HalfDivider>
  );
};

export default Counter;
