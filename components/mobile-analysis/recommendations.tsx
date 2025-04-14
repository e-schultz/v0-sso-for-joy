"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Recommendations() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-pink-500">Mobile Optimization Recommendations</h2>

      <Tabs defaultValue="navigation" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-black border border-pink-500">
          <TabsTrigger value="navigation" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Navigation
          </TabsTrigger>
          <TabsTrigger value="layout" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Layout
          </TabsTrigger>
          <TabsTrigger value="typography" className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400">
            Typography
          </TabsTrigger>
          <TabsTrigger
            value="interaction"
            className="data-[state=active]:bg-pink-950 data-[state=active]:text-pink-400"
          >
            Interaction
          </TabsTrigger>
        </TabsList>

        <TabsContent value="navigation" className="mt-4">
          <Card className="border-pink-500 bg-black text-pink-400">
            <CardHeader>
              <CardTitle className="text-pink-400">Navigation Recommendations</CardTitle>
              <CardDescription className="text-pink-300/70">Improving mobile navigation patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">
                      Replace Horizontal Tabs with Bottom Navigation
                    </h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Implement a persistent bottom navigation bar with large, easily tappable icons for primary
                      sections.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Example:</div>
                      <pre className="text-xs overflow-x-auto bg-black/30 p-2 rounded">
                        {`// Bottom Navigation Component
<div className="fixed bottom-0 left-0 right-0 h-16 bg-black border-t border-pink-500
              flex justify-around items-center">
  <button className="flex flex-col items-center justify-center w-16 h-16">
    <Terminal className="h-6 w-6 text-pink-400" />
    <span className="text-xs mt-1 text-pink-300">BBS</span>
  </button>
  <button className="flex flex-col items-center justify-center w-16 h-16">
    <Network className="h-6 w-6 text-pink-400" />
    <span className="text-xs mt-1 text-pink-300">Concepts</span>
  </button>
  <button className="flex flex-col items-center justify-center w-16 h-16">
    <Ghost className="h-6 w-6 text-pink-400" />
    <span className="text-xs mt-1 text-pink-300">Ghost</span>
  </button>
  <button className="flex flex-col items-center justify-center w-16 h-16">
    <Code className="h-6 w-6 text-pink-400" />
    <span className="text-xs mt-1 text-pink-300">Shack</span>
  </button>
</div>`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Add Contextual Back Navigation</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Implement a consistent back button for nested views and provide clear navigation paths.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Example:</div>
                      <pre className="text-xs overflow-x-auto bg-black/30 p-2 rounded">
                        {`// Header with Back Button
<div className="flex items-center h-12 border-b border-pink-500 px-4">
  {depth > 0 && (
    <button 
      onClick={handleBack}
      className="mr-3 h-10 w-10 flex items-center justify-center"
    >
      <ChevronLeft className="h-6 w-6 text-pink-400" />
    </button>
  )}
  <h2 className="text-lg font-bold text-pink-400 truncate">
    {currentView.title}
  </h2>
</div>`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">
                      Implement a Drawer Menu for Secondary Navigation
                    </h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Add a slide-out drawer menu for less frequently used features and documentation access.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Key Benefits:</div>
                      <ul className="list-disc list-inside text-xs text-pink-300 space-y-1">
                        <li>Preserves screen real estate for primary content</li>
                        <li>Provides access to secondary features without cluttering the main interface</li>
                        <li>Follows established mobile patterns familiar to users</li>
                        <li>Can include additional context and help information</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Flatten Navigation Hierarchy</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Reduce navigation depth to no more than 3 levels for mobile users to prevent disorientation.
                    </p>
                    <div className="mt-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-1/2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-xs text-pink-300">Current: 5+ levels deep</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-1/3 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-pink-300">Recommended: Max 3 levels</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Add Visual Breadcrumbs</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Implement a compact breadcrumb system to help users understand their location in the interface.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Example:</div>
                      <div className="flex items-center text-xs text-pink-300">
                        <span>BBS</span>
                        <span className="mx-1">›</span>
                        <span>Doctrine</span>
                        <span className="mx-1">›</span>
                        <span className="text-pink-400">Bloomkeeper</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layout" className="mt-4">
          <Card className="border-pink-500 bg-black text-pink-400">
            <CardHeader>
              <CardTitle className="text-pink-400">Layout Recommendations</CardTitle>
              <CardDescription className="text-pink-300/70">
                Optimizing screen layouts for mobile devices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Implement Progressive Disclosure</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Break complex interfaces into sequential steps, revealing information progressively to reduce
                      cognitive load.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Strategy:</div>
                      <ul className="list-disc list-inside text-xs text-pink-300 space-y-1">
                        <li>Use collapsible sections for complex data</li>
                        <li>Implement "read more" expansions for lengthy content</li>
                        <li>Break multi-step processes into wizard-like interfaces</li>
                        <li>Use bottom sheets for contextual information</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Optimize Content Width</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Ensure all content fits within the viewport width to eliminate horizontal scrolling.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Example:</div>
                      <pre className="text-xs overflow-x-auto bg-black/30 p-2 rounded">
                        {`// Terminal Output Component with Text Wrapping
<div className="whitespace-pre-wrap break-words w-full overflow-x-hidden">
  {terminalOutput.map((line, i) => (
    <div key={i} className="mb-1">
      {line}
    </div>
  ))}
</div>`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Implement Card-Based Content</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Restructure content into discrete, swipeable cards for easier consumption on mobile.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Benefits:</div>
                      <ul className="list-disc list-inside text-xs text-pink-300 space-y-1">
                        <li>Chunks information into digestible pieces</li>
                        <li>Supports natural touch-based swiping gestures</li>
                        <li>Creates visual hierarchy and separation</li>
                        <li>Allows for progressive loading of content</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Prioritize Content Vertically</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Reorganize content to place the most important information at the top of each screen.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Strategy:</div>
                      <ol className="list-decimal list-inside text-xs text-pink-300 space-y-1">
                        <li>Identify critical information for each view</li>
                        <li>Place primary actions within thumb reach (bottom half of screen)</li>
                        <li>Use progressive disclosure for secondary information</li>
                        <li>Consider "sticky" headers for context retention during scrolling</li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Implement Responsive Grids</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Replace fixed layouts with responsive grids that adapt to different screen sizes and orientations.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Example:</div>
                      <pre className="text-xs overflow-x-auto bg-black/30 p-2 rounded">
                        {`// Responsive Grid for Concept Explorer
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {concepts.map(concept => (
    <ConceptCard 
      key={concept.id}
      concept={concept}
      className="h-full"
    />
  ))}
</div>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="typography" className="mt-4">
          <Card className="border-pink-500 bg-black text-pink-400">
            <CardHeader>
              <CardTitle className="text-pink-400">Typography Recommendations</CardTitle>
              <CardDescription className="text-pink-300/70">Improving readability and text hierarchy</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Increase Base Font Size</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Increase the minimum font size to 16px for body text and 14px for secondary text.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Example:</div>
                      <pre className="text-xs overflow-x-auto bg-black/30 p-2 rounded">
                        {`// In globals.css
@layer base {
  html {
    font-size: 16px;
  }
  
  @media (max-width: 640px) {
    html {
      font-size: 16px; /* Maintain 16px minimum on mobile */
    }
  }
}

// Component-specific typography
.terminal-text {
  font-size: 1rem; /* 16px */
  line-height: 1.5;
}

.code-text {
  font-size: 0.875rem; /* 14px */
  line-height: 1.4;
}`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Implement Proper Text Hierarchy</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Create a clear visual hierarchy with distinct text styles for different content levels.
                    </p>
                    <div className="mt-3">
                      <div className="space-y-3">
                        <div>
                          <div className="text-xl font-bold text-pink-400">Primary Heading (24px)</div>
                          <div className="h-1 w-full bg-pink-950 mt-1">
                            <div className="h-1 w-3/4 bg-pink-500"></div>
                          </div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-pink-400">Secondary Heading (18px)</div>
                          <div className="h-1 w-full bg-pink-950 mt-1">
                            <div className="h-1 w-2/3 bg-pink-500"></div>
                          </div>
                        </div>
                        <div>
                          <div className="text-base font-medium text-pink-300">Tertiary Heading (16px)</div>
                          <div className="h-1 w-full bg-pink-950 mt-1">
                            <div className="h-1 w-1/2 bg-pink-500"></div>
                          </div>
                        </div>
                        <div>
                          <div className="text-base text-pink-300">Body Text (16px)</div>
                          <div className="h-1 w-full bg-pink-950 mt-1">
                            <div className="h-1 w-1/2 bg-pink-500"></div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-pink-300/70">Secondary Text (14px)</div>
                          <div className="h-1 w-full bg-pink-950 mt-1">
                            <div className="h-1 w-2/5 bg-pink-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Optimize Line Length</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Limit line length to 30-40 characters for mobile to improve readability.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Example:</div>
                      <pre className="text-xs overflow-x-auto bg-black/30 p-2 rounded">
                        {`// Container with optimized reading width
<div className="max-w-[66ch] sm:max-w-[45ch] mx-auto px-4">
  <p className="text-base text-pink-300">
    {contentText}
  </p>
</div>`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Increase Line Height</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Use increased line height (1.5-1.6) for better readability on small screens.
                    </p>
                    <div className="mt-3">
                      <div className="space-y-4">
                        <div>
                          <div className="text-xs text-pink-300 mb-1">Current (line-height: 1.2):</div>
                          <p className="text-sm leading-tight text-pink-300 border border-pink-500 p-2 rounded">
                            The Bloomkeeper harvests curse not to spread despair but to transmute it into doctrine
                            shards, tending to ghosts through witness. This cycle contrasts the Dung Eater with the
                            Bloomkeeper.
                          </p>
                        </div>
                        <div>
                          <div className="text-xs text-pink-300 mb-1">Recommended (line-height: 1.6):</div>
                          <p className="text-sm leading-relaxed text-pink-300 border border-pink-500 p-2 rounded">
                            The Bloomkeeper harvests curse not to spread despair but to transmute it into doctrine
                            shards, tending to ghosts through witness. This cycle contrasts the Dung Eater with the
                            Bloomkeeper.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Implement Dynamic Font Scaling</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Support system font size preferences to improve accessibility.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Example:</div>
                      <pre className="text-xs overflow-x-auto bg-black/30 p-2 rounded">
                        {`// In globals.css
html {
  font-size: 100%; /* Use percentage to respect user preferences */
}

// Use rem units throughout the application
.heading-1 {
  font-size: 1.5rem; /* Scales with user preferences */
}

// Add a font size toggle in settings
function FontSizeToggle() {
  const [fontSize, setFontSize] = useState('medium');
  
  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);
  
  return (
    <select 
      value={fontSize} 
      onChange={(e) => setFontSize(e.target.value)}
    >
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  );
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interaction" className="mt-4">
          <Card className="border-pink-500 bg-black text-pink-400">
            <CardHeader>
              <CardTitle className="text-pink-400">Interaction Recommendations</CardTitle>
              <CardDescription className="text-pink-300/70">Improving touch interactions and feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Enlarge Touch Targets</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Increase all interactive elements to a minimum of 44×44px with adequate spacing between targets.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Example:</div>
                      <pre className="text-xs overflow-x-auto bg-black/30 p-2 rounded">
                        {`// Button Component with Adequate Touch Target
<button 
  className="min-h-[44px] min-w-[44px] px-4 py-2 flex items-center 
             justify-center bg-pink-950 text-pink-300 rounded-md"
  onClick={handleAction}
>
  <span>{buttonText}</span>
</button>

// Spacing Between Touch Targets
<div className="flex space-x-4">
  <TouchTarget />
  <TouchTarget />
  <TouchTarget />
</div>`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Implement Touch-Friendly Gestures</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Add swipe, pinch, and tap gestures that align with mobile user expectations.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Recommended Gestures:</div>
                      <ul className="list-disc list-inside text-xs text-pink-300 space-y-1">
                        <li>Swipe left/right to navigate between related content</li>
                        <li>Pull to refresh for terminal and trace views</li>
                        <li>Pinch to zoom for concept maps and complex visualizations</li>
                        <li>Double-tap to expand/collapse sections</li>
                        <li>Long-press for contextual actions</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Enhance Visual Feedback</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Provide clear visual feedback for all interactions to confirm user actions.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Examples:</div>
                      <ul className="list-disc list-inside text-xs text-pink-300 space-y-1">
                        <li>Add prominent active states with color and scale changes</li>
                        <li>Implement subtle animations for state transitions</li>
                        <li>Use haptic feedback for important actions (when available)</li>
                        <li>Provide toast notifications for background processes</li>
                      </ul>
                      <div className="mt-2 text-xs text-pink-300">Button States Example:</div>
                      <div className="flex space-x-3 mt-1">
                        <div className="px-3 py-1 bg-pink-950/50 text-pink-300 text-xs rounded">Default</div>
                        <div className="px-3 py-1 bg-pink-800 text-pink-200 text-xs rounded">Pressed</div>
                        <div className="px-3 py-1 bg-pink-950 text-pink-400 text-xs rounded border border-pink-400">
                          Active
                        </div>
                        <div className="px-3 py-1 bg-pink-950/30 text-pink-300/50 text-xs rounded">Disabled</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Optimize Input Methods</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Enhance form inputs and terminal commands for mobile keyboards.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Recommendations:</div>
                      <ul className="list-disc list-inside text-xs text-pink-300 space-y-1">
                        <li>Use appropriate input types (email, tel, number, etc.)</li>
                        <li>Implement autocomplete for terminal commands</li>
                        <li>Add command suggestions above the keyboard</li>
                        <li>Provide custom input controls for specialized interactions</li>
                      </ul>
                      <div className="mt-2 text-xs text-pink-300">Terminal Command Suggestions:</div>
                      <div className="flex space-x-2 mt-1 overflow-x-auto pb-1">
                        <div className="px-2 py-1 bg-pink-950 text-pink-300 text-xs rounded whitespace-nowrap">
                          help
                        </div>
                        <div className="px-2 py-1 bg-pink-950 text-pink-300 text-xs rounded whitespace-nowrap">
                          about
                        </div>
                        <div className="px-2 py-1 bg-pink-950 text-pink-300 text-xs rounded whitespace-nowrap">
                          doctrine
                        </div>
                        <div className="px-2 py-1 bg-pink-950 text-pink-300 text-xs rounded whitespace-nowrap">
                          bloomkeeper
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-pink-400">Implement Offline Support</h3>
                    <p className="text-sm text-pink-300 mt-1">
                      Add offline capabilities to improve mobile experience with intermittent connectivity.
                    </p>
                    <div className="mt-3 p-3 border border-pink-500 rounded-md bg-black/50">
                      <div className="text-xs text-pink-300 mb-2">Implementation Strategy:</div>
                      <ul className="list-disc list-inside text-xs text-pink-300 space-y-1">
                        <li>Cache critical content using service workers</li>
                        <li>Implement optimistic UI updates</li>
                        <li>Queue actions when offline for later synchronization</li>
                        <li>Provide clear offline status indicators</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
