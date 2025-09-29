import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const markerIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const location = { lat: 46.96240988922117, lng: 31.973445566257347 };
export const MapComponent = () => {
    return (
        <MapContainer center={[location.lat, location.lng]} zoom={16} style={{ width: '100%', height: '400px', borderRadius: '12px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lng]} icon={markerIcon}>
                <Popup>SHOP</Popup>
            </Marker>
        </MapContainer>
    );
};
