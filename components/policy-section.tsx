"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"

const policies = [
  {
    name: "ISTS Waiver",
    description: "Interstate Transmission System charges waiver for renewable energy",
    status: "Active",
    validUntil: "2030",
    impact: "High",
  },
  {
    name: "PLI Scheme",
    description: "Production Linked Incentive for electrolyser manufacturing",
    status: "Active",
    validUntil: "2028",
    impact: "High",
  },
  {
    name: "SIGHT Incentives",
    description: "Strategic Interventions for Green Hydrogen Transition",
    status: "Active",
    validUntil: "2030",
    impact: "Very High",
  },
  {
    name: "Green Hydrogen Standard",
    description: "National standards for green hydrogen production and certification",
    status: "Draft",
    validUntil: "TBD",
    impact: "Medium",
  },
  {
    name: "Carbon Credit Mechanism",
    description: "Carbon credits for green hydrogen projects",
    status: "Under Review",
    validUntil: "TBD",
    impact: "Medium",
  },
]

export function PolicySection() {
  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "draft":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "under review":
        return <AlertCircle className="h-4 w-4 text-orange-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "under review":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case "very high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      case "medium":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-4">
      {policies.map((policy, index) => (
        <Card key={index}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{policy.name}</CardTitle>
              <div className="flex items-center gap-2">
                {getStatusIcon(policy.status)}
                <Badge className={getStatusColor(policy.status)}>{policy.status}</Badge>
              </div>
            </div>
            <CardDescription>{policy.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Valid Until: {policy.validUntil}</span>
              </div>
              <Badge className={getImpactColor(policy.impact)}>{policy.impact} Impact</Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
