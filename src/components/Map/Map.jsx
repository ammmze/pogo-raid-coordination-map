
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const DEFAULT_VIEWPORT = {
  center: [33.307771, -111.7738944],
  zoom: 17,
}

const markerIcon = new Icon({
  iconUrl: require('./img/marker-icon.png'),
  shadowUrl: require('./img/marker-shadow.png'),
  iconSize: [25, 41], // size of the icon
  shadowSize: [41, 41], // size of the shadow
  iconAnchor: [12.5, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [12, 41],  // the same for the shadow
  popupAnchor: [0, -45]// point from which the popup should open relative to the iconAnchor
})

export default class ViewportExample extends Component {
  state = {
    viewport: DEFAULT_VIEWPORT,
    lat: DEFAULT_VIEWPORT.center[0],
    lng: DEFAULT_VIEWPORT.center[1],
    zoom: DEFAULT_VIEWPORT.zoom,
  }

  onClickReset = () => {
    this.setState({ viewport: DEFAULT_VIEWPORT })
  }

  onViewportChanged = viewport => {
    this.setState({ viewport })
  }
 
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map
        onClick={this.onClickReset}
        onViewportChanged={this.onViewportChanged}
        viewport={this.state.viewport}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={markerIcon}>
          <Popup>
            <span>
              A pretty CSS3 popup. <br /> Easily customizable.
            </span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}