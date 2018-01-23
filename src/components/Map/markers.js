import { Icon } from 'leaflet';

const BLUE_PIN = new Icon({
  iconUrl: require('./img/marker-icon.png'),
  shadowUrl: require('./img/marker-shadow.png'),
  iconSize: [25, 41], // size of the icon
  shadowSize: [41, 41], // size of the shadow
  iconAnchor: [12.5, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [12, 41],  // the same for the shadow
  popupAnchor: [0, -45]// point from which the popup should open relative to the iconAnchor
});

export default BLUE_PIN;
export { BLUE_PIN };