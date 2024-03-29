import { memo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

function Map({
  center,
  zoom = 11,
  options = {
    disableDefaultUI: true,
  },
  containerStyle = {
    width: "450px",
    height: "450px",
    maxWidth: "100%",
    margin: "0 auto",
  },
  pins = [],
  className,
}) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env?.PUBLIC_GOOGLE_MAPS_API_KEY?.toString(),
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
      options={options}
      className={className}
    >
      {pins.map((pin) => (
        <Marker
          key={`${pin.position.lat},${pin.position.lng}`}
          {...pin}
          icon={
            pin.icon
              ? {
                  url: pin.icon,
                  anchor:
                    window?.google?.maps &&
                    new window.google.maps.Point(20, 20),
                  scaledSize:
                    window?.google?.maps && new window.google.maps.Size(40, 40),
                }
              : undefined
          }
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(Map);
