"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const renewableData = [
  {
    hub: "Kandla",
    solar: 1800,
    wind: 700,
    hydro: 0,
    storage: 500,
  },
  {
    hub: "Paradip",
    solar: 2500,
    wind: 1500,
    hydro: 0,
    storage: 800,
  },
  {
    hub: "Tuticorin",
    solar: 1000,
    wind: 500,
    hydro: 0,
    storage: 300,
  },
  {
    hub: "Vizag",
    solar: 1200,
    wind: 800,
    hydro: 0,
    storage: 400,
  },
  {
    hub: "Mumbai",
    solar: 2000,
    wind: 1000,
    hydro: 0,
    storage: 600,
  },
]

export function RenewableEnergyCharts() {
  return (
    <ChartContainer
      config={{
        solar: {
          label: "Solar (MW)",
          color: "#FFBB28",
        },
        wind: {
          label: "Wind (MW)",
          color: "#00C49F",
        },
        hydro: {
          label: "Hydro (MW)",
          color: "#0088FE",
        },
        storage: {
          label: "Storage (MW)",
          color: "#8884D8",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={renewableData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hub" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="solar" stackId="a" fill="var(--color-solar)" name="Solar" />
          <Bar dataKey="wind" stackId="a" fill="var(--color-wind)" name="Wind" />
          <Bar dataKey="hydro" stackId="a" fill="var(--color-hydro)" name="Hydro" />
          <Bar dataKey="storage" fill="var(--color-storage)" name="Storage" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
