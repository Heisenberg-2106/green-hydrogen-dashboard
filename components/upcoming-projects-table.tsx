"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search } from "lucide-react"

const projectsData = [
  {
    id: 1,
    projectName: "Adani Green Hydrogen Project",
    developer: "Adani New Industries",
    location: "Kutch, Gujarat, India",
    capacity: "1000 MW",
    production: "0.5 MT/year",
    status: "Under Development",
    timeline: "2025-2027",
    investment: "₹30,000 Cr",
    type: "Domestic",
  },
  {
    id: 2,
    projectName: "Reliance Dhirubhai Ambani Green Energy Giga Complex",
    developer: "Reliance Industries",
    location: "Jamnagar, Gujarat, India",
    capacity: "2000 MW",
    production: "1.0 MT/year",
    status: "Construction",
    timeline: "2024-2026",
    investment: "₹60,000 Cr",
    type: "Domestic",
  },
  {
    id: 3,
    projectName: "NTPC Green Hydrogen Hub",
    developer: "NTPC Limited",
    location: "Andhra Pradesh, India",
    capacity: "500 MW",
    production: "0.25 MT/year",
    status: "Planning",
    timeline: "2026-2028",
    investment: "₹15,000 Cr",
    type: "Domestic",
  },
  {
    id: 4,
    projectName: "JSW Neo Energy Green Hydrogen",
    developer: "JSW Neo Energy",
    location: "Rajasthan, India",
    capacity: "750 MW",
    production: "0.375 MT/year",
    status: "Under Development",
    timeline: "2025-2027",
    investment: "₹22,500 Cr",
    type: "Domestic",
  },
  {
    id: 5,
    projectName: "ACME Solar Green Ammonia",
    developer: "ACME Solar Holdings",
    location: "Odisha, India",
    capacity: "600 MW",
    production: "0.3 MT/year",
    status: "Planning",
    timeline: "2026-2028",
    investment: "₹18,000 Cr",
    type: "Domestic",
  },
  {
    id: 6,
    projectName: "Indian Oil Green Hydrogen Project",
    developer: "Indian Oil Corporation",
    location: "Mathura, UP, India",
    capacity: "300 MW",
    production: "0.15 MT/year",
    status: "Construction",
    timeline: "2024-2025",
    investment: "₹9,000 Cr",
    type: "Domestic",
  },
  {
    id: 7,
    projectName: "NEOM Green Hydrogen Project",
    developer: "ACWA Power & NEOM",
    location: "NEOM, Saudi Arabia",
    capacity: "4000 MW",
    production: "2.0 MT/year",
    status: "Under Development",
    timeline: "2025-2028",
    investment: "$8.5 Billion",
    type: "International",
  },
  {
    id: 8,
    projectName: "HyDeal Ambition",
    developer: "Engie & Partners",
    location: "Spain & France",
    capacity: "9500 MW",
    production: "4.75 MT/year",
    status: "Planning",
    timeline: "2025-2030",
    investment: "€7.4 Billion",
    type: "International",
  },
  {
    id: 9,
    projectName: "Asian Renewable Energy Hub",
    developer: "InterContinental Energy",
    location: "Western Australia",
    capacity: "26000 MW",
    production: "13.0 MT/year",
    status: "Planning",
    timeline: "2027-2032",
    investment: "$36 Billion",
    type: "International",
  },
  {
    id: 10,
    projectName: "Aman Green Hydrogen Project",
    developer: "ACWA Power",
    location: "Uzbekistan",
    capacity: "3000 MW",
    production: "1.5 MT/year",
    status: "Under Development",
    timeline: "2026-2029",
    investment: "$7 Billion",
    type: "International",
  },
]

export function UpcomingProjectsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.developer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || project.status.toLowerCase() === statusFilter.toLowerCase()
    const matchesType = typeFilter === "all" || project.type.toLowerCase() === typeFilter.toLowerCase()
    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "operational":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "construction":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "under development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "planning":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "domestic":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "international":
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
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="operational">Operational</SelectItem>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="under development">Under Development</SelectItem>
              <SelectItem value="planning">Planning</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="domestic">Domestic</SelectItem>
              <SelectItem value="international">International</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Project Name</TableHead>
              <TableHead>Developer</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Production</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Timeline</TableHead>
              <TableHead>Investment</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.map((project) => (
              <TableRow key={project.id}>
                <TableCell className="font-medium max-w-[200px]">
                  <div className="truncate" title={project.projectName}>
                    {project.projectName}
                  </div>
                </TableCell>
                <TableCell className="max-w-[150px]">
                  <div className="truncate" title={project.developer}>
                    {project.developer}
                  </div>
                </TableCell>
                <TableCell className="max-w-[150px]">
                  <div className="truncate" title={project.location}>
                    {project.location}
                  </div>
                </TableCell>
                <TableCell>{project.capacity}</TableCell>
                <TableCell>{project.production}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                </TableCell>
                <TableCell>{project.timeline}</TableCell>
                <TableCell>{project.investment}</TableCell>
                <TableCell>
                  <Badge className={getTypeColor(project.type)}>{project.type}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
