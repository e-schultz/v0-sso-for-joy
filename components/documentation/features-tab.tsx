export default function FeaturesTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-pink-400">Features</h2>
      <p>
        The FLOAT System Explorer provides several interfaces for interacting with and exploring the FLOAT conceptual
        framework. Each interface offers unique functionality and perspectives on the system.
      </p>

      <div className="space-y-6 mt-4">
        <div className="border border-pink-500 p-4 rounded-md">
          <h3 className="text-xl font-bold text-pink-400">BBS Terminal</h3>
          <p className="mt-2">
            An interactive command-line interface styled after Bulletin Board Systems of the 1980s and 90s. The terminal
            allows users to explore FLOAT concepts through text commands.
          </p>
          <h4 className="text-lg font-bold text-green-400 mt-4">Key Features:</h4>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Command-driven exploration of FLOAT concepts</li>
            <li>Access to doctrine fragments and system information</li>
            <li>Retro-computing aesthetic with glitch effects</li>
            <li>Command history and scrollable output</li>
          </ul>
        </div>

        <div className="border border-pink-500 p-4 rounded-md">
          <h3 className="text-xl font-bold text-pink-400">Concept Explorer</h3>
          <p className="mt-2">
            A hierarchical visualization of the FLOAT conceptual framework, allowing users to navigate the complex web
            of interconnected ideas.
          </p>
          <h4 className="text-lg font-bold text-green-400 mt-4">Key Features:</h4>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Color-coded concept hierarchy</li>
            <li>Exploration of over 2,000 interconnected concepts</li>
            <li>Depth-adjustable visualization</li>
            <li>Focus on specific conceptual branches</li>
          </ul>
        </div>

        <div className="border border-pink-500 p-4 rounded-md">
          <h3 className="text-xl font-bold text-pink-400">Ghost Trace</h3>
          <p className="mt-2">
            An interface for visualizing memory traces and semantic ghost surfacing within the FLOAT system. Ghost Trace
            represents the emergence of memory as a non-linear process.
          </p>
          <h4 className="text-lg font-bold text-green-400 mt-4">Key Features:</h4>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Visualization of memory traces</li>
            <li>Temporal navigation of ghost traces</li>
            <li>Interactive initialization sequence</li>
            <li>Metadata toggle for deeper analysis</li>
          </ul>
        </div>

        <div className="border border-pink-500 p-4 rounded-md">
          <h3 className="text-xl font-bold text-pink-400">Shack Trace</h3>
          <p className="mt-2">
            A debug interface showing the psychoanalytic-computational hybrid code that powers the FLOAT system. Shack
            Trace represents the technical underpinnings of the conceptual framework.
          </p>
          <h4 className="text-lg font-bold text-green-400 mt-4">Key Features:</h4>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>Syntax-highlighted psychoanalytic code</li>
            <li>Visualization of computational-psychological processes</li>
            <li>Debugging interface for conceptual glitches</li>
            <li>Stack trace of emotional and cognitive processes</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-pink-500 pt-4">
        <p className="text-sm text-pink-300 italic">"Everything is kept, everything has potential recursion value."</p>
      </div>
    </div>
  )
}
