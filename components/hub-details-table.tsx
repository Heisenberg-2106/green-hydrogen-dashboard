"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search } from "lucide-react"

const hubsData = [
  {
    id: 1,
    location: "Kandla, Gujarat",
    stage: "Construction",
    productionCapacity: "0.5",
    electrolyserCapacity: "250",
    electrolyserType: "PEM",
    renewableEnergy: "2.5 GW (Solar: 1.8 GW, Wind: 0.7 GW)",
    associatedProjects: "Steel, Shipping, Ammonia",
    stakeholders: "NTPC, L&T, IOC",
  },
  {
    id: 2,
    location: "Paradip, Odisha",
    stage: "Planning",
    productionCapacity: "0.8",
    electrolyserCapacity: "400",
    electrolyserType: "Alkaline",
    renewableEnergy: "4.0 GW (Solar: 2.5 GW, Wind: 1.5 GW)",
    associatedProjects: "Steel, Fertilizer",
    stakeholders: "IOCL, GAIL, ONGC",
  },
  {
    id: 3,
    location: "Tuticorin, Tamil Nadu",
    stage: "Operational",
    productionCapacity: "0.3",
    electrolyserCapacity: "150",
    electrolyserType: "SOEC",
    renewableEnergy: "1.5 GW (Solar: 1.0 GW, Wind: 0.5 GW)",
    associatedProjects: "Shipping, Mobility",
    stakeholders: "Adani, ReNew Power",
  },
  {
    id: 4,
    location: "Vizag, Andhra Pradesh",
    stage: "Planning",
    productionCapacity: "0.4",
    electrolyserCapacity: "200",
    electrolyserType: "PEM",
    renewableEnergy: "2.0 GW (Solar: 1.2 GW, Wind: 0.8 GW)",
    associatedProjects: "Steel, Petrochemicals",
    stakeholders: "HPCL, NTPC",
  },
  {
    id: 5,
    location: "Mumbai, Maharashtra",
    stage: "Planning",
    productionCapacity: "0.6",
    electrolyserCapacity: "300",
    electrolyserType: "Alkaline",
    renewableEnergy: "3.0 GW (Solar: 2.0 GW, Wind: 1.0 GW)",
    associatedProjects: "Refinery, Mobility",
    stakeholders: "Reliance, JSW Energy",
  },
]

export function HubDetailsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [stageFilter, setStageFilter] = useState("all")

  const filteredHubs = hubsData.filter((hub) => {
    const matchesSearch = hub.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStage = stageFilter === "all" || hub.stage.toLowerCase() === stageFilter.toLowerCase()
    return matchesSearch && matchesStage
  })

  const getStageColor = (stage: string) => {
    switch (stage.toLowerCase()) {
      case "operational":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "construction":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "planning":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search hubs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <Select value={stageFilter} onValueChange={setStageFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by stage" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Stages</SelectItem>
            <SelectItem value="operational">Operational</SelectItem>
            <SelectItem value="construction">Construction</SelectItem>
            <SelectItem value="planning">Planning</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Location</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead>Production Capacity (MT/year)</TableHead>
              <TableHead>Electrolyser Capacity (MW)</TableHead>
              <TableHead>Electrolyser Type</TableHead>
              <TableHead>Renewable Energy</TableHead>
              <TableHead>Associated Projects</TableHead>
              <TableHead>Stakeholders</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredHubs.map((hub) => (
              <TableRow key={hub.id}>
                <TableCell className="font-medium">{hub.location}</TableCell>
                <TableCell>
                  <Badge className={getStageColor(hub.stage)}>{hub.stage}</Badge>
                </TableCell>
                <TableCell>{hub.productionCapacity}</TableCell>
                <TableCell>{hub.electrolyserCapacity}</TableCell>
                <TableCell>{hub.electrolyserType}</TableCell>
                <TableCell className="max-w-[200px]">
                  <div className="truncate" title={hub.renewableEnergy}>
                    {hub.renewableEnergy}
                  </div>
                </TableCell>
                <TableCell>{hub.associatedProjects}</TableCell>
                <TableCell className="max-w-[150px]">
                  <div className="truncate" title={hub.stakeholders}>
                    {hub.stakeholders}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
