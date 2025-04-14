export default function UsageTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-pink-400">Usage Guide</h2>
      <p>
        This guide provides detailed instructions for using the FLOAT System Explorer and navigating its various
        interfaces.
      </p>

      <div className="space-y-6 mt-4">
        <div className="border border-pink-500 p-4 rounded-md">
          <h3 className="text-xl font-bold text-pink-400">Getting Started</h3>
          <p className="mt-2">
            To begin using the FLOAT System Explorer, navigate between the tabs at the bottom of the interface to access
            different components of the system.
          </p>
          <h4 className="text-lg font-bold text-green-400 mt-4">Installation:</h4>
          <div className="bg-black/50 p-2 rounded mt-2">
            <pre className="text-xs">
              {`
# Clone the repository
git clone https://github.com/yourusername/float-explorer.git

# Navigate to the project directory
cd float-explorer

# Install dependencies
npm install

# Start the development server
npm run dev
              `}
            </pre>
          </div>
        </div>

        <div className="border border-pink-500 p-4 rounded-md">
          <h3 className="text-xl font-bold text-pink-400">BBS Terminal Commands</h3>
          <p className="mt-2">
            The BBS Terminal provides a command-line interface for interacting with the FLOAT system. Here are the
            available commands:
          </p>
          <div className="mt-4 space-y-2">
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <div className="text-pink-300 font-bold">help</div>
              <div>Display a list of available commands</div>

              <div className="text-pink-300 font-bold">about</div>
              <div>Learn about the FLOAT system and its origins</div>

              <div className="text-pink-300 font-bold">doctrine</div>
              <div>View doctrine fragments from the FLOAT system</div>

              <div className="text-pink-300 font-bold">bloomkeeper</div>
              <div>Explore the Bloomkeeper cycle and its significance</div>

              <div className="text-pink-300 font-bold">clear</div>
              <div>Clear the terminal screen</div>
            </div>
          </div>
          <p className="mt-4 text-sm">
            Example: Type <span className="text-pink-300 font-bold">doctrine</span> and press Enter to view doctrine
            fragments.
          </p>
        </div>

        <div className="border border-pink-500 p-4 rounded-md">
          <h3 className="text-xl font-bold text-pink-400">Navigating the Concept Explorer</h3>
          <p className="mt-2">
            The Concept Explorer provides a hierarchical visualization of the FLOAT conceptual framework. Here's how to
            navigate it:
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>
              <span className="text-pink-300 font-bold">Color Coding</span>: Different colors represent different levels
              or types of concepts
            </li>
            <li>
              <span className="text-pink-300 font-bold">Hierarchy</span>: Concepts are organized in a tree structure,
              with parent-child relationships
            </li>
            <li>
              <span className="text-pink-300 font-bold">Focus</span>: The current focus is displayed at the bottom of
              the explorer
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-pink-500 pt-4">
        <p className="text-sm text-pink-300 italic">
          "The Bard doesn't just record history; they curate an archive... trauma, glitches, failures, fragmented
          thoughts..."
        </p>
      </div>
    </div>
  )
}
