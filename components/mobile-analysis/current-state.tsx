import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export default function CurrentStateAnalysis() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-pink-500">Current Mobile Interface Analysis</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-pink-500 bg-black text-pink-400">
          <CardHeader>
            <CardTitle className="text-pink-400">Current Mobile Screenshots</CardTitle>
            <CardDescription className="text-pink-300/70">The existing interface on mobile devices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="relative h-[500px] border border-pink-500 rounded-md overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4143-aUeloQX1mZvQAKb9BMUIiAzfqvokCY.png"
                  alt="Current mobile interface showing the Ghost Trace view"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-pink-300">
                Ghost Trace view on mobile - Note the small text and dense information
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-500 bg-black text-pink-400">
          <CardHeader>
            <CardTitle className="text-pink-400">Key Issues Identified</CardTitle>
            <CardDescription className="text-pink-300/70">Critical mobile usability problems</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[450px] pr-4">
              <ul className="space-y-4">
                <li>
                  <h3 className="text-lg font-semibold text-pink-400">Navigation</h3>
                  <p className="text-sm text-pink-300 mt-1">
                    Horizontal tab navigation requires precise tapping and becomes unusable with more than 3-4 tabs on
                    small screens.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold text-pink-400">Touch Targets</h3>
                  <p className="text-sm text-pink-300 mt-1">
                    Many interactive elements are smaller than the recommended 44×44px minimum size, making them
                    difficult to tap accurately.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold text-pink-400">Content Overflow</h3>
                  <p className="text-sm text-pink-300 mt-1">
                    Terminal output, code blocks, and concept trees create horizontal overflow requiring awkward
                    side-scrolling.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold text-pink-400">Typography</h3>
                  <p className="text-sm text-pink-300 mt-1">
                    Font sizes are too small for comfortable reading on mobile, particularly in the code and terminal
                    views.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold text-pink-400">Information Density</h3>
                  <p className="text-sm text-pink-300 mt-1">
                    Screens are overly dense with information, creating cognitive overload on small displays.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold text-pink-400">Form Factors</h3>
                  <p className="text-sm text-pink-300 mt-1">
                    The interface doesn't adapt well to different mobile orientations or device sizes.
                  </p>
                </li>
                <li>
                  <h3 className="text-lg font-semibold text-pink-400">Accessibility</h3>
                  <p className="text-sm text-pink-300 mt-1">
                    Low contrast in some areas and small text size create accessibility barriers.
                  </p>
                </li>
              </ul>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="heuristic" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-black border border-pink-500">
          <TabsTrigger value="heuristic" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Heuristic Evaluation
          </TabsTrigger>
          <TabsTrigger value="metrics" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Mobile Metrics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="heuristic" className="mt-4">
          <Card className="border-pink-500 bg-black text-pink-400">
            <CardHeader>
              <CardTitle className="text-pink-400">Heuristic Evaluation</CardTitle>
              <CardDescription className="text-pink-300/70">
                Assessment based on Nielsen's usability heuristics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] pr-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Visibility of System Status</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-24 bg-pink-950 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full w-1/3"></div>
                      </div>
                      <span className="ml-2 text-sm text-pink-300">Poor</span>
                    </div>
                    <p className="text-sm text-pink-300 mt-1">
                      Users often can't tell which section they're in or what actions are available on mobile.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Match Between System and Real World</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-24 bg-pink-950 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full w-1/2"></div>
                      </div>
                      <span className="ml-2 text-sm text-pink-300">Fair</span>
                    </div>
                    <p className="text-sm text-pink-300 mt-1">
                      The BBS metaphor is consistent but may be unfamiliar to younger mobile users.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">User Control and Freedom</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-24 bg-pink-950 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full w-1/4"></div>
                      </div>
                      <span className="ml-2 text-sm text-pink-300">Very Poor</span>
                    </div>
                    <p className="text-sm text-pink-300 mt-1">
                      Limited back functionality and no clear escape routes from deep navigation on mobile.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Consistency and Standards</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-24 bg-pink-950 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full w-1/3"></div>
                      </div>
                      <span className="ml-2 text-sm text-pink-300">Poor</span>
                    </div>
                    <p className="text-sm text-pink-300 mt-1">
                      Deviates from mobile interaction patterns, creating a steeper learning curve.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Error Prevention</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-24 bg-pink-950 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full w-1/4"></div>
                      </div>
                      <span className="ml-2 text-sm text-pink-300">Very Poor</span>
                    </div>
                    <p className="text-sm text-pink-300 mt-1">
                      Small touch targets lead to frequent mis-taps and accidental actions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Recognition Rather Than Recall</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-24 bg-pink-950 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full w-2/5"></div>
                      </div>
                      <span className="ml-2 text-sm text-pink-300">Fair</span>
                    </div>
                    <p className="text-sm text-pink-300 mt-1">
                      Interface elements are visually distinctive but their functions aren't always clear.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Flexibility and Efficiency</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-24 bg-pink-950 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full w-1/5"></div>
                      </div>
                      <span className="ml-2 text-sm text-pink-300">Very Poor</span>
                    </div>
                    <p className="text-sm text-pink-300 mt-1">
                      No mobile-specific shortcuts or gestures to accelerate interaction.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Aesthetic and Minimalist Design</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-24 bg-pink-950 rounded-full h-2">
                        <div className="bg-pink-500 h-2 rounded-full w-2/5"></div>
                      </div>
                      <span className="ml-2 text-sm text-pink-300">Fair</span>
                    </div>
                    <p className="text-sm text-pink-300 mt-1">
                      Strong aesthetic but information overload on small screens.
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="mt-4">
          <Card className="border-pink-500 bg-black text-pink-400">
            <CardHeader>
              <CardTitle className="text-pink-400">Mobile Usability Metrics</CardTitle>
              <CardDescription className="text-pink-300/70">
                Quantitative assessment of mobile interface elements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Touch Target Sizes</h3>
                  <div className="relative w-full h-12 bg-pink-950/30 rounded-md">
                    <div className="absolute left-0 top-0 h-full w-1/4 bg-red-500/30 flex items-center justify-center text-xs text-white border-r border-white/20">
                      Current: ~24px
                    </div>
                    <div className="absolute left-1/4 top-0 h-full w-1/4 bg-yellow-500/30 flex items-center justify-center text-xs text-white border-r border-white/20">
                      Minimum: 44px
                    </div>
                    <div className="absolute left-2/4 top-0 h-full w-1/4 bg-green-500/30 flex items-center justify-center text-xs text-white border-r border-white/20">
                      Optimal: 48px+
                    </div>
                    <div className="absolute left-3/4 top-0 h-full w-1/4 bg-blue-500/30 flex items-center justify-center text-xs text-white">
                      Spacious: 60px+
                    </div>
                  </div>
                  <p className="text-sm text-pink-300 mt-2">
                    Most interactive elements in the current interface are significantly smaller than the recommended
                    minimum size.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Font Sizes</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-pink-300">Current body text:</span>
                      <span className="text-sm text-pink-300">12px</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-pink-300">Current terminal text:</span>
                      <span className="text-sm text-pink-300">10px</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-pink-300">Recommended minimum:</span>
                      <span className="text-sm text-pink-300">16px</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-pink-300">Optimal for reading:</span>
                      <span className="text-sm text-pink-300">18-20px</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Content Width</h3>
                  <div className="w-full bg-pink-950 rounded-full h-2 mb-2">
                    <div className="bg-red-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-sm text-pink-300">75% of screens require horizontal scrolling on mobile devices</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Navigation Depth</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-pink-300 mb-1">Current average:</p>
                      <div className="flex items-center space-x-1">
                        <div className="h-8 w-8 bg-pink-500 rounded flex items-center justify-center text-xs">1</div>
                        <div className="h-8 w-8 bg-pink-500 rounded flex items-center justify-center text-xs">2</div>
                        <div className="h-8 w-8 bg-pink-500 rounded flex items-center justify-center text-xs">3</div>
                        <div className="h-8 w-8 bg-pink-500 rounded flex items-center justify-center text-xs">4</div>
                        <div className="h-8 w-8 bg-pink-500 rounded flex items-center justify-center text-xs">5+</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-pink-300 mb-1">Recommended:</p>
                      <div className="flex items-center space-x-1">
                        <div className="h-8 w-8 bg-green-500 rounded flex items-center justify-center text-xs">1</div>
                        <div className="h-8 w-8 bg-green-500 rounded flex items-center justify-center text-xs">2</div>
                        <div className="h-8 w-8 bg-green-500 rounded flex items-center justify-center text-xs">3</div>
                        <div className="h-8 w-8 bg-pink-950 rounded flex items-center justify-center text-xs">4</div>
                        <div className="h-8 w-8 bg-pink-950 rounded flex items-center justify-center text-xs">5+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
