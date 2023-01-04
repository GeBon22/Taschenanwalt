import styled from "styled-components";
import Link from "next/link";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Breadcrumb from "../../components/Breadcrumb";
import ReturnButton from "../../components/ReturnButton";
import PageContainer from "../../components/PageContainer";
import StyledArticle from "../../components/Article";
import BookmarkIcon from "../../components/BookmarkIcon";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RuecktrittPage() {
  const path = "/online bestellen und kaufen/Rücktritt";

  const notify = () =>
    toast.success("Anschreiben gespeichert!", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <BookmarkIcon />
      <PageContainer>
        <StyledLink href="/bestellung">
          <Breadcrumb path={path} />
        </StyledLink>
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
          onCopy={notify}
        >
          <CopyButton>Anschreiben kopieren</CopyButton>
        </CopyToClipboard>
        <StyledLink href="/bestellung">
          <ReturnButton />
        </StyledLink>
      </PageContainer>
      <ToastContainer />
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CopyButton = styled.button`
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: var(--primary-background-color);
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 10vh;
  width: 40vw;
  position: relative;
  cursor: pointer;
`;
