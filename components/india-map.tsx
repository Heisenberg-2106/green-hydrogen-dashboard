"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

// Hub data
const hubs = [
  {
    id: 1,
    name: "Kandla",
    state: "Gujarat",
    status: "Construction",
    position: { top: "30%", left: "20%" },
    capacity: "0.5 MT/year",
    reCapacity: "2.5 GW",
    stakeholders: "NTPC, L&T, IOC",
  },
  {
    id: 2,
    name: "Paradip",
    state: "Odisha",
    status: "Planning",
    position: { top: "45%", left: "60%" },
    capacity: "0.8 MT/year",
    reCapacity: "4 GW",
    stakeholders: "IOCL, GAIL, ONGC",
  },
  {
    id: 3,
    name: "Tuticorin",
    state: "Tamil Nadu",
    status: "Operational",
    position: { top: "75%", left: "45%" },
    capacity: "0.3 MT/year",
    reCapacity: "1.5 GW",
    stakeholders: "Adani, ReNew Power",
  },
  {
    id: 4,
    name: "Vizag",
    state: "Andhra Pradesh",
    status: "Planning",
    position: { top: "55%", left: "55%" },
    capacity: "0.4 MT/year",
    reCapacity: "2 GW",
    stakeholders: "HPCL, NTPC",
  },
  {
    id: 5,
    name: "Mumbai",
    state: "Maharashtra",
    status: "Planning",
    position: { top: "40%", left: "30%" },
    capacity: "0.6 MT/year",
    reCapacity: "3 GW",
    stakeholders: "Reliance, JSW Energy",
  },
]

export function IndiaMap() {
  const [activeHub, setActiveHub] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "operational":
        return "bg-green-500"
      case "construction":
        return "bg-yellow-500"
      case "planning":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="relative h-[600px] w-full bg-slate-50 dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
      {/* Title */}
      <h3 className="text-lg font-semibold text-center mb-4">Green Hydrogen Hubs in India</h3>
      
      {/* Map container */}
      <div className="relative h-[500px] w-full">
        {/* India outline with more accurate shape */}
        <svg
          viewBox="0 0 800 1000"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* India outline path - simplified but more accurate than CSS polygon */}
          <path
            d="M650,150 C700,200 750,300 700,400 C650,500 600,550 550,600 C500,650 450,700 400,750 C350,800 300,850 250,800 C200,750 150,700 100,650 C50,600 50,500 100,400 C150,300 200,200 250,150 C300,100 400,50 500,100 C550,125 600,125 650,150 Z"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="2"
            className="dark:fill-slate-800 dark:stroke-slate-700"
          />
          
          {/* State borders (simplified) */}
          <path
            d="M300,300 C350,350 400,400 450,450"
            stroke="#e2e8f0"
            strokeWidth="1"
            fill="none"
            className="dark:stroke-slate-700"
          />
        </svg>

        {/* Hub markers */}
        {hubs.map((hub) => (
          <div
            key={hub.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: hub.position.top, left: hub.position.left }}
            onMouseEnter={() => setActiveHub(hub.id)}
            onMouseLeave={() => setActiveHub(null)}
          >
            <div
              className={`w-5 h-5 rounded-full ${getStatusColor(hub.status)} border-2 border-white shadow-lg hover:scale-125 transition-transform relative`}
            >
              {/* Pulse animation for active hub */}
              {activeHub === hub.id && (
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping inline-flex h-full w-full bg-current"></span>
              )}
            </div>

            {/* Tooltip */}
            {activeHub === hub.id && (
              <Card className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-72 z-10 shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-base">
                        {hub.name}, {hub.state}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(hub.status)}`}>
                        {hub.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Capacity</p>
                        <p className="font-medium">{hub.capacity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">RE Capacity</p>
                        <p className="font-medium">{hub.reCapacity}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Stakeholders</p>
                      <p className="font-medium text-sm">{hub.stakeholders}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 right-6 bg-white dark:bg-slate-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Hub Status</div>
        <div className="space-y-2 text-sm">
          {["Operational", "Construction", "Planning"].map((status) => (
            <div key={status} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(status)}`}></div>
              <span className="text-gray-700 dark:text-gray-300">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
