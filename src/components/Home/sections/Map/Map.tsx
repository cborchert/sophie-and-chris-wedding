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
  },
  pins = [],
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
    >
      {pins.map((pin) => (
        <Marker key={`${pin.position.lat},${pin.position.lng}`} {...pin} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(Map);
