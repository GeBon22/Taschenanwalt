import styled from "styled-components";
import Link from "next/link";
import {Icon} from "@iconify/react";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Breadcrumb from "../../components/Breadcrumb";
import ZurueckButton from "../../components/Zurueckbutton";
import StyledBody from "../../components/StyledBody";

export default function RuecktrittPage() {
  const path = "/online bestellen und kaufen/Rücktritt";
  return (
    <StyledBody>
      <StyledLink href="/bestellung">
        <Breadcrumb path={path} />
      </StyledLink>
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
        <ZurueckButton />
      </StyledLink>
    </StyledBody>
  );
}

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

const StyledKopierenButton = styled.button`
  color: #572887;
  font-size: 1.2rem;
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
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  padding: 1rem;
  white-space: pre-line;
`;
