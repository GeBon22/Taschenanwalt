import styled from "styled-components";

export default function Breadcrumb(props) {
  return <StyledBreadcrumb>{props.path}</StyledBreadcrumb>;
}

const StyledBreadcrumb = styled.h3`
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 400;
  position: absolute;
  top: 125px;
  left: 37px;
  display: flex;
`;
