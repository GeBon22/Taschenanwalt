import styled from "styled-components";
import Link from "next/link";
import lottie from "lottie-web";
import {useEffect, useRef} from "react";
import Body from "/components/Body";

export default function HomePage() {
  const widerrufContainer = useRef(null);
  const bestellungContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: bestellungContainer.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/BestellungAnimation.json"),
    });
    return () => lottie.destroy();
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: widerrufContainer.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("/public/WiderrufAnimation.json"),
    });
    return () => lottie.destroy();
  }, []);

  return (
    <>
      <Body>
        <h3>Wo drückt der Schuh?</h3>

        <StyledLink href="/bestellung">
          <StyledBestellungButton>
            <Animation ref={bestellungContainer} />
            Online bestellen und kaufen
          </StyledBestellungButton>
        </StyledLink>

        <StyledLink href="/widerruf">
          <StyledWiderufButton>
            <Animation ref={widerrufContainer} />
            Widerruf und Retoure
          </StyledWiderufButton>
        </StyledLink>
      </Body>
    </>
  );
}

const StyledBestellungButton = styled.button`
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 20vh;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledWiderufButton = styled.button`
  color: #572887;
  font-size: 1.2rem;
  font-weight: 300;
  font-style: normal;
  text-decoration: none;
  background-color: #e6ceee;
  border-radius: 10px;
  border: 1px solid rgba(163, 134, 182, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 20vh;
  width: 80vw;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
`;

const Animation = styled.div`
  width: 190px;
  height: 220px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
