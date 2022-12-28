import styled from "styled-components";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";
import ReturnButton from "../../components/ReturnButton";
import PageContainer from "../../components/PageContainer";
import StyledArticle from "../../components/Article";
import BookmarkIcon from "../../components/BookmarkIcon";

export default function VerzugPage() {
  const path = "/online bestellen und kaufen/Ware o. Paket verloren";
  return (
    <>
      <BookmarkIcon />
      <PageContainer>
        <StyledLink href="/bestellung">
          <Breadcrumb path={path} />
        </StyledLink>
        <StyledArticle>
          <p>
            {`Meine Ware kommt nicht an!
          
          Für den Verlust der Ware – also bis sie bei Dir ankommt - trägt der Verkäufer das Risiko. 
          Geht das Paket verloren oder gibt es über den Verbleib der Ware keine Informationen, liegt die Verantwortung beim Verkäufer. 
      Kontaktiere den Verkäufer und mache ihn auf den Schaden aufmerksam. 
      Auch hier ist es ratsam, eine angemessene Frist (zB. 7-10 Werktage) zu setzen, um dem Verkäufer ausreichend Zeit zu geben, eine Lösung anzubieten und seiner Pflicht aus dem Vertrag nachzukommen.`}{" "}
          </p>
          <StyledLink href="/bestellung">
            <ReturnButton />
          </StyledLink>
        </StyledArticle>
      </PageContainer>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
