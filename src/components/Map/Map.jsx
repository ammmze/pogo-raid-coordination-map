
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { BLUE_PIN } from './markers';
import './Map.css';

const DEFAULT_VIEWPORT = {
  center: [33.307771, -111.7738944],
  zoom: 17,
}


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

  handleClick = e => {
    this.setState({
      hasLocation: true,
      lat: e.latlng.lat,
      lng: e.latlng.lng
    })
  }

  jumpToUsersLocation = () => {
    this.map.leafletElement.locate();
  }

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      viewport: { ...this.state.viewport, center: [e.latlng.lat, e.latlng.lng]}
    })
  }
 
  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map
        ref={(r) => this.map = r}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
        onViewportChanged={this.onViewportChanged}
        viewport={this.state.viewport}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position} icon={BLUE_PIN}>
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