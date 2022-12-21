import PageContainer from "../../components/PageContainer";
import Map from "../../components/Map";
import LawyerList from "../../components/LawyerList";

export default function MapPage() {
  return (
    <div>
      <PageContainer>
        <h3>Finde Rechtsanwälte in Deiner Nähe:</h3>
        <Map />
        <LawyerList />
      </PageContainer>
    </div>
  );
}
