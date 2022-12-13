import styled from "styled-components";

export default function DefaultButton(props){

    return <StyledButton>{props.children}</StyledButton>
}

const StyledButton = styled.button`
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid #e6ceee /* rgba(163, 134, 182, 0.5) */;
  height: 10vh;
  width: 80vw;
  cursor: pointer;
`;