import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";
import StyledBody from "../../components/StyledBody";

export default function BestellungPage() {
  const path = "/online bestellen und kaufen";
  return (
    <div>
      <StyledBody>
        <Breadcrumb path={path} />
        <StyledLink href="/bestellung/verzug">
          <StyledButton>
            Meine Ware kommt nicht an / Mein Paket ist verloren gegangen
          </StyledButton>
        </StyledLink>
        <StyledLink href="/bestellung/schaden">
          <StyledButton>Meine Bestellung ist beschädigt</StyledButton>
        </StyledLink>
        <StyledLink href="/bestellung/irrtum">
          <StyledButton>
            Ich habe die falsche Ware/falsche Stückzahl bestellt
          </StyledButton>
        </StyledLink>
        <StyledLink href="/bestellung/ruecktritt">
          <StyledButton>Ich möchte vom Kaufvertrag zurück treten</StyledButton>
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
