import Text from "../../../../atoms/Text/Text";
import Map from "../../../../atoms/Map/Map";

import "./Location.scss";

const Location = ({ wording }) => (
  <div className="theme-2">
    <section className="Location section theme-2">
      <h2>{wording.title}</h2>

      <div className="Location__primary">
        <div className="Location__location">
          <p>{wording.description}</p>
          <address>
            <Text>{wording.address}</Text>
          </address>
          <div>
            <a
              className="button"
              href={wording.directionsCtaLink}
              target="_blank"
            >
              {wording.directionsCtaLabel}
            </a>
          </div>
        </div>
      </div>
      <div className="Location__map">
        <Map
          center={wording.map.homeLatLng}
          pins={[{ position: wording.map.homeLatLng }]}
        />
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
  </div>
);

export default Location;
