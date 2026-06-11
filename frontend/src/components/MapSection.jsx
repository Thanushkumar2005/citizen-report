import { useState, useEffect } from "react";
import Select from "react-select";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./../styles/MapSection.css";

// Fix Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const districtCoordinates = {
  Ariyalur: [11.1401, 79.0786],
  Chengalpattu: [12.6841, 79.9836],
  Chennai: [13.0827, 80.2707],
  Coimbatore: [11.0168, 76.9558],
  Cuddalore: [11.748, 79.7714],
  Dharmapuri: [12.1277, 78.1579],
  Dindigul: [10.3673, 77.9803],
  Erode: [11.341, 77.7172],
  Kallakurichi: [11.7401, 78.959],
  Kanchipuram: [12.8342, 79.7036],
  Kanniyakumari: [8.0883, 77.5385],
  Karur: [10.9601, 78.0766],
  Krishnagiri: [12.5186, 78.2137],
  Madurai: [9.9252, 78.1198],
  Mayiladuthurai: [11.1035, 79.655],
  Nagapattinam: [10.7656, 79.8428],
  Namakkal: [11.2189, 78.1674],
  Nilgiris: [11.4064, 76.6932],
  Perambalur: [11.2342, 78.88],
  Pudukkottai: [10.3797, 78.8208],
  Ramanathapuram: [9.3716, 78.8308],
  Ranipet: [12.9273, 79.3333],
  Salem: [11.6643, 78.146],
  Sivaganga: [9.847, 78.4809],
  Tenkasi: [8.9591, 77.3152],
  Thanjavur: [10.7867, 79.1378],
  Theni: [10.0104, 77.4768],
  Thoothukudi: [8.7642, 78.1348],
  Tiruchirappalli: [10.7905, 78.7047],
  Tirunelveli: [8.7139, 77.7567],
  Tirupathur: [12.497, 78.567],
  Tiruppur: [11.1085, 77.3411],
  Tiruvallur: [13.1439, 79.9087],
  Tiruvannamalai: [12.2253, 79.0747],
  Tiruvarur: [10.7722, 79.6368],
  Vellore: [12.9165, 79.1325],
  Viluppuram: [11.939, 79.4861],
  Virudhunagar: [9.5851, 77.957],
};

function FlyToDistrict({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.flyTo(center, 10);
    }
  }, [center, map]);

  return null;
}

function LocationPicker({
  setSelectedLocation,
  setSelectedArea,
}) {
  useMapEvents({
    async click(e) {
      const lat = e.latlng.lat;
      const lng = e.latlng.lng;

      setSelectedLocation({
        lat,
        lng,
      });

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );

        const data = await response.json();

        const area =
          data.address?.suburb ||
          data.address?.neighbourhood ||
          data.address?.village ||
          data.address?.town ||
          data.address?.city ||
          data.display_name;

        setSelectedArea(area);
      } catch (error) {
        console.error(error);
        setSelectedArea("Area not found");
      }
    },
  });

  return null;
}

function MapSection() {
  const [selectedDistrict, setSelectedDistrict] =
    useState(null);

  const [selectedLocation, setSelectedLocation] =
    useState(null);

  const [selectedArea, setSelectedArea] =
    useState("");

  const [showMap, setShowMap] = useState(false);

  const districtOptions = Object.keys(
    districtCoordinates
  ).map((district) => ({
    value: district,
    label: district,
  }));

  return (
    <section className="map-section">
      <div className="map-content">
        <h2>லைவ்மேப்</h2>
        <h3>Live GIS Map</h3>
        <h3>
          Select District → Show Map → Click
          Location
        </h3>
      </div>

      <div className="search-bar">
        <Select
          className="district-select"
          options={districtOptions}
          value={selectedDistrict}
          onChange={(district) => {
            setSelectedDistrict(district);
            setShowMap(false);
            setSelectedLocation(null);
            setSelectedArea("");
          }}
          placeholder="Search District..."
          isSearchable
        />

        <button
          className="search-btn"
          disabled={!selectedDistrict}
          onClick={() => setShowMap(true)}
        >
          Show Map
        </button>
      </div>

      {showMap && selectedDistrict && (
        <div className="map-container">
          <MapContainer
            center={[11.1271, 78.6569]}
            zoom={7}
            className="leaflet-container"
          >
            <TileLayer
              attribution="© OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <FlyToDistrict
              center={
                districtCoordinates[
                  selectedDistrict.value
                ]
              }
            />

            <LocationPicker
              setSelectedLocation={
                setSelectedLocation
              }
              setSelectedArea={setSelectedArea}
            />

            {selectedLocation && (
              <Marker
                position={[
                  selectedLocation.lat,
                  selectedLocation.lng,
                ]}
              >
                <Popup>
                  Selected Location
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      )}

      {showMap && selectedDistrict && (
        <div className="selected-location">
          <h3>Selected District</h3>
          <p>{selectedDistrict.label}</p>
        </div>
      )}

      {selectedLocation && (
        <div className="selected-location">
          <h3>Selected Location</h3>

          <p>
            <strong>District:</strong>{" "}
            {selectedDistrict?.label}
          </p>

          <p>
            <strong>Area:</strong>{" "}
            {selectedArea || "Loading..."}
          </p>

          <p>
            <strong>Latitude:</strong>{" "}
            {selectedLocation.lat.toFixed(6)}
          </p>

          <p>
            <strong>Longitude:</strong>{" "}
            {selectedLocation.lng.toFixed(6)}
          </p>

          <button className="complaint-btn">
            Submit Complaint
          </button>
        </div>
      )}
    </section>
  );
}

export default MapSection;