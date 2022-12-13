import styled from "styled-components";
import Link from "next/link";
import {Icon} from "@iconify/react";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";

export default function SchadenPage() {
  const path = "/online bestellen und kaufen/Ware beschädigt";
  return (
    <StyledBody>
      <StyledLink href="/bestellung">
        <Breadcrumb path={path} />
      </StyledLink>
      <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
      <StyledArticle>
        <h3>Meine Bestellung ist beschädigt</h3>
        <p>
          {`Ist die Ware beschädigt bei dir angekommen oder stellt sich die Beschädigung später nach dem Kauf heraus (innerhalb des ersten Jahres), kontaktiere den Verkäufer und mache ihn auf den Schaden aufmerksam. 
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

const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #f3e8e8;
  color: #572887;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 90vw;
  height: 75vh;
  margin-top: 2rem;
  margin-bottom: 10px;
  overflow: auto;
`;

const StyledArticle = styled.article`
  text-align: center;
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledIcon = styled(Icon)`
  width: 40px;
  height: 50px;
  position: absolute;
  top: 6.5rem;
  right: 2rem;
`;
