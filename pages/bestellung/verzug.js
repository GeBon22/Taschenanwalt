import styled from "styled-components";
import Link from "next/link";

export default function VerzugPage() {
  return (
    <StyledBody>
      <StyledBreadcrumb>
        <StyledLink href="/bestellung">/online bestellen u. kaufen</StyledLink>/Ware kommt nicht an
      </StyledBreadcrumb>
      <h3>Meine Ware kommt nicht an!</h3>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3e8e8;
  color: #572887;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledBreadcrumb = styled.h3`
  color: #572887;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  top: 8rem;
  left: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
