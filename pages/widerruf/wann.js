import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ReturnButton from "../../components/ReturnButton";
import PageContainer from "../../components/PageContainer";
import StyledArticle from "../../components/Article";
import BookmarkIcon from "../../components/BookmarkIcon";

export default function WannWiderruf() {
  const path = "/Widerruf und Retoure / Wann kann ich ...";
  return (
    <>
      <BookmarkIcon />
      <PageContainer>
        <StyledLink href="/widerruf">
          <Breadcrumb path={path} />
        </StyledLink>
        <StyledArticle>
          <h3>Wann kann ich widerrufen?</h3>
          <p>
            {`Jeder Verbraucher kann sich auf das Widerrufsrecht berufen. Einem
          Unternehmer steht dagegen kein Widerrufsrecht zu.`}
          </p>
        </StyledArticle>
        <StyledLink href="/widerruf">
          <ReturnButton />
        </StyledLink>
      </PageContainer>
    </>
  );
}

//TODO: mehr Inhalt

const StyledLink = styled(Link)`
  text-decoration: none;
`;
