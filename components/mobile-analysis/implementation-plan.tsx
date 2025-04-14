import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ImplementationPlan() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-pink-500">Implementation Plan</h2>

      <div className="grid grid-cols-1 gap-6">
        <Card className="border-pink-500 bg-black text-pink-400">
          <CardHeader>
            <CardTitle className="text-pink-400">Phased Implementation Approach</CardTitle>
            <CardDescription className="text-pink-300/70">Structured plan for mobile optimization</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-3">Phase 1: Foundation (Weeks 1-2)</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Responsive Layout Framework</h4>
                      <p className="text-sm text-pink-300">
                        Implement a mobile-first responsive layout system with proper viewport configuration and
                        breakpoints.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Configure proper viewport meta tags</li>
                          <li>Establish responsive breakpoints (xs, sm, md, lg, xl)</li>
                          <li>Create flexible container components</li>
                          <li>Implement responsive grid system</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Typography System</h4>
                      <p className="text-sm text-pink-300">
                        Develop a responsive typography system with appropriate sizing and scaling for mobile devices.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Establish minimum font sizes (16px body text)</li>
                          <li>Create responsive type scale</li>
                          <li>Optimize line heights and spacing</li>
                          <li>Implement text wrapping and overflow handling</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Touch-Optimized Components</h4>
                      <p className="text-sm text-pink-300">
                        Redesign core interactive components with appropriate touch target sizes and spacing.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Create touch-friendly button components (min 44×44px)</li>
                          <li>Implement proper spacing between interactive elements</li>
                          <li>Design touch feedback states (pressed, active, disabled)</li>
                          <li>Optimize form inputs for mobile interaction</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-3">Phase 2: Navigation & Layout (Weeks 3-4)</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Bottom Navigation System</h4>
                      <p className="text-sm text-pink-300">
                        Implement a persistent bottom navigation bar for primary sections with large touch targets.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Design and implement bottom navigation component</li>
                          <li>Create navigation state management</li>
                          <li>Add visual feedback for active states</li>
                          <li>Ensure proper spacing and sizing for touch targets</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Header & Context Navigation</h4>
                      <p className="text-sm text-pink-300">
                        Develop a consistent header system with contextual navigation and breadcrumbs.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Create responsive header component</li>
                          <li>Implement back navigation for nested views</li>
                          <li>Design compact breadcrumb system</li>
                          <li>Add context-specific actions in header</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Content Layout Patterns</h4>
                      <p className="text-sm text-pink-300">
                        Implement mobile-optimized content layouts with proper spacing and hierarchy.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Design card-based content components</li>
                          <li>Implement collapsible sections for complex data</li>
                          <li>Create mobile-friendly list views</li>
                          <li>Optimize content padding and margins for touch</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-3">
                    Phase 3: Interface Optimization (Weeks 5-6)
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Terminal Interface</h4>
                      <p className="text-sm text-pink-300">
                        Redesign the terminal interface for mobile with improved input and readability.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Increase terminal text size and line spacing</li>
                          <li>Implement command suggestions above keyboard</li>
                          <li>Add text wrapping for long output lines</li>
                          <li>Create mobile-optimized input interface</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Concept Explorer</h4>
                      <p className="text-sm text-pink-300">
                        Rebuild the concept explorer with card-based navigation and touch-friendly interactions.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Implement card-based concept navigation</li>
                          <li>Create breadcrumb navigation for concept hierarchy</li>
                          <li>Design touch-friendly concept exploration</li>
                          <li>Add visual feedback for concept relationships</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Ghost & Shack Trace</h4>
                      <p className="text-sm text-pink-300">
                        Optimize the Ghost and Shack Trace interfaces for mobile viewing and interaction.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Increase code and trace text size</li>
                          <li>Implement collapsible code sections</li>
                          <li>Add syntax highlighting optimized for mobile</li>
                          <li>Create touch-friendly trace navigation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-3">
                    Phase 4: Advanced Features & Polish (Weeks 7-8)
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Gesture Support</h4>
                      <p className="text-sm text-pink-300">
                        Implement touch gestures for common interactions to enhance the mobile experience.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Add swipe navigation between related content</li>
                          <li>Implement pull-to-refresh for dynamic content</li>
                          <li>Create pinch-to-zoom for complex visualizations</li>
                          <li>Add long-press for contextual actions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Performance Optimization</h4>
                      <p className="text-sm text-pink-300">
                        Optimize performance for mobile devices with limited resources and connectivity.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Implement code splitting and lazy loading</li>
                          <li>Optimize asset loading and caching</li>
                          <li>Add offline support with service workers</li>
                          <li>Implement progressive enhancement for features</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Accessibility Enhancements</h4>
                      <p className="text-sm text-pink-300">
                        Ensure the interface is accessible to all users on mobile devices.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Implement proper ARIA roles and attributes</li>
                          <li>Ensure sufficient color contrast</li>
                          <li>Add support for screen readers</li>
                          <li>Implement keyboard navigation for accessibility</li>
                        </ul>
                      </div>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="text-base font-medium text-pink-400 mb-1">Final Testing & Refinement</h4>
                      <p className="text-sm text-pink-300">
                        Conduct comprehensive testing across devices and refine the mobile experience.
                      </p>
                      <div className="mt-2">
                        <div className="text-xs text-pink-300 font-semibold">Key Tasks:</div>
                        <ul className="list-disc list-inside text-xs text-pink-300 mt-1">
                          <li>Test across multiple device sizes and orientations</li>
                          <li>Conduct usability testing with mobile users</li>
                          <li>Refine interactions based on feedback</li>
                          <li>Optimize for different mobile browsers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="border-pink-500 bg-black text-pink-400">
          <CardHeader>
            <CardTitle className="text-pink-400">Resource Requirements</CardTitle>
            <CardDescription className="text-pink-300/70">
              Estimated resources needed for implementation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Development Resources</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium text-pink-300 mb-1">Frontend Developer</div>
                    <div className="h-2 w-full bg-pink-950 rounded-full">
                      <div className="h-2 w-3/4 bg-pink-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-pink-300 mt-1">
                      <span>0</span>
                      <span>75%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-pink-300 mb-1">UI/UX Designer</div>
                    <div className="h-2 w-full bg-pink-950 rounded-full">
                      <div className="h-2 w-1/2 bg-pink-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-pink-300 mt-1">
                      <span>0</span>
                      <span>50%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-pink-300 mb-1">QA Engineer</div>
                    <div className="h-2 w-full bg-pink-950 rounded-full">
                      <div className="h-2 w-1/4 bg-pink-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-pink-300 mt-1">
                      <span>0</span>
                      <span>25%</span>
                      <span>100%</span>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-pink-300 mb-1">Project Manager</div>
                    <div className="h-2 w-full bg-pink-950 rounded-full">
                      <div className="h-2 w-1/4 bg-pink-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-xs text-pink-300 mt-1">
                      <span>0</span>
                      <span>25%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Timeline</h3>
                <div className="relative h-12 bg-pink-950/30 rounded-md overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-1/4 bg-pink-950 flex items-center justify-center text-xs text-pink-300 border-r border-black">
                    Phase 1
                  </div>
                  <div className="absolute left-1/4 top-0 h-full w-1/4 bg-pink-800 flex items-center justify-center text-xs text-pink-300 border-r border-black">
                    Phase 2
                  </div>
                  <div className="absolute left-2/4 top-0 h-full w-1/4 bg-pink-700 flex items-center justify-center text-xs text-pink-300 border-r border-black">
                    Phase 3
                  </div>
                  <div className="absolute left-3/4 top-0 h-full w-1/4 bg-pink-600 flex items-center justify-center text-xs text-pink-300">
                    Phase 4
                  </div>
                </div>
                <div className="flex justify-between text-xs text-pink-300 mt-1">
                  <span>Week 1-2</span>
                  <span>Week 3-4</span>
                  <span>Week 5-6</span>
                  <span>Week 7-8</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Technology Requirements</h3>
                <ul className="list-disc list-inside text-sm text-pink-300 space-y-1">
                  <li>React with Next.js for component-based architecture</li>
                  <li>Tailwind CSS for responsive styling</li>
                  <li>React-Spring or Framer Motion for mobile animations</li>
                  <li>Use-Gesture hook library for touch interactions</li>
                  <li>Next-PWA for progressive web app capabilities</li>
                  <li>Mobile testing devices (iOS and Android)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Success Metrics</h3>
                <div className="space-y-2">
                  <div>
                    <div className="text-sm font-medium text-pink-300 mb-1">Mobile Usability Score</div>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-pink-300">Current: 42/100</div>
                      <div className="flex-1 h-2 bg-pink-950 rounded-full">
                        <div className="h-2 w-[42%] bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-xs text-pink-300">Target: 85/100</div>
                      <div className="flex-1 h-2 bg-pink-950 rounded-full">
                        <div className="h-2 w-[85%] bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-pink-300 mb-1">Mobile Session Duration</div>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-pink-300">Current: 1:45</div>
                      <div className="flex-1 h-2 bg-pink-950 rounded-full">
                        <div className="h-2 w-[30%] bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-xs text-pink-300">Target: 5:30</div>
                      <div className="flex-1 h-2 bg-pink-950 rounded-full">
                        <div className="h-2 w-[80%] bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium text-pink-300 mb-1">Mobile Conversion Rate</div>
                    <div className="flex items-center space-x-2">
                      <div className="text-xs text-pink-300">Current: 8%</div>
                      <div className="flex-1 h-2 bg-pink-950 rounded-full">
                        <div className="h-2 w-[8%] bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="text-xs text-pink-300">Target: 35%</div>
                      <div className="flex-1 h-2 bg-pink-950 rounded-full">
                        <div className="h-2 w-[35%] bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
