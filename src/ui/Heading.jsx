import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) => props.as === "h1" && css`font-size:3rem; font-weight600`}
  ${(props) => props.as === "h2" && css`font-size:2rem; font-weight600`}
  ${(props) => props.as === "h3" && css`font-size:1.6rem; font-weight500`}
`;

export default Heading;
