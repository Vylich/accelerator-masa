import L from '../vendor/leaflet';

const createMap = () => {
  const map = L.map('map', {
    scrollWheelZoom: false,
  }).setView(
      {
        lat: 55.02858471331637,
        lng: 82.92812299994901,
      },
      19
  );

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: './img/icons/map-marker.svg',
    iconSize: [48, 48],
    iconAnchor: [19, 50],
  });

  const marker = L.marker({
    lat: 55.02888471331637,
    lng: 82.92812299994901,
  },
  {
    icon: mainPinIcon,
  }
  );

  marker.addTo(map);
};

export {createMap};
