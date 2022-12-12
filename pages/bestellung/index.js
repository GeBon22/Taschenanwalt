import styled from "styled-components";
import Link from "next/link";

export default function BestellungPage() {
  return (
    <div>
      <StyledBody>
        <StyledBreadcrumb>/online bestellen und kaufen</StyledBreadcrumb>
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
          <StyledZurueckButton>zurück</StyledZurueckButton>
        </StyledLink>
      </StyledBody>
    </div>
  );
}

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
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
  font-size: 1rem;
  font-weight: 400;
  position: absolute;
  top: 125px;
  left: 37px;
`;

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
`;
