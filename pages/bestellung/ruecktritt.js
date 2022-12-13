import styled from "styled-components";
import Link from "next/link";
import StyledIcon from "../../components/BookmarkIcon";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Breadcrumb from "../../components/Breadcrumb";
import ReturnButton from "../../components/ReturnButton";
import Body from "../../components/Body";
import CopyButton from "../../components/CopyButton";
import StyledArticle from "../../components/Article";

export default function RuecktrittPage() {
  const path = "/online bestellen und kaufen/Rücktritt";
  return (
    <Body>
      <StyledLink href="/bestellung">
        <Breadcrumb path={path} />
      </StyledLink>
      <StyledIcon icon="mingcute:bookmark-fill" color="#572887" />
      <StyledArticle>
        <p>
          {`Ich möchte vom Kaufvertrag zurück treten.
          
          Für den Rücktritt vom Kaufvertrag sind mehrere Bedingungen zu erfüllen. 
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
        <CopyButton>Anschreiben kopieren</CopyButton>
      </CopyToClipboard>
      <StyledLink href="/bestellung">
        <ReturnButton />
      </StyledLink>
    </Body>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;
