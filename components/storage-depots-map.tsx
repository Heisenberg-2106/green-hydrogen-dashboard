"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Storage depots data
const storageDepots = [
  {
    id: 1,
    name: "Kandla Storage Terminal",
    state: "Gujarat",
    position: { top: "30%", left: "20%" },
    capacity: "500 tonnes",
    type: "Compressed Gas",
    status: "Operational",
    operator: "GAIL India",
  },
  {
    id: 2,
    name: "Mumbai Port Storage",
    state: "Maharashtra",
    position: { top: "40%", left: "30%" },
    capacity: "800 tonnes",
    type: "Liquid H₂",
    status: "Under Construction",
    operator: "JNPT",
  },
  {
    id: 3,
    name: "Paradip Storage Hub",
    state: "Odisha",
    position: { top: "45%", left: "60%" },
    capacity: "1200 tonnes",
    type: "Compressed Gas",
    status: "Planning",
    operator: "IOCL",
  },
  {
    id: 4,
    name: "Tuticorin Export Terminal",
    state: "Tamil Nadu",
    position: { top: "75%", left: "45%" },
    capacity: "600 tonnes",
    type: "Liquid H₂",
    status: "Operational",
    operator: "V.O. Chidambaranar Port",
  },
  {
    id: 5,
    name: "Vizag Storage Complex",
    state: "Andhra Pradesh",
    position: { top: "55%", left: "55%" },
    capacity: "900 tonnes",
    type: "Compressed Gas",
    status: "Under Construction",
    operator: "HPCL",
  },
  {
    id: 6,
    name: "Delhi NCR Distribution Hub",
    state: "Haryana",
    position: { top: "25%", left: "42%" },
    capacity: "300 tonnes",
    type: "Compressed Gas",
    status: "Planning",
    operator: "NTPC",
  },
  {
    id: 7,
    name: "Chennai Port Storage",
    state: "Tamil Nadu",
    position: { top: "70%", left: "50%" },
    capacity: "700 tonnes",
    type: "Liquid H₂",
    status: "Planning",
    operator: "Chennai Port Trust",
  },
  {
    id: 8,
    name: "Kochi Marine Terminal",
    state: "Kerala",
    position: { top: "78%", left: "40%" },
    capacity: "400 tonnes",
    type: "Liquid H₂",
    status: "Planning",
    operator: "Cochin Port Trust",
  },
]

export function StorageDepotsMap() {
  const [activeDepot, setActiveDepot] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "operational":
        return "bg-green-500"
      case "under construction":
        return "bg-yellow-500"
      case "planning":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "liquid h₂":
        return "❄️"
      case "compressed gas":
        return "🗜️"
      default:
        return "📦"
    }
  }

  return (
    <div className="relative h-[600px] w-full bg-slate-50 dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
      {/* Title */}
      <h3 className="text-lg font-semibold text-center mb-4">Hydrogen Storage Depots & Infrastructure</h3>

      {/* Map container */}
      <div className="relative h-[500px] w-full">
        {/* India outline */}
        <svg viewBox="0 0 800 1000" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <path
            d="M650,150 C700,200 750,300 700,400 C650,500 600,550 550,600 C500,650 450,700 400,750 C350,800 300,850 250,800 C200,750 150,700 100,650 C50,600 50,500 100,400 C150,300 200,200 250,150 C300,100 400,50 500,100 C550,125 600,125 650,150 Z"
            fill="#f8fafc"
            stroke="#cbd5e1"
            strokeWidth="2"
            className="dark:fill-slate-800 dark:stroke-slate-700"
          />
        </svg>

        {/* Storage depot markers */}
        {storageDepots.map((depot) => (
          <div
            key={depot.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: depot.position.top, left: depot.position.left }}
            onMouseEnter={() => setActiveDepot(depot.id)}
            onMouseLeave={() => setActiveDepot(null)}
          >
            <div
              className={`w-6 h-6 rounded-square ${getStatusColor(depot.status)} border-2 border-white shadow-lg hover:scale-125 transition-transform relative flex items-center justify-center text-white text-xs`}
            >
              {getTypeIcon(depot.type)}
              {/* Pulse animation for active depot */}
              {activeDepot === depot.id && (
                <span className="absolute inset-0 rounded-square opacity-0 group-hover:opacity-100 group-hover:animate-ping inline-flex h-full w-full bg-current"></span>
              )}
            </div>

            {/* Tooltip */}
            {activeDepot === depot.id && (
              <Card className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-80 z-10 shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-base">{depot.name}</h4>
                      <Badge className={`text-white ${getStatusColor(depot.status)}`}>{depot.status}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{depot.operator}</p>
                      <p>{depot.state}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Capacity</p>
                        <p className="font-medium">{depot.capacity}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Storage Type</p>
                        <p className="font-medium">{depot.type}</p>
                      </div>
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
        <div className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Storage Status</div>
        <div className="space-y-2 text-sm">
          {["Operational", "Under Construction", "Planning"].map((status) => (
            <div key={status} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-sm ${getStatusColor(status)}`}></div>
              <span className="text-gray-700 dark:text-gray-300">{status}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2 border-t border-gray-200 dark:border-gray-600">
          <div className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Storage Type</div>
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <span>❄️</span>
              <span className="text-gray-700 dark:text-gray-300">Liquid H₂</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🗜️</span>
              <span className="text-gray-700 dark:text-gray-300">Compressed Gas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
