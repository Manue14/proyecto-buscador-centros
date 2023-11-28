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
            className="h-full w-[95%] m-auto z-0"
            center={[42.42308087172559, -6.684811365689726]}
            zoom={9}
            minZoom={7}
            maxZoom={18}
            maxBounds={[[41.76051583375554, -9.776013316202771], [43.95077106545359, -6.5240602225485205]]}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* TODO: Add markers */}
        </MapContainer>
    )
}