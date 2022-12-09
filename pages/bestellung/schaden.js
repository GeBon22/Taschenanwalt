import styled from "styled-components";
import Link from "next/link";
import {Icon} from "@iconify/react";

export default function SchadenPage() {
  return (
    <StyledBody>
      <StyledBreadcrumb>
        <StyledLink href="/bestellung">/online bestellen u. kaufen</StyledLink>
        /Ware beschädigt
      </StyledBreadcrumb>
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
          <StyledZurueckButton>zurück</StyledZurueckButton>
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
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 10px;
`;

const StyledBreadcrumb = styled.h3`
  color: #572887;
  font-size: 15px;
  font-weight: 400;
  position: absolute;
  top: 8rem;
  left: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledZurueckButton = styled.button`
  color: #572887;
  font-size: 18px;
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
  top: 2rem;
  cursor: pointer;
  margin-bottom: 4rem;
`;

const StyledIcon = styled(Icon)`
  width: 40px;
  height: 50px;
  position: absolute;
  top: 6.5rem;
  right: 2rem;
`;
