import React from "react";
import styled from "@emotion/styled";
const HalfDivider = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Counter = ({colour}) => {
  return <HalfDivider style={{ backgroundColor: colour }}></HalfDivider>;
};

export default Counter;
