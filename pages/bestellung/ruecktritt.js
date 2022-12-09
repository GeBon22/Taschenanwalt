import styled from "styled-components";
import Link from "next/link";
import {Icon} from "@iconify/react";
import {CopyToClipboard} from "react-copy-to-clipboard";

export default function RuecktrittPage() {
  return (
    <StyledBody>
      <StyledBreadcrumb>
        <StyledLink href="/bestellung">/online bestellen u. kaufen</StyledLink>
        /Rücktritt
      </StyledBreadcrumb>
      <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
      <StyledArticle>
        <h3>Ich möchte vom Kaufvertrag zurück treten</h3>
        <p>
          {`Für den Rücktritt vom Kaufvertrag sind mehrere Bedingungen zu erfüllen. 
Als Käufer musst Du dem Verkäufer zunächst eine angemessene Frist zur Nacherfüllung geben (zB. 7-10 Werktage). 

Die Frist ist entbehrlich, wenn der Verkäufer die Nacherfüllung endgültig verweigert, die Nacherfüllung bis zu einer gesetzten Frist nicht erfolgt ist, oder besondere Umstände vorliegen, die im beiderseitigen Interesse einen Rücktritt rechtfertigen.

Des Weiteren muss ein Rücktrittsgrund vorliegen. Das kann das fehlende Liefern der Ware oder einer beschädigten Ware sein – aber nur, wenn der Verkäufer seine Frist zur Nachbesserung/Neulieferung hat verstreichen lassen oder er eine Nacherfüllung vollständig verweigert.

Ein  Rücktritt ist außerdem ausgeschlossen, wenn eine Teilleistung erfolgt ist und Du nicht nachweisen kannst, dass Du kein Interesse an der teilweisen Leistungserbringung hast.
Auch ausgeschlossen ist, wenn die Ware nur in einem unerheblichen Maß beschädigt war. 
Für weitere Infos dazu, klicke auf die jeweiligen Links weiter unten.
`}
        </p>
        </StyledArticle>
        <CopyToClipboard
          text="Sehr geehrte Damen und Herren. Hiermit trete/n ich/wir von dem abgeschlossenen Vertrag über den Kauf folgender Waren/Einbringung
     folgender Dienstleistungen:[] zurück. Bestellt am [] und erhalten am []. Grund dafür ist []. Die Voraussetzungen des Rücktritts liegen hier vor.
     Bitte bestätigen Sie mir den Erhalt des Schreibens. 
     [Name und Anschrift des Verbrauchers] [Datum] [Unterschrift]."
          onCopy={() => alert("Anschreiben in die Zwischenablage kopiert!")}
        >
          <StyledKopierenButton>Anschreiben kopieren</StyledKopierenButton>
        </CopyToClipboard>
        <StyledLink href="/bestellung">
          <StyledZurueckButton>zurück</StyledZurueckButton>
        </StyledLink>
 
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
  margin-top: 1rem;
  margin-bottom: 10px;
  overflow: auto;
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

const StyledIcon = styled(Icon)`
  width: 40px;
  height: 50px;
  position: absolute;
  top: 7.5rem;
  right: 2rem;
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
  cursor: pointer;
  margin-bottom: 20px;
`;

const StyledKopierenButton = styled.button`
  color: #572887;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 15vh;
  width: 40vw;
  position: relative;
  cursor: pointer;
`;

const StyledArticle = styled.article`
  text-align: justify;
  text-align-last: none;
  color: #572887;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 1rem;
  white-space: pre-line;
`;
