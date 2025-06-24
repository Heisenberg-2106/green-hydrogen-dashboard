"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const emissionsData = [
  { year: "2023", avoided: 1.2, cumulative: 1.2 },
  { year: "2024", avoided: 2.8, cumulative: 4.0 },
  { year: "2025", avoided: 4.5, cumulative: 8.5 },
  { year: "2026", avoided: 6.2, cumulative: 14.7 },
  { year: "2027", avoided: 8.1, cumulative: 22.8 },
  { year: "2028", avoided: 10.3, cumulative: 33.1 },
]

interface EnvironmentalImpactProps {
  type: "emissions" | "goals"
}

export function EnvironmentalImpact({ type }: EnvironmentalImpactProps) {
  if (type === "emissions") {
    return (
      <ChartContainer
        config={{
          avoided: {
            label: "Annual CO₂ Avoided (MT)",
            color: "hsl(var(--chart-1))",
          },
          cumulative: {
            label: "Cumulative CO₂ Avoided (MT)",
            color: "hsl(var(--chart-2))",
          },
        }}
        className="h-full w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={emissionsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="avoided"
              stroke="var(--color-avoided)"
              strokeWidth={2}
              name="Annual CO₂ Avoided"
            />
            <Line
              type="monotone"
              dataKey="cumulative"
              stroke="var(--color-cumulative)"
              strokeWidth={2}
              name="Cumulative CO₂ Avoided"
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    )
  }

  // Goals tracker
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">2030 Targets</CardTitle>
          <CardDescription>Progress towards Panchamrit commitments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Non-fossil fuel capacity (500 GW)</span>
              <span className="font-medium">68%</span>
            </div>
            <Progress value={68} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Renewable energy (50%)</span>
              <span className="font-medium">42%</span>
            </div>
            <Progress value={42} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Carbon intensity reduction (45%)</span>
              <span className="font-medium">35%</span>
            </div>
            <Progress value={35} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Green Hydrogen production (5 MMT)</span>
              <span className="font-medium">24%</span>
            </div>
            <Progress value={24} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">2070 Net Zero</CardTitle>
          <CardDescription>Long-term carbon neutrality progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Overall Progress</span>
              <span className="font-medium">8%</span>
            </div>
            <Progress value={8} className="h-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Years Remaining</p>
              <p className="text-2xl font-bold">46</p>
            </div>
            <div>
              <p className="text-muted-foreground">CO₂ Budget Left</p>
              <p className="text-2xl font-bold">~400 Gt</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
