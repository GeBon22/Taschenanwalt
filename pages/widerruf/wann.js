import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ReturnButton from "../../components/ReturnButton";
import Body from "../../components/Body";
import StyledIcon from "../../components/BookmarkIcon";
import StyledArticle from "../../components/Article";

export default function WannWiderruf() {
  const path = "/Widerruf und Retoure/Wann kann ich widerrufen?";
  return (
    <Body>
      <StyledLink href="/widerruf">
        <Breadcrumb path={path} />
      </StyledLink>
      <StyledArticle>
        <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
        <p>
          {`Wann kann ich widerrufen?

          Jeder Verbraucher kann sich auf das Widerrufsrecht berufen. Einem
          Unternehmer steht dagegen kein Widerrufsrecht zu.`}
        </p>
      </StyledArticle>
      <StyledLink href="/widerruf">
        <ReturnButton />
      </StyledLink>
    </Body>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
