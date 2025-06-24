"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Demand centers data
const demandCenters = [
  {
    id: 1,
    name: "Tata Steel Jamshedpur",
    sector: "Steel",
    state: "Jharkhand",
    position: { top: "45%", left: "58%" },
    currentDemand: "0.12 MT/year",
    projectedDemand: "0.45 MT/year",
    company: "Tata Steel",
  },
  {
    id: 2,
    name: "JSW Steel Vijayanagar",
    sector: "Steel",
    state: "Karnataka",
    position: { top: "65%", left: "42%" },
    currentDemand: "0.08 MT/year",
    projectedDemand: "0.32 MT/year",
    company: "JSW Steel",
  },
  {
    id: 3,
    name: "Reliance Jamnagar",
    sector: "Oil & Gas",
    state: "Gujarat",
    position: { top: "35%", left: "22%" },
    currentDemand: "0.25 MT/year",
    projectedDemand: "0.55 MT/year",
    company: "Reliance Industries",
  },
  {
    id: 4,
    name: "IOCL Panipat",
    sector: "Oil & Gas",
    state: "Haryana",
    position: { top: "25%", left: "42%" },
    currentDemand: "0.18 MT/year",
    projectedDemand: "0.38 MT/year",
    company: "Indian Oil Corporation",
  },
  {
    id: 5,
    name: "Hindalco Renukoot",
    sector: "Aluminum",
    state: "Uttar Pradesh",
    position: { top: "32%", left: "52%" },
    currentDemand: "0.05 MT/year",
    projectedDemand: "0.18 MT/year",
    company: "Hindalco Industries",
  },
  {
    id: 6,
    name: "NALCO Angul",
    sector: "Aluminum",
    state: "Odisha",
    position: { top: "48%", left: "60%" },
    currentDemand: "0.04 MT/year",
    projectedDemand: "0.15 MT/year",
    company: "National Aluminium Company",
  },
  {
    id: 7,
    name: "UltraTech Cement",
    sector: "Cement",
    state: "Rajasthan",
    position: { top: "30%", left: "35%" },
    currentDemand: "0.02 MT/year",
    projectedDemand: "0.08 MT/year",
    company: "UltraTech Cement",
  },
  {
    id: 8,
    name: "IFFCO Kandla",
    sector: "Fertilizer",
    state: "Gujarat",
    position: { top: "35%", left: "20%" },
    currentDemand: "0.15 MT/year",
    projectedDemand: "0.28 MT/year",
    company: "Indian Farmers Fertiliser Cooperative",
  },
]

export function DemandCentersMap() {
  const [activeCenter, setActiveCenter] = useState<number | null>(null)

  const getSectorColor = (sector: string) => {
    switch (sector.toLowerCase()) {
      case "steel":
        return "bg-red-500"
      case "oil & gas":
        return "bg-purple-500"
      case "aluminum":
        return "bg-cyan-500"
      case "cement":
        return "bg-gray-500"
      case "fertilizer":
        return "bg-green-500"
      default:
        return "bg-blue-500"
    }
  }

  const getSectorIcon = (sector: string) => {
    switch (sector.toLowerCase()) {
      case "steel":
        return "🏭"
      case "oil & gas":
        return "⛽"
      case "aluminum":
        return "🔩"
      case "cement":
        return "🏗️"
      case "fertilizer":
        return "🌾"
      default:
        return "🏢"
    }
  }

  return (
    <div className="relative h-[600px] w-full bg-slate-50 dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4">
      {/* Title */}
      <h3 className="text-lg font-semibold text-center mb-4">Hard-to-Abate Sector Demand Centers</h3>

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

        {/* Demand center markers */}
        {demandCenters.map((center) => (
          <div
            key={center.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: center.position.top, left: center.position.left }}
            onMouseEnter={() => setActiveCenter(center.id)}
            onMouseLeave={() => setActiveCenter(null)}
          >
            <div
              className={`w-6 h-6 rounded-full ${getSectorColor(center.sector)} border-2 border-white shadow-lg hover:scale-125 transition-transform relative flex items-center justify-center text-white text-xs font-bold`}
            >
              {getSectorIcon(center.sector)}
              {/* Pulse animation for active center */}
              {activeCenter === center.id && (
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping inline-flex h-full w-full bg-current"></span>
              )}
            </div>

            {/* Tooltip */}
            {activeCenter === center.id && (
              <Card className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-80 z-10 shadow-xl border-0">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-base">{center.name}</h4>
                      <Badge className={`text-white ${getSectorColor(center.sector)}`}>{center.sector}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{center.company}</p>
                      <p>{center.state}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Current Demand</p>
                        <p className="font-medium">{center.currentDemand}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Projected 2030</p>
                        <p className="font-medium">{center.projectedDemand}</p>
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
        <div className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Sectors</div>
        <div className="space-y-2 text-sm">
          {["Steel", "Oil & Gas", "Aluminum", "Cement", "Fertilizer"].map((sector) => (
            <div key={sector} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${getSectorColor(sector)}`}></div>
              <span className="text-gray-700 dark:text-gray-300">{sector}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
