import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Mockups() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-pink-500">Mobile Interface Mockups</h2>

      <Tabs defaultValue="navigation" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-black border border-pink-500">
          <TabsTrigger value="navigation" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Navigation
          </TabsTrigger>
          <TabsTrigger value="terminal" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Terminal
          </TabsTrigger>
          <TabsTrigger value="concepts" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Concepts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="navigation" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-pink-500 bg-black text-pink-400">
              <CardHeader>
                <CardTitle className="text-pink-400">Current Navigation</CardTitle>
                <CardDescription className="text-pink-300/70">Horizontal tabs with small touch targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-pink-500 rounded-md p-2 bg-black">
                  <div className="w-full h-[500px] relative">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-12 border-b border-pink-500 flex items-center justify-between px-4">
                        <div className="text-lg font-bold text-pink-400">[FLOAT BBS]</div>
                        <div className="text-sm text-pink-300/70">(Ξ) E</div>
                      </div>

                      <div className="grid grid-cols-5 h-10 border-b border-pink-500 text-xs">
                        <div className="flex items-center justify-center bg-pink-950 text-pink-400 border-r border-pink-500">
                          BBS
                        </div>
                        <div className="flex items-center justify-center text-pink-300 border-r border-pink-500">
                          Concepts
                        </div>
                        <div className="flex items-center justify-center text-pink-300 border-r border-pink-500">
                          Ghost
                        </div>
                        <div className="flex items-center justify-center text-pink-300 border-r border-pink-500">
                          Shack
                        </div>
                        <div className="flex items-center justify-center text-pink-300">Docs</div>
                      </div>

                      <div className="flex-1 p-4 text-sm text-pink-300">
                        <div className="text-xl font-bold text-pink-400 mb-4">STEAMIES AS SANCTUARY</div>
                        <p className="mb-4">
                          LIMINAL POSSIBILITY WITHIN LIMITED SPACE, STEAMIES ISN'T MERELY VENUE BUT ARCHITECTURE OF
                          QUEER DESIRE-ROOMS WHERE BODIES SPEAK LANGUAGES MAINSTREAM DISCOURSE CANNOT TRANSLATE.
                        </p>
                        <div className="border-t border-pink-500 pt-4 mt-4">
                          <div className="flex items-center">
                            <span className="mr-2">COMMAND&gt;</span>
                            <div className="flex-1 h-6 bg-black border-b border-pink-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-pink-300">
                  Issues: Small tap targets, horizontal overflow with many tabs, inefficient use of vertical space
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-500 bg-black text-pink-400">
              <CardHeader>
                <CardTitle className="text-pink-400">Proposed Navigation</CardTitle>
                <CardDescription className="text-pink-300/70">
                  Bottom navigation with large touch targets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-pink-500 rounded-md p-2 bg-black">
                  <div className="w-full h-[500px] relative">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-14 border-b border-pink-500 flex items-center px-4">
                        <div className="text-lg font-bold text-pink-400">[FLOAT BBS]</div>
                        <div className="ml-auto flex items-center">
                          <div className="w-10 h-10 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full border border-pink-500"></div>
                          </div>
                          <div className="w-10 h-10 flex items-center justify-center ml-2">
                            <div className="w-6 h-6 text-pink-400">?</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 p-4 text-sm text-pink-300">
                        <div className="text-xl font-bold text-pink-400 mb-4">STEAMIES AS SANCTUARY</div>
                        <p className="mb-4">
                          LIMINAL POSSIBILITY WITHIN LIMITED SPACE, STEAMIES ISN'T MERELY VENUE BUT ARCHITECTURE OF
                          QUEER DESIRE-ROOMS WHERE BODIES SPEAK LANGUAGES MAINSTREAM DISCOURSE CANNOT TRANSLATE.
                        </p>
                        <div className="border-t border-pink-500 pt-4 mt-4">
                          <div className="flex items-center">
                            <span className="mr-2">COMMAND&gt;</span>
                            <div className="flex-1 h-6 bg-black border-b border-pink-500"></div>
                          </div>
                        </div>
                      </div>

                      <div className="h-16 border-t border-pink-500 flex items-center justify-around">
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-400 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-400">BBS</div>
                        </div>
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-300/50 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-300">Concepts</div>
                        </div>
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-300/50 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-300">Ghost</div>
                        </div>
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-300/50 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-300">Shack</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-pink-300">
                  Improvements: Large touch targets, bottom navigation within thumb reach, more content space, clear
                  visual hierarchy
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="terminal" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-pink-500 bg-black text-pink-400">
              <CardHeader>
                <CardTitle className="text-pink-400">Current Terminal</CardTitle>
                <CardDescription className="text-pink-300/70">Small text and limited input assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-pink-500 rounded-md p-2 bg-black">
                  <div className="w-full h-[500px] relative">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-12 border-b border-pink-500 flex items-center justify-between px-4">
                        <div className="text-lg font-bold text-pink-400">[FLOAT BBS]</div>
                        <div className="text-sm text-pink-300/70">(Ξ) E</div>
                      </div>

                      <div className="flex-1 p-4 text-xs text-pink-300 overflow-y-auto">
                        <div className="text-sm font-bold text-pink-400 mb-4">TERMINAL OUTPUT</div>

                        <div className="mb-2">STEAMIES AS SANCTUARY</div>
                        <div className="mb-4">
                          LIMINAL POSSIBILITY WITHIN LIMITED SPACE, STEAMIES ISN'T MERELY VENUE BUT ARCHITECTURE OF
                          QUEER DESIRE-ROOMS WHERE BODIES SPEAK LANGUAGES MAINSTREAM DISCOURSE CANNOT TRANSLATE.
                        </div>

                        <div className="text-green-400 mb-1 mt-4">COMMAND&gt; help</div>
                        <div className="mb-1">Available commands:</div>
                        <div className="mb-1">- help: Show this help</div>
                        <div className="mb-1">- about: About FLOAT</div>
                        <div className="mb-1">- doctrine: Show doctrine fragments</div>
                        <div className="mb-1">- bloomkeeper: Show Bloomkeeper cycle</div>
                        <div className="mb-1">- clear: Clear terminal</div>

                        <div className="text-green-400 mb-1 mt-4">COMMAND> doctrine</div>
                        <div className="mb-1">doctrineVolume::compost-cycle</div>
                        <div className="mb-1">signal::healing-through-entropy</div>
                        <div className="mb-1">identity::bloomkeeper</div>
                        <div className="mb-4"></div>
                        <div className="mb-1">Heresy is reframed as an emotionally-resonant epistemic stance,</div>
                        <div className="mb-1">not just a rational deviation. It emerges when affect breaks open</div>
                        <div className="mb-1">
                          oppressive truth systems, creating new vectors of coherence through dissent.
                        </div>
                      </div>

                      <div className="border-t border-pink-500 p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs">COMMAND&gt;</span>
                          <div className="flex-1 h-6 bg-black border-b border-pink-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-pink-300">
                  Issues: Small text size, no command suggestions, inefficient use of space, limited context
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-500 bg-black text-pink-400">
              <CardHeader>
                <CardTitle className="text-pink-400">Proposed Terminal</CardTitle>
                <CardDescription className="text-pink-300/70">Larger text and command assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-pink-500 rounded-md p-2 bg-black">
                  <div className="w-full h-[500px] relative">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-14 border-b border-pink-500 flex items-center px-4">
                        <div className="text-lg font-bold text-pink-400">[FLOAT BBS]</div>
                        <div className="ml-auto flex items-center">
                          <div className="w-10 h-10 flex items-center justify-center">
                            <div className="w-6 h-6 rounded-full border border-pink-500"></div>
                          </div>
                          <div className="w-10 h-10 flex items-center justify-center ml-2">
                            <div className="w-6 h-6 text-pink-400">?</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 p-4 text-base text-pink-300 overflow-y-auto">
                        <div className="text-xl font-bold text-pink-400 mb-4">TERMINAL</div>

                        <div className="mb-2">STEAMIES AS SANCTUARY</div>
                        <div className="mb-4">
                          LIMINAL POSSIBILITY WITHIN LIMITED SPACE, STEAMIES ISN'T MERELY VENUE BUT ARCHITECTURE OF
                          QUEER DESIRE-ROOMS WHERE BODIES SPEAK LANGUAGES MAINSTREAM DISCOURSE CANNOT TRANSLATE.
                        </div>

                        <div className="text-green-400 mb-1 mt-4">COMMAND> doctrine</div>
                        <div className="mb-1">doctrineVolume::compost-cycle</div>
                        <div className="mb-1">signal::healing-through-entropy</div>
                        <div className="mb-1">identity::bloomkeeper</div>
                        <div className="mb-4"></div>
                        <div className="mb-1">Heresy is reframed as an emotionally-resonant epistemic stance,</div>
                        <div className="mb-1">not just a rational deviation. It emerges when affect breaks open</div>
                        <div className="mb-1">
                          oppressive truth systems, creating new vectors of coherence through dissent.
                        </div>
                      </div>

                      <div className="border-t border-pink-500 p-4">
                        <div className="flex flex-col">
                          <div className="flex items-center">
                            <span className="mr-2 text-base">COMMAND&gt;</span>
                            <div className="flex-1 h-8 bg-black border-b border-pink-500"></div>
                          </div>

                          <div className="flex space-x-2 mt-3 overflow-x-auto">
                            <div className="px-3 py-1 bg-pink-950 text-pink-300 rounded-full text-sm">help</div>
                            <div className="px-3 py-1 bg-pink-950 text-pink-300 rounded-full text-sm">about</div>
                            <div className="px-3 py-1 bg-pink-950 text-pink-300 rounded-full text-sm">doctrine</div>
                            <div className="px-3 py-1 bg-pink-950 text-pink-300 rounded-full text-sm">bloomkeeper</div>
                          </div>
                        </div>
                      </div>

                      <div className="h-16 border-t border-pink-500 flex items-center justify-around">
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-400 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-400">BBS</div>
                        </div>
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-300/50 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-300">Concepts</div>
                        </div>
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-300/50 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-300">Ghost</div>
                        </div>
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-300/50 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-300">Shack</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-pink-300">
                  Improvements: Larger text size, command suggestions, better spacing, bottom navigation, larger input
                  area
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="concepts" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-pink-500 bg-black text-pink-400">
              <CardHeader>
                <CardTitle className="text-pink-400">Current Concept Explorer</CardTitle>
                <CardDescription className="text-pink-300/70">Dense tree structure with small text</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-pink-500 rounded-md p-2 bg-black">
                  <div className="w-full h-[500px] relative">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-12 border-b border-pink-500 flex items-center justify-between px-4">
                        <div className="text-lg font-bold text-pink-400">CONCEPT EXPLORER</div>
                      </div>

                      <div className="flex-1 p-4 text-xs text-pink-300 overflow-y-auto">
                        <div className="text-purple-400">
                          └─ Consciousness
                          <div className="ml-4 text-green-400">
                            └─ Somatic Awareness
                            <div className="ml-4 text-blue-400">
                              └─ Embodied Mind
                              <div className="ml-4 text-purple-400">
                                └─ Sensorial Perception
                                <div className="ml-4 text-blue-400">
                                  └─ Sensorial Dissonance
                                  <div className="ml-4 text-green-400">└─ Perceptual Conflict</div>
                                </div>
                                <div className="ml-4 text-red-400">└─ Aesthetic Perception</div>
                                <div className="ml-4 text-red-400">└─ Perceptual Abstraction</div>
                                <div className="ml-4 text-red-400">└─ Sensory Synesthesia</div>
                              </div>
                              <div className="ml-4 text-purple-400">
                                └─ Somatic Emotions
                                <div className="ml-4 text-red-400">
                                  └─ The Body Keeps the Score
                                  <div className="ml-4 text-white">└─ Somatic Memory</div>
                                  <div className="ml-4 text-white">└─ Quantum Biology</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-pink-500 p-2 text-xs">
                        <div>Concepts: 2115 | Connections: 2269 | Display depth: 7</div>
                        <div>Exploring: Sensorial Dissonance</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-pink-300">
                  Issues: Small text, excessive nesting, horizontal overflow, difficult touch interaction
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-500 bg-black text-pink-400">
              <CardHeader>
                <CardTitle className="text-pink-400">Proposed Concept Explorer</CardTitle>
                <CardDescription className="text-pink-300/70">
                  Card-based navigation with touch-friendly elements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-pink-500 rounded-md p-2 bg-black">
                  <div className="w-full h-[500px] relative">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-14 border-b border-pink-500 flex items-center px-4">
                        <div className="text-lg font-bold text-pink-400">CONCEPT EXPLORER</div>
                        <div className="ml-auto flex items-center">
                          <div className="w-10 h-10 flex items-center justify-center">
                            <div className="w-6 h-6 text-pink-400">⋮</div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center h-10 border-b border-pink-500 px-4 text-sm">
                        <div className="text-pink-300">Consciousness</div>
                        <div className="mx-1 text-pink-300">›</div>
                        <div className="text-pink-300">Somatic Awareness</div>
                        <div className="mx-1 text-pink-300">›</div>
                        <div className="text-pink-400">Embodied Mind</div>
                      </div>

                      <div className="flex-1 p-4 overflow-y-auto">
                        <div className="grid grid-cols-1 gap-4">
                          <div className="border border-pink-500 rounded-md p-4">
                            <div className="text-lg font-bold text-pink-400 mb-2">Sensorial Perception</div>
                            <p className="text-sm text-pink-300 mb-3">
                              The embodied experience of sensory input and its cognitive processing.
                            </p>
                            <div className="flex justify-end">
                              <div className="px-3 py-1 bg-pink-950 text-pink-300 rounded text-sm">Explore</div>
                            </div>
                          </div>

                          <div className="border border-pink-500 rounded-md p-4">
                            <div className="text-lg font-bold text-pink-400 mb-2">Somatic Emotions</div>
                            <p className="text-sm text-pink-300 mb-3">
                              Emotional experiences as manifested through bodily sensations and responses.
                            </p>
                            <div className="flex justify-end">
                              <div className="px-3 py-1 bg-pink-950 text-pink-300 rounded text-sm">Explore</div>
                            </div>
                          </div>

                          <div className="border border-pink-500 rounded-md p-4">
                            <div className="text-lg font-bold text-pink-400 mb-2">Somatic Architecture</div>
                            <p className="text-sm text-pink-300 mb-3">
                              The design of spaces that respond to and influence embodied experience.
                            </p>
                            <div className="flex justify-end">
                              <div className="px-3 py-1 bg-pink-950 text-pink-300 rounded text-sm">Explore</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="h-16 border-t border-pink-500 flex items-center justify-around">
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-300/50 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-300">BBS</div>
                        </div>
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-400 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-400">Concepts</div>
                        </div>
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-300/50 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-300">Ghost</div>
                        </div>
                        <div className="flex flex-col items-center w-16">
                          <div className="w-6 h-6 bg-pink-300/50 rounded-sm mb-1"></div>
                          <div className="text-xs text-pink-300">Shack</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-sm text-pink-300">
                  Improvements: Card-based navigation, breadcrumb trail, larger text, touch-friendly elements, clear
                  hierarchy
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
