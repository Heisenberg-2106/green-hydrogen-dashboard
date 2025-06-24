"use client"

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const productionData = [
  { month: "Jan", production: 0.08, exports: 0.02 },
  { month: "Feb", production: 0.12, exports: 0.04 },
  { month: "Mar", production: 0.15, exports: 0.06 },
  { month: "Apr", production: 0.18, exports: 0.08 },
  { month: "May", production: 0.22, exports: 0.1 },
  { month: "Jun", production: 0.25, exports: 0.12 },
]

const sectorData = [
  { name: "Steel Industry", value: 35, color: "#0088FE" },
  { name: "Refinery", value: 25, color: "#00C49F" },
  { name: "Fertilizer", value: 20, color: "#FFBB28" },
  { name: "Transport", value: 12, color: "#FF8042" },
  { name: "Others", value: 8, color: "#8884D8" },
]

interface ProductionChartsProps {
  type: "trend" | "sectors" | "combined"
}

export function ProductionCharts({ type }: ProductionChartsProps) {
  if (type === "trend") {
    return (
      <ChartContainer
        config={{
          production: {
            label: "Production (MT)",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="h-full w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={productionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="production"
              stroke="var(--color-production)"
              strokeWidth={2}
              dot={{ fill: "var(--color-production)" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    )
  }

  if (type === "sectors") {
    return (
      <ChartContainer
        config={{
          steel: { label: "Steel Industry", color: "#0088FE" },
          refinery: { label: "Refinery", color: "#00C49F" },
          fertilizer: { label: "Fertilizer", color: "#FFBB28" },
          transport: { label: "Transport", color: "#FF8042" },
          others: { label: "Others", color: "#8884D8" },
        }}
        className="h-full w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sectorData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {sectorData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    )
  }

  // Combined chart
  return (
    <ChartContainer
      config={{
        production: {
          label: "Production (MT)",
          color: "hsl(var(--chart-1))",
        },
        exports: {
          label: "Exports (MT)",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={productionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="production"
            stroke="var(--color-production)"
            strokeWidth={2}
            name="Production"
          />
          <Line type="monotone" dataKey="exports" stroke="var(--color-exports)" strokeWidth={2} name="Exports" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
