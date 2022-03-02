import Text from "../../../../atoms/Text/Text";
import Map from "../../../../atoms/Map/Map";

import homeIcon from "../../../../../images/icons/noun-wedding-location-4521576.svg";
import parkingIcon from "../../../../../images/icons/noun-parking-4629666.svg";

import "./Location.scss";

const Location = ({ wording }) => (
  <div className="theme-2">
    <section className="Location section theme-2">
      <h2>{wording?.title}</h2>
      <div className="Location__directions">
        <div className="Location__directionsText">
          <p>{wording?.description}</p>
          <address className="Location__address">
            <Text>{wording?.address}</Text>
          </address>
          <div>
            <a
              className="button button--alt"
              href={wording?.directionsCtaLink}
              target="_blank"
            >
              {wording?.directionsCtaLabel}
            </a>
          </div>
        </div>
        <div className="Location__map">
          <Map
            center={wording?.map?.homeLatLng}
            pins={[{ position: wording?.map?.homeLatLng, icon: homeIcon }]}
          />
        </div>
      </div>
      <div className="Location__parking">
        <h3 className="Location__parkingTitle">{wording.parkingTitle}</h3>
        <p className="Location__parkingDescription">
          {wording.parkingDescription}
        </p>
        <div>
          <Map
            center={wording?.map?.homeLatLng}
            zoom={14.4}
            pins={[
              ...(wording?.map?.parkingLatLngs?.map((position) => ({
                position,
                icon: parkingIcon,
              })) || []),
              { position: wording?.map?.homeLatLng, icon: homeIcon },
            ]}
            className="Location__parkingMap"
          />
        </div>
      </div>
    </section>
  </div>
);

export default Location;
