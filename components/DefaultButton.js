import styled from "styled-components";

export default function DefaultButton(props) {
  return <StyledButton>{props.children}</StyledButton>;
}

const StyledButton = styled.button`
  color: var(--secondary-color);
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: var(--button-background);
  border-radius: 10px;
  border: 1px solid var(--button-background);
  height: 10vh;
  width: 80vw;
  cursor: pointer;
`;
