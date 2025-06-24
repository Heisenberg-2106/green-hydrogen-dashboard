"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Zap } from "lucide-react"

const oemsData = [
  {
    id: 1,
    company: "Nel Hydrogen",
    country: "Norway",
    technology: "Alkaline & PEM",
    capacity: "Up to 20 MW",
    marketShare: "15%",
    indianPresence: "Yes",
    projects: ["NTPC Andhra Pradesh", "IOCL Mathura"],
  },
  {
    id: 2,
    company: "ITM Power",
    country: "UK",
    technology: "PEM",
    capacity: "Up to 100 MW",
    marketShare: "12%",
    indianPresence: "Partnership",
    projects: ["Reliance Jamnagar"],
  },
  {
    id: 3,
    company: "Plug Power",
    country: "USA",
    technology: "PEM",
    capacity: "Up to 5 MW",
    marketShare: "18%",
    indianPresence: "Yes",
    projects: ["Adani Green Energy"],
  },
  {
    id: 4,
    company: "Siemens Energy",
    country: "Germany",
    technology: "PEM",
    capacity: "Up to 300 MW",
    marketShare: "20%",
    indianPresence: "Yes",
    projects: ["JSW Neo Energy", "ACME Solar"],
  },
  {
    id: 5,
    company: "Thyssenkrupp",
    country: "Germany",
    technology: "Alkaline",
    capacity: "Up to 600 MW",
    marketShare: "25%",
    indianPresence: "Partnership",
    projects: ["NEOM Saudi Arabia", "HyDeal Europe"],
  },
  {
    id: 6,
    company: "McPhy Energy",
    country: "France",
    technology: "Alkaline",
    capacity: "Up to 40 MW",
    marketShare: "8%",
    indianPresence: "No",
    projects: ["European Projects"],
  },
  {
    id: 7,
    company: "Ohmium International",
    country: "USA",
    technology: "PEM",
    capacity: "Up to 100 MW",
    marketShare: "5%",
    indianPresence: "Yes",
    projects: ["NTPC Projects", "Indian Oil"],
  },
  {
    id: 8,
    company: "L&T (Domestic)",
    country: "India",
    technology: "Alkaline & PEM",
    capacity: "Up to 50 MW",
    marketShare: "3%",
    indianPresence: "Yes",
    projects: ["Kandla Hub", "Multiple Indian Projects"],
  },
]

export function OemsList() {
  const getPresenceColor = (presence: string) => {
    switch (presence.toLowerCase()) {
      case "yes":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "partnership":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "no":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getTechnologyColor = (tech: string) => {
    if (tech.includes("PEM")) {
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    } else if (tech.includes("Alkaline")) {
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    } else {
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-4 max-h-[500px] overflow-y-auto">
      {oemsData.map((oem) => (
        <Card key={oem.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                {oem.company}
              </CardTitle>
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{oem.country}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={getTechnologyColor(oem.technology)}>{oem.technology}</Badge>
              <Badge className={getPresenceColor(oem.indianPresence)}>India: {oem.indianPresence}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Zap className="h-3 w-3 text-muted-foreground" />
                <div>
                  <p className="text-muted-foreground">Max Capacity</p>
                  <p className="font-medium">{oem.capacity}</p>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground">Market Share</p>
                <p className="font-medium">{oem.marketShare}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Key Projects</p>
              <div className="flex flex-wrap gap-1">
                {oem.projects.map((project, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {project}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
