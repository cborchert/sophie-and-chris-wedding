import Text from "../../../atoms/Text/Text";
import Map from "../Map/Map";

import "./Location.scss";

const Location = ({ wording }) => (
  <section className="Location">
    <h2>{wording.title}</h2>
    <p>{wording.description}</p>
    <address>
      <Text>{wording.address}</Text>
    </address>
    <Map
      center={wording.map.homeLatLng}
      pins={[{ position: wording.map.homeLatLng }]}
    />
    <div>
      <a className="button" href={wording.directionsCtaLink} target="_blank">
        {wording.directionsCtaLabel}
      </a>
    </div>
    <h3>{wording.directionsTitle}</h3>
    <Text>{wording.directions}</Text>
    <h3>{wording.parkingTitle}</h3>
    <p>{wording.parkingDescription}</p>
    <h4>{wording.additionalParkingTitle}</h4>
    <p>{wording.additionalParkingNote}</p>
    <Map
      center={wording.map.homeLatLng}
      zoom={14}
      pins={wording.map.parkingLatLngs.map((position) => ({ position }))}
    />
  </section>
);

export default Location;
