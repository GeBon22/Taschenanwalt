import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";
import StyledBody from "../../components/StyledBody";
import DefaultButton from "../../components/DefaultButton";

export default function BestellungPage() {
  const path = "/online bestellen und kaufen";
  return (
    <div>
      <StyledBody>
        <Breadcrumb path={path} />
        <StyledLink href="/bestellung/verzug">
          <DefaultButton>
            Meine Ware kommt nicht an / Mein Paket ist verloren gegangen
          </DefaultButton>
        </StyledLink>
        <StyledLink href="/bestellung/schaden">
          <DefaultButton>Meine Bestellung ist beschädigt</DefaultButton>
        </StyledLink>
        <StyledLink href="/bestellung/irrtum">
          <DefaultButton>
            Ich habe die falsche Ware/falsche Stückzahl bestellt
          </DefaultButton>
        </StyledLink>
        <StyledLink href="/bestellung/ruecktritt">
          <DefaultButton>
            Ich möchte vom Kaufvertrag zurück treten
          </DefaultButton>
        </StyledLink>
        <StyledLink href="/">
          <ZurueckButton />
        </StyledLink>
      </StyledBody>
    </div>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
