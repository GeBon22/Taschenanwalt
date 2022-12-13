import styled from "styled-components";

export default function StyledKopierenButton(props) {
  return <Kopieren>{props.children}</Kopieren>;
}

const Kopieren = styled.button`
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 15vh;
  width: 40vw;
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
`;
