import React from 'react';
import "leaflet/dist/leaflet.css"
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

/*import L from 'leaflet'*/
/*delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});*/

export default function Map() {
    return(
        <MapContainer
            className="full-height-map"
            center={[38, 139.69222]}
            zoom={6}
            minZoom={3}
            maxZoom={19}
            maxBounds={[[-85.06, -180], [85.06, 180]]}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* TODO: Add markers */}
        </MapContainer>
    )
}