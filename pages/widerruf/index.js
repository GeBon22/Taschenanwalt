import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/ReturnButton";
import Body from "../../components/Body";
import DefaultButton from "../../components/DefaultButton";

export default function WiderrufPage() {
  const path = "/Widerruf und Retoure";
  return (
    <>
      <Body>
        <Breadcrumb path={path} />
        <StyledLink href="/widerruf/wann">
          <DefaultButton>Wann kann ich widerrufen?</DefaultButton>
        </StyledLink>
        <StyledLink href="/widerruf/frist">
          <DefaultButton>Wie lange kann ich widerrufen?</DefaultButton>
        </StyledLink>
        <StyledLink href="/widerruf/inhalt">
          <DefaultButton>Was muss in meinem Widerruf stehen?</DefaultButton>
        </StyledLink>
        <StyledLink href="/">
          <ZurueckButton />
        </StyledLink>
      </Body>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
