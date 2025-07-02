"use client"

import { useMemo } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { parseCapacity } from "@/utils/chartUtils"

// ✅ Full stakeholder color palette
const COLORS = [
  "#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd",
  "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf",
  "#10b981", "#f97316", "#3b82f6", "#6366f1", "#f43f5e",
]

// ✅ Hub data here (already added in your code)
const hubs = [
  {
    id: 1,
    name: "Kandla",
    state: "Gujarat",
    status: "Construction",
    position: { top: "30%", left: "20%" },
    capacity: "0.5 MT/year",
    reCapacity: "2.5 GW",
    stakeholders: "NTPC, L&T, IOC",
  },
  {
    id: 2,
    name: "Paradip",
    state: "Odisha",
    status: "Planning",
    position: { top: "45%", left: "60%" },
    capacity: "0.8 MT/year",
    reCapacity: "4 GW",
    stakeholders: "IOCL, GAIL, ONGC",
  },
  {
    id: 3,
    name: "Tuticorin",
    state: "Tamil Nadu",
    status: "Operational",
    position: { top: "75%", left: "45%" },
    capacity: "0.3 MT/year",
    reCapacity: "1.5 GW",
    stakeholders: "Adani, ReNew Power",
  },
  {
    id: 4,
    name: "Vizag",
    state: "Andhra Pradesh",
    status: "Planning",
    position: { top: "55%", left: "55%" },
    capacity: "0.4 MT/year",
    reCapacity: "2 GW",
    stakeholders: "HPCL, NTPC",
  },
  {
    id: 5,
    name: "Mumbai",
    state: "Maharashtra",
    status: "Planning",
    position: { top: "40%", left: "30%" },
    capacity: "0.6 MT/year",
    reCapacity: "3 GW",
    stakeholders: "Reliance, JSW Energy",
  },
  {
    id: 6,
    name: "Dahej",
    state: "Gujarat",
    status: "Operational",
    position: { top: "32%", left: "22%" },
    capacity: "0.4 MT/year",
    reCapacity: "2 GW",
    stakeholders: "Adani, ONGC",
  },
  {
    id: 7,
    name: "Haldia",
    state: "West Bengal",
    status: "Construction",
    position: { top: "48%", left: "70%" },
    capacity: "0.7 MT/year",
    reCapacity: "3.5 GW",
    stakeholders: "IOCL, GAIL",
  },
  {
    id: 8,
    name: "Mangalore",
    state: "Karnataka",
    status: "Planning",
    position: { top: "70%", left: "40%" },
    capacity: "0.5 MT/year",
    reCapacity: "2.8 GW",
    stakeholders: "MRPL, ReNew Power",
  },
  {
    id: 9,
    name: "Chennai",
    state: "Tamil Nadu",
    status: "Construction",
    position: { top: "78%", left: "50%" },
    capacity: "0.9 MT/year",
    reCapacity: "4 GW",
    stakeholders: "TANGEDCO, Reliance",
  },
  {
    id: 10,
    name: "Hazira",
    state: "Gujarat",
    status: "Planning",
    position: { top: "34%", left: "18%" },
    capacity: "0.6 MT/year",
    reCapacity: "3 GW",
    stakeholders: "Essar, NTPC",
  },
  {
    id: 11,
    name: "Visnagar",
    state: "Gujarat",
    status: "Construction",
    position: { top: "28%", left: "19%" },
    capacity: "0.3 MT/year",
    reCapacity: "1.5 GW",
    stakeholders: "L&T, IOCL",
  },
  {
    id: 12,
    name: "Kakinada",
    state: "Andhra Pradesh",
    status: "Operational",
    position: { top: "58%", left: "56%" },
    capacity: "0.4 MT/year",
    reCapacity: "2.2 GW",
    stakeholders: "BPCL, NTPC",
  },
  {
    id: 13,
    name: "Nagapattinam",
    state: "Tamil Nadu",
    status: "Planning",
    position: { top: "76%", left: "52%" },
    capacity: "0.2 MT/year",
    reCapacity: "1 GW",
    stakeholders: "ReNew Power, HPCL",
  },
  {
    id: 14,
    name: "Raigarh",
    state: "Chhattisgarh",
    status: "Construction",
    position: { top: "50%", left: "50%" },
    capacity: "0.5 MT/year",
    reCapacity: "2.7 GW",
    stakeholders: "Jindal Steel, NTPC",
  },
  {
    id: 15,
    name: "Panipat",
    state: "Haryana",
    status: "Operational",
    position: { top: "25%", left: "45%" },
    capacity: "0.6 MT/year",
    reCapacity: "2.9 GW",
    stakeholders: "IOCL, ReNew Power",
  },
]

export function IndiaMap() {
  // 📊 Bar Chart: Projects per State
  const stateData = useMemo(() => {
    const stateMap: Record<string, number> = {}
    hubs.forEach((hub) => {
      stateMap[hub.state] = (stateMap[hub.state] || 0) + 1
    })
    return Object.entries(stateMap).map(([state, count]) => ({ state, count }))
  }, [])

  // 🟠 Pie Chart: Project Status
  const statusData = useMemo(() => {
    const statusMap: Record<string, number> = {}
    hubs.forEach((hub) => {
      statusMap[hub.status] = (statusMap[hub.status] || 0) + 1
    })
    return Object.entries(statusMap).map(([status, count]) => ({ status, count }))
  }, [])

  // 📊 Stacked Bar Chart: Capacity comparison
  const capacityData = hubs.map((hub) => ({
    name: hub.name,
    reCapacity: parseCapacity(hub.reCapacity),
    h2Capacity: parseCapacity(hub.capacity),
  }))

  // 📈 Bar Chart: Stakeholder Participation
  const stakeholderData = useMemo(() => {
    const map: Record<string, number> = {}
    hubs.forEach((hub) => {
      hub.stakeholders.split(",").forEach((s) => {
        const name = s.trim()
        map[name] = (map[name] || 0) + 1
      })
    })
    return Object.entries(map)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count) // Optional: sort by count descending
  }, [])

  return (
    <div className="space-y-10 p-4">
      <h2 className="text-xl font-bold text-center">Green Hydrogen Hubs - Dashboard Overview</h2>

      {/* 🔵 Bar Chart: Projects per State */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
        <h3 className="font-semibold mb-2">Number of Projects per State</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stateData}>
            <XAxis dataKey="state" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 🟠 Pie Chart: Project Status */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
        <h3 className="font-semibold mb-2">Projects by Status</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusData}
              dataKey="count"
              nameKey="status"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-status-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* 🟢 Stacked Bar Chart: Capacity Comparison */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
        <h3 className="font-semibold mb-2">Hydrogen vs Renewable Capacity (in MT / GW)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={capacityData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="h2Capacity" fill="#0ea5e9" name="H2 Capacity" />
            <Bar dataKey="reCapacity" fill="#22c55e" name="RE Capacity" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 🟣 Horizontal Bar Chart: Stakeholder Participation */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-md">
        <h3 className="font-semibold mb-2">Stakeholder Participation</h3>
        <ResponsiveContainer width="100%" height={40 + stakeholderData.length * 30}>
          <BarChart
            layout="vertical"
            data={stakeholderData}
            margin={{ top: 10, right: 30, left: 100, bottom: 10 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={150} />
            <Tooltip />
            <Bar dataKey="count" radius={[0, 6, 6, 0]}>
              {stakeholderData.map((entry, index) => (
                <Cell key={`cell-stakeholder-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}