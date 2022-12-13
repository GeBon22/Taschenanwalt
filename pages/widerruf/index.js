import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";
import StyledBody from "../../components/StyledBody";



export default function WiderrufPage() {
  const path = "/Widerruf und Retoure";
  return (
    <div>
      <StyledBody>
      <Breadcrumb path={path} />
        <StyledLink href="/widerruf/wann">
          <StyledButton>Wann kann ich widerrufen?</StyledButton>
        </StyledLink>
        <StyledLink href="/widerruf/frist">
          <StyledButton>Wie lange kann ich widerrufen?</StyledButton>
        </StyledLink>
        <StyledLink href="/widerruf/inhalt">
          <StyledButton>Was muss in meinem Widerruf stehen?</StyledButton>
        </StyledLink>
        <StyledLink href="/">
          <ZurueckButton />
        </StyledLink>
      </StyledBody>
    </div>
  );
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;