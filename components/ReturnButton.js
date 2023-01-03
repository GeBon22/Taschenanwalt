import styled from "styled-components";

export default function ReturnButton() {
  return <StyledZurueckButton>zurück</StyledZurueckButton>;
}

const StyledZurueckButton = styled.button`
  color: var(--secondary-color);
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: var(--primary-background-color);
  border-radius: var(--default-border-radius);
  border: 1px solid var(--secondary-color);
  box-shadow: var(--button-shadow);
  height: 5vh;
  width: 30vw;
  cursor: pointer;
  margin-bottom: 2rem;
`;
