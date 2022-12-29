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

export default function WannWiderruf() {
  const path = "/Widerruf und Retoure/Was muss im Widerruf stehen?";

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
        <StyledLink href="/widerruf">
          <Breadcrumb path={path} />
        </StyledLink>
        <StyledArticle>
          <p>
            {`Was muss in einem Widerruf stehen?

          In einem Widerruf muss nicht ausdrücklich das Wort Widerruf verwendet
        werden. Es empfiehlt sicher aber, klar zu machen, dass man
        vom Vertrag Abstand nehmen möchte und den Kaufpreis zurück erstattet
        verlangt.
        Es muss außerdem kein Grund für den Widerruf angegeben werden.
        
        Möchtest Du ein vorgefertigtes Anschreiben verwenden, drücke den Button und Fülle die eckigen Klammern mit dem zutreffenden Inhalt aus.`}
          </p>
        </StyledArticle>

        <CopyToClipboard
          text="Sehr geehrte Damen und Herren. Hiermit widerrufe/n ich/wir den abgeschlossenen Vertrag über den Kauf folgender Waren/Einbringung
     folgender Dienstleistungen:[]. Bestellt am [] und erhalten am []. [Name und Anschrift des Verbrauchers] [Datum] [Unterschrift]."
          onCopy={notify}
        >
          <CopyButton>Anschreiben kopieren</CopyButton>
        </CopyToClipboard>
        <ToastContainer />

        <StyledLink href="/widerruf">
          <ReturnButton />
        </StyledLink>
      </PageContainer>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CopyButton = styled.button`
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 10vh;
  width: 40vw;
  position: relative;
  cursor: pointer;
`;
