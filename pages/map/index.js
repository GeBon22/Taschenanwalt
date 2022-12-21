import Body from "../../components/Body";
import Map from "../../components/Map";
import LawyerList from "../../components/LawyerList";

export default function MapPage() {
  return (
    <div>
      <Body>
        <h3>Finde Rechtsanwälte in Deiner Nähe:</h3>
        <Map />
        <LawyerList />
      </Body>
    </div>
  );
}
