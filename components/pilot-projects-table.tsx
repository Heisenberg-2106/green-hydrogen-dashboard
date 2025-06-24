"use client"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const pilotProjects = [
  {
    id: 1,
    projectName: "Green Steel Initiative",
    sector: "Steel",
    hubState: "Kandla, Gujarat",
    status: "In Progress",
    timeline: "Q2 2025 - Q4 2026",
    capacity: "50 MW",
  },
  {
    id: 2,
    projectName: "H2 Mobility Corridor",
    sector: "Transport",
    hubState: "Mumbai, Maharashtra",
    status: "Planning",
    timeline: "Q1 2026 - Q3 2027",
    capacity: "25 MW",
  },
  {
    id: 3,
    projectName: "Green Ammonia Plant",
    sector: "Fertilizer",
    hubState: "Paradip, Odisha",
    status: "In Progress",
    timeline: "Q3 2025 - Q1 2027",
    capacity: "100 MW",
  },
  {
    id: 4,
    projectName: "Shipping Fuel Initiative",
    sector: "Shipping",
    hubState: "Tuticorin, Tamil Nadu",
    status: "Operational",
    timeline: "Q1 2024 - Q4 2025",
    capacity: "30 MW",
  },
  {
    id: 5,
    projectName: "Refinery Integration",
    sector: "Refinery",
    hubState: "Vizag, Andhra Pradesh",
    status: "Planning",
    timeline: "Q4 2025 - Q2 2027",
    capacity: "75 MW",
  },
]

export function PilotProjectsTable() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "operational":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "in progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "planning":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Sector</TableHead>
            <TableHead>Hub/State</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Timeline</TableHead>
            <TableHead>Capacity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pilotProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-medium">{project.projectName}</TableCell>
              <TableCell>{project.sector}</TableCell>
              <TableCell>{project.hubState}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
              </TableCell>
              <TableCell>{project.timeline}</TableCell>
              <TableCell>{project.capacity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
