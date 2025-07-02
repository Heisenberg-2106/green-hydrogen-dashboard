"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, Factory, Ship } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import { ThemeToggle } from "@/components/theme-toggle"
import { NavigationBar } from "@/components/navigation-bar"

import { KpiCards } from "@/components/kpi-cards"
import { IndiaMap } from "@/components/india-map"
import { HubDetailsTable } from "@/components/hub-details-table"
import { ProductionCharts } from "@/components/production-charts"
import { PolicySection } from "@/components/policy-section"
import { PilotProjectsTable } from "@/components/pilot-projects-table"
import { EnvironmentalImpact } from "@/components/environmental-impact"
import { DemandCentersMap } from "@/components/demand-centers-map"
import { UpcomingProjectsTable } from "@/components/upcoming-projects-table"
import { StorageDepotsMap } from "@/components/storage-depots-map"
import { OemsList } from "@/components/oems-list"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen w-full flex-col">
      <NavigationBar />
      <main className="flex-1 space-y-4 p-4 md:p-6 lg:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="hubs">Hydrogen Hubs</TabsTrigger>
            <TabsTrigger value="demand">Demand Centers</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            <TabsTrigger value="policy">Policy</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <KpiCards />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-full">
                <CardHeader>
                  <CardTitle>Hydrogen Hub Locations</CardTitle>
                  <CardDescription>Interactive map of India's Green Hydrogen Hubs</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <IndiaMap />
                </CardContent>
              </Card>
            
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Production Trend</CardTitle>
                  <CardDescription>Monthly green hydrogen production (MT)</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ProductionCharts type="trend" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>End-Use Sectors</CardTitle>
                  <CardDescription>Distribution by sector</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ProductionCharts type="sectors" />
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Milestones</CardTitle>
                <CardDescription>Next 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Kandla Hub Phase 1 Completion</p>
                      <p className="text-sm text-muted-foreground">July 30, 2025</p>
                    </div>
                    <Badge className="ml-auto">Upcoming</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Factory className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">500 MW Electrolyser Installation - Paradip</p>
                      <p className="text-sm text-muted-foreground">August 15, 2025</p>
                    </div>
                    <Badge className="ml-auto">In Progress</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Ship className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">First Export Shipment - Tuticorin</p>
                      <p className="text-sm text-muted-foreground">September 5, 2025</p>
                    </div>
                    <Badge className="ml-auto">Planned</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hubs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Hydrogen Hub Details</CardTitle>
                <CardDescription>Comprehensive information about each hub</CardDescription>
              </CardHeader>
              <CardContent>
                <HubDetailsTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demand" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Demand Centers - Hard to Abate Sectors</CardTitle>
                  <CardDescription>
                    Steel, Oil & Gas, Aluminum, Cement and other industrial demand centers
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <DemandCentersMap />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Steel Sector</CardTitle>
                  <CardDescription>Major steel plants and demand</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Current H₂ Demand</span>
                      <span className="text-sm font-medium">0.8 MT/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Projected 2030</span>
                      <span className="text-sm font-medium">3.2 MT/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Major Plants</span>
                      <span className="text-sm font-medium">15</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Oil & Gas Refining</CardTitle>
                  <CardDescription>Refineries and petrochemical plants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Current H₂ Demand</span>
                      <span className="text-sm font-medium">1.2 MT/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Projected 2030</span>
                      <span className="text-sm font-medium">2.8 MT/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Major Refineries</span>
                      <span className="text-sm font-medium">23</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Aluminum & Others</CardTitle>
                  <CardDescription>Aluminum, cement and chemical industries</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Current H₂ Demand</span>
                      <span className="text-sm font-medium">0.4 MT/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Projected 2030</span>
                      <span className="text-sm font-medium">1.5 MT/year</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Major Plants</span>
                      <span className="text-sm font-medium">12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Green Hydrogen Projects</CardTitle>
                <CardDescription>Projects in India and abroad with developer details</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingProjectsTable />
              </CardContent>
            </Card>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Technology OEMs</CardTitle>
                  <CardDescription>Leading electrolyser and equipment manufacturers</CardDescription>
                </CardHeader>
                <CardContent>
                  <OemsList />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Statistics</CardTitle>
                  <CardDescription>Overview of project pipeline</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">India Projects</span>
                        <span className="font-medium">28</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">International Projects</span>
                        <span className="font-medium">12</span>
                      </div>
                      <Progress value={30} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Total Capacity Pipeline</span>
                        <span className="font-medium">15.2 GW</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="infrastructure" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Storage Depots & Infrastructure</CardTitle>
                  <CardDescription>Hydrogen storage facilities and transportation infrastructure</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <StorageDepotsMap />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Storage Capacity</CardTitle>
                  <CardDescription>Current and planned storage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Operational</span>
                      <span className="text-sm font-medium">2,500 tonnes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Under Construction</span>
                      <span className="text-sm font-medium">8,200 tonnes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Planned</span>
                      <span className="text-sm font-medium">15,000 tonnes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Transportation</CardTitle>
                  <CardDescription>Pipeline and logistics network</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">H₂ Pipelines</span>
                      <span className="text-sm font-medium">450 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Planned Pipelines</span>
                      <span className="text-sm font-medium">2,800 km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Truck Terminals</span>
                      <span className="text-sm font-medium">12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Port Infrastructure</CardTitle>
                  <CardDescription>Export terminals and facilities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Export Terminals</span>
                      <span className="text-sm font-medium">5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Planned Terminals</span>
                      <span className="text-sm font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Annual Capacity</span>
                      <span className="text-sm font-medium">2.5 MT</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="policy" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Policy & Incentives</CardTitle>
                  <CardDescription>Current applicable policies and incentives</CardDescription>
                </CardHeader>
                <CardContent>
                  <PolicySection />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>RPO Targets</CardTitle>
                  <CardDescription>Renewable Purchase Obligation progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Solar RPO</span>
                        <span className="text-sm text-muted-foreground">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Non-Solar RPO</span>
                        <span className="text-sm text-muted-foreground">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Hydropower RPO</span>
                        <span className="text-sm text-muted-foreground">28%</span>
                      </div>
                      <Progress value={28} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Energy Storage RPO</span>
                        <span className="text-sm text-muted-foreground">15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Pilot Projects Overview</CardTitle>
                <CardDescription>Status of ongoing pilot projects</CardDescription>
              </CardHeader>
              <CardContent>
                <PilotProjectsTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="impact" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                  <CardDescription>GHG emissions avoided over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <EnvironmentalImpact type="emissions" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Panchamrit Goal Tracker</CardTitle>
                  <CardDescription>Progress towards 2030 and 2070 milestones</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <EnvironmentalImpact type="goals" />
                </CardContent>
              </Card>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Sustainability Metrics</CardTitle>
                <CardDescription>Key environmental performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm font-medium">Water Consumption</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-bold">8.2 L/kg H₂</div>
                      <p className="text-xs text-muted-foreground">-12% from baseline</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm font-medium">Land Use Efficiency</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-bold">4.8 kg H₂/m²</div>
                      <p className="text-xs text-muted-foreground">+8% from baseline</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm font-medium">Renewable Energy %</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-bold">92.5%</div>
                      <p className="text-xs text-muted-foreground">+5.3% from baseline</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm font-medium">Carbon Intensity</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="text-2xl font-bold">0.8 kg CO₂/kg H₂</div>
                      <p className="text-xs text-muted-foreground">-18% from baseline</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
