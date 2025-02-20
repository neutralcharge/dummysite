// app/map/page.js
"use client"
import { useState } from "react"
import dynamic from 'next/dynamic'

// Dynamically import the entire map with SSR disabled
const DynamicMap = dynamic(
  () => import('../../components/Map'),
  { 
    ssr: false,
    loading: () => <p>Loading Map...</p>
  }
)

export default function MapPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Safety Map</h1>
      <div className="h-[600px] w-full">
        <DynamicMap />
      </div>
    </div>
  )
}
