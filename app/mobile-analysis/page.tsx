"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CurrentStateAnalysis from "@/components/mobile-analysis/current-state"
import Recommendations from "@/components/mobile-analysis/recommendations"
import Mockups from "@/components/mobile-analysis/mockups"
import ImplementationPlan from "@/components/mobile-analysis/implementation-plan"

export default function MobileAnalysisPage() {
  return (
    <div className="min-h-screen bg-black text-pink-500 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-pink-400">FLOAT System Mobile UI/UX Analysis</h1>
          <p className="text-lg text-pink-300">A comprehensive assessment and optimization plan for mobile devices</p>
        </div>

        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-black border border-pink-500 mb-8">
            <TabsTrigger value="current" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
              Current State
            </TabsTrigger>
            <TabsTrigger
              value="recommendations"
              className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400"
            >
              Recommendations
            </TabsTrigger>
            <TabsTrigger value="mockups" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
              Mockups
            </TabsTrigger>
            <TabsTrigger
              value="implementation"
              className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400"
            >
              Implementation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <CurrentStateAnalysis />
          </TabsContent>

          <TabsContent value="recommendations">
            <Recommendations />
          </TabsContent>

          <TabsContent value="mockups">
            <Mockups />
          </TabsContent>

          <TabsContent value="implementation">
            <ImplementationPlan />
          </TabsContent>
        </Tabs>

        <div className="mt-12 border-t border-pink-500 pt-6 text-center">
          <p className="text-sm text-pink-300">
            FLOAT System Mobile UI/UX Analysis • {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}
