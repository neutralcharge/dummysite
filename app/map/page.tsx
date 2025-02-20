"use client"

import { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { Icon } from "leaflet"

// Dummy data for hazards
const hazards = [
  { id: 1, lat: 51.505, lng: -0.09, title: "Pothole", severity: "Medium" },
  { id: 2, lat: 51.51, lng: -0.1, title: "Broken Streetlight", severity: "Low" },
  { id: 3, lat: 51.515, lng: -0.09, title: "Fallen Tree", severity: "High" },
]

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38],
})

export default function MapPage() {
  const [center] = useState({ lat: 51.505, lng: -0.09 })
  const [zoom] = useState(13)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Safety Map</h1>
      <div className="h-[600px] w-full">
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
            <Marker key={hazard.id} position={[hazard.lat, hazard.lng]} icon={customIcon}>
              <Popup>
                <h3 className="font-bold">{hazard.title}</h3>
                <p>Severity: {hazard.severity}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}

