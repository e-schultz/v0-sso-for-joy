"use client"

import { useState, lazy, Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

// Lazy load tab contents
const OverviewTab = lazy(() => import("./documentation/overview-tab"))
const ArchitectureTab = lazy(() => import("./documentation/architecture-tab"))
const FeaturesTab = lazy(() => import("./documentation/features-tab"))
const UsageTab = lazy(() => import("./documentation/usage-tab"))
const ScreenshotsTab = lazy(() => import("./documentation/screenshots-tab"))

export function Documentation(): JSX.Element {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="h-full">
      <Tabs defaultValue="overview" className="h-full flex flex-col" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-5 mb-4 bg-black border border-pink-500">
          <TabsTrigger value="overview" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="architecture"
            className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400"
          >
            Architecture
          </TabsTrigger>
          <TabsTrigger value="features" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Features
          </TabsTrigger>
          <TabsTrigger value="usage" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Usage
          </TabsTrigger>
          <TabsTrigger
            value="screenshots"
            className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400"
          >
            Screenshots
          </TabsTrigger>
        </TabsList>

        <ScrollArea className="flex-1 pr-4">
          <Suspense fallback={<div className="p-4 text-pink-300">Loading documentation...</div>}>
            <TabsContent value="overview" className="h-full">
              {activeTab === "overview" && <OverviewTab />}
            </TabsContent>

            <TabsContent value="architecture" className="h-full">
              {activeTab === "architecture" && <ArchitectureTab />}
            </TabsContent>

            <TabsContent value="features" className="h-full">
              {activeTab === "features" && <FeaturesTab />}
            </TabsContent>

            <TabsContent value="usage" className="h-full">
              {activeTab === "usage" && <UsageTab />}
            </TabsContent>

            <TabsContent value="screenshots" className="h-full">
              {activeTab === "screenshots" && <ScreenshotsTab />}
            </TabsContent>
          </Suspense>
        </ScrollArea>
      </Tabs>
    </div>
  )
}
