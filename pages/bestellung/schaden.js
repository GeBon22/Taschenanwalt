import styled from "styled-components";
import Link from "next/link";
import StyledIcon from "../../components/BookmarkIcon";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";
import StyledBody from "../../components/StyledBody";
import StyledArticle from "../../components/Article";

export default function SchadenPage() {
  const path = "/online bestellen und kaufen/Ware beschädigt";
  return (
    <StyledBody>
      <StyledLink href="/bestellung">
        <Breadcrumb path={path} />
      </StyledLink>
      <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
      <StyledArticle>
        <p>
          {`Meine Bestellung ist beschädigt.
          
          Ist die Ware beschädigt bei dir angekommen oder stellt sich die Beschädigung später nach dem Kauf heraus (innerhalb des ersten Jahres), kontaktiere den Verkäufer und mache ihn auf den Schaden aufmerksam. 
          Auch hier ist es ratsam, eine angemessene Frist (zB. 7-10 Werktage) zu setzen, um dem Verkäufer ausreichend Zeit zu geben, eine Lösung anzubieten und seiner Pflicht aus dem Vertrag nachzukommen – Stichwort Gewährleistung.
Beachte: Du hast als Käufer ein Wahlrecht, ob die Ware repariert oder Dir eine neue Ware zugeschickt werden soll. 
Entscheidest Du Dich für eine Reparatur, bist du seit 2022 nun auch ausdrücklich gesetzlich verpflichtet, die Ware dem Verkäufer zum Zweck der Reparatur zur Verfügung zu stellen – also zurück zu senden oder den Zugang bei Dir zu ermöglichen.
`}
        </p>
        <StyledLink href="/bestellung">
          <ZurueckButton />
        </StyledLink>
      </StyledArticle>
    </StyledBody>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
