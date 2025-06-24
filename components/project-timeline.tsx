"use client"

import { Badge } from "@/components/ui/badge"

const timelineData = [
  {
    id: 1,
    project: "Kandla Hub Phase 1",
    phase: "Electrolyser Installation",
    startDate: "2024-Q4",
    endDate: "2025-Q2",
    status: "In Progress",
    progress: 65,
  },
  {
    id: 2,
    project: "Paradip Hub",
    phase: "Hub Readiness",
    startDate: "2025-Q1",
    endDate: "2025-Q3",
    status: "Planning",
    progress: 0,
  },
  {
    id: 3,
    project: "Tuticorin Hub",
    phase: "Export Operations",
    startDate: "2025-Q2",
    endDate: "2025-Q4",
    status: "Planning",
    progress: 0,
  },
  {
    id: 4,
    project: "Mumbai Hub",
    phase: "Electrolyser Installation",
    startDate: "2025-Q3",
    endDate: "2026-Q1",
    status: "Planning",
    progress: 0,
  },
  {
    id: 5,
    project: "Vizag Hub",
    phase: "Hub Readiness",
    startDate: "2026-Q1",
    endDate: "2026-Q3",
    status: "Planning",
    progress: 0,
  },
]

export function ProjectTimeline() {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
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
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
        <div className="col-span-3">Project</div>
        <div className="col-span-2">Phase</div>
        <div className="col-span-2">Timeline</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-3">Progress</div>
      </div>

      {timelineData.map((item) => (
        <div key={item.id} className="grid grid-cols-12 gap-4 items-center py-3 border-b border-border/50">
          <div className="col-span-3">
            <div className="font-medium">{item.project}</div>
          </div>
          <div className="col-span-2">
            <div className="text-sm text-muted-foreground">{item.phase}</div>
          </div>
          <div className="col-span-2">
            <div className="text-sm">
              <div>{item.startDate}</div>
              <div className="text-muted-foreground">to {item.endDate}</div>
            </div>
          </div>
          <div className="col-span-2">
            <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
          </div>
          <div className="col-span-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span>{item.progress}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
