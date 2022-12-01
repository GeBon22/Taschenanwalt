import styled from "styled-components";
import Link from "next/link";

export default function FristWiderruf() {
  return (
    <StyledBody>
      <StyledBreadcrumb>
        <StyledLink href="/widerruf">/Widerruf und Retoure</StyledLink>/Wie
        lange kann ich widerrufen?
      </StyledBreadcrumb>
      <h3>Wie lange kann ich widerrufen?</h3>
      <StyledZurueckButton>
        <StyledLink href="/widerruf">zurück</StyledLink>
      </StyledZurueckButton>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #f3e8e8;
  color: #572887;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const StyledBreadcrumb = styled.h3`
  color: #572887;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  top: 125px;
  left: 37px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledZurueckButton = styled.button`
  color: #572887;
  font-size: 18px;
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
`;
