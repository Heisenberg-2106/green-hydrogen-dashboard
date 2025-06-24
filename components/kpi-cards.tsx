"use client"

import { CircleDollarSign, Factory, Leaf, Wind } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Green H₂ Production</CardTitle>
          <Wind className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1.2 MT/year</div>
          <p className="text-xs text-muted-foreground">+18% from last quarter</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Hydrogen Hubs</CardTitle>
          <Factory className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">10</div>
          <p className="text-xs text-muted-foreground">2 Active | 3 Construction | 5 Planning</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Investment</CardTitle>
          <CircleDollarSign className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹14,500 Cr</div>
          <p className="text-xs text-muted-foreground">+32% from last year</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">CO₂ Emissions Avoided</CardTitle>
          <Leaf className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8500000 T</div>
          <p className="text-xs text-muted-foreground">+24% from last quarter</p>
        </CardContent>
      </Card>
    </div>
  )
}
