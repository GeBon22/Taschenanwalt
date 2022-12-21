import PageContainer from "../../components/PageContainer";
import Map from "../../components/Map";
import LawyerList from "../../components/LawyerList";
import styled from "styled-components";

export default function MapPage() {
  return (
    <div>
      <PageContainer>
        <StyledH3>Rechtsanwälte in Deiner Nähe</StyledH3>
        <Map />
        <LawyerList />
      </PageContainer>
    </div>
  );
}

const StyledH3 = styled.h3`
padding-top: 0;
margin: 0;
`;