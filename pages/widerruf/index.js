import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/ReturnButton";
import PageContainer from "../../components/PageContainer";
import DefaultButton from "../../components/DefaultButton";

export default function WiderrufPage() {
  const path = "/Widerruf und Retoure";
  return (
    <PageContainer>
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
    </PageContainer>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
