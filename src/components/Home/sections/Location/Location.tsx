import Map from "../Map/Map";

import "./Location.scss";

const Location = ({ wording }) => (
  <section className="Location">
    <h2>{wording.title}</h2>
    <p>{wording.description}</p>
    <address>
      {wording.address?.map?.((line) => (
        <p>{line}</p>
      ))}
    </address>
    <Map
      center={wording.map.homeLatLng}
      pins={[{ position: wording.map.homeLatLng }]}
    />
    <div>
      <a class="button" href={wording.directionsCtaLink} target="_blank">
        {wording.directionsCtaLabel}
      </a>
    </div>
    <h3>{wording.directionsTitle}</h3>
    {wording.directions?.directionsContentLines?.((line) => (
      <p>{line}</p>
    ))}
    <h3>{wording.parkingTitle}</h3>
    <p>{wording.parkingDescription}</p>
    <h4>{wording.additionalParkingTitle}</h4>
    {wording.directions?.additionalParkingLocations?.((line) => (
      <p>{line}</p>
    ))}
    <p>{wording.additionalParkingNote}</p>
    <Map
      center={wording.map.homeLatLng}
      zoom={14}
      pins={wording.map.parkingLatLngs.map((position) => ({ position }))}
    />
  </section>
);

export default Location;
