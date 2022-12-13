import styled from "styled-components";

export default function ZurueckButton() {

    return <StyledZurueckButton>zurück</StyledZurueckButton>
}

const StyledZurueckButton = styled.button`
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 5vh;
  width: 30vw;
  position: relative;
  top: 40px;
  cursor: pointer;
  margin-bottom: 2rem;
`;