// Components==============
import location from "assets/Location.svg";
import GoogleMapReact from "google-map-react";
import React from "react";
import styled from "styled-components";
// =========================

const MapWrapper = styled.div`
  width: 100%;
  height: 600px;
`;

const Location = styled.img`
  position: absolute;
  transform: translate(-50%, -100%);
  width: 25px;
`;

const defaultProps = {
  center: {
    lat: 51.512161,
    lng: 5.39289
  },
  zoom: 13
};

export default function GoogleMap() {
  return (
    <MapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Location src={location} lat={51.50648} lng={5.40481} alt="location" />
      </GoogleMapReact>
    </MapWrapper>
  );
}

// Google Cloud platform to make API key
// npm i google-map-react
// change API key
