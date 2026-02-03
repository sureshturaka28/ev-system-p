import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Props {
  data: any[];
}

const MapView = ({ data }: Props) => {
  return (
    <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border p-6 rounded-2xl shadow-xl">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">
        🌍 Geographic Distribution of EV Registrations
      </h2>

      <MapContainer
        center={[47.5, -120.5]}
        zoom={7}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.slice(0, 500).map((d, index) => (
          d.Latitude && d.Longitude && (
            <CircleMarker
              key={index}
              center={[Number(d.Latitude), Number(d.Longitude)]}
              radius={4}
              pathOptions={{ color: "blue" }}
            >
              <Tooltip>
                {d.City} - {d.Make}
              </Tooltip>
            </CircleMarker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
