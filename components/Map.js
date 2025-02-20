// components/Map.js
"use client"
import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Dummy data for hazards
const hazards = [
  { id: 1, lat: 51.505, lng: -0.09, title: "Pothole", severity: "Medium" },
  { id: 2, lat: 51.51, lng: -0.1, title: "Broken Streetlight", severity: "Low" },
  { id: 3, lat: 51.515, lng: -0.09, title: "Fallen Tree", severity: "High" },
]

// Fix Leaflet icon loading issue
const fixLeafletIcon = () => {
  // Delete the default icon
  delete L.Icon.Default.prototype._getIconUrl;

  // Set up new icon paths
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });
};

export default function Map() {
  const [center] = useState({ lat: 51.505, lng: -0.09 })
  const [zoom] = useState(13)
  const [customIcon, setCustomIcon] = useState(null)
  
  useEffect(() => {
    // Fix Leaflet icon issues
    fixLeafletIcon();
    
    // Create custom icon once we're in the browser
    setCustomIcon(new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
      iconSize: [38, 38],
    }))
  }, [])
  
  if (!customIcon) {
    return <div>Loading map icons...</div>
  }

  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hazards.map((hazard) => (
        <Marker 
          key={hazard.id} 
          position={[hazard.lat, hazard.lng]} 
          icon={customIcon}
        >
          <Popup>
            <h3 className="font-bold">{hazard.title}</h3>
            <p>Severity: {hazard.severity}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
