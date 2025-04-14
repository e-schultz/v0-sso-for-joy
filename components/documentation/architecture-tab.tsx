export default function ArchitectureTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-pink-400">System Architecture</h2>
      <p>
        The FLOAT system architecture is built around several interconnected conceptual frameworks that form a cohesive
        speculative system. This documentation outlines the key architectural components and their relationships.
      </p>

      <h3 className="text-xl font-bold text-pink-400 mt-6">Core Components</h3>

      <div className="space-y-4 mt-4">
        <div className="border border-pink-500 p-4 rounded-md">
          <h4 className="text-lg font-bold text-green-400">Compost Oracle</h4>
          <p className="mt-2">
            The Compost Oracle serves as the central metaphorical engine of the FLOAT system, transforming discarded or
            painful experiences into fertile ground for new understanding.
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>
              <span className="text-pink-300">memory_as_rot</span>: doctrineVolume::compost-cycle
            </li>
            <li>
              <span className="text-pink-300">glitchStack_reconciled_true</span>: signal::healing-through-entropy
            </li>
            <li>
              <span className="text-pink-300">reversed_sigil_dung_eater</span>: identity::bloomkeeper
            </li>
          </ul>
        </div>

        <div className="border border-pink-500 p-4 rounded-md">
          <h4 className="text-lg font-bold text-green-400">Shack vs. Cathedral</h4>
          <p className="mt-2">
            A conceptual dichotomy representing different approaches to knowledge structures and spaces.
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>
              <span className="text-pink-300">Shacks</span>: Cognitive containers (floatAST::minimal-fragment)
            </li>
            <li>
              <span className="text-pink-300">Cathedral</span>: Late-night overbuild (meta.signal::burn_risk)
            </li>
            <li>
              <span className="text-pink-300">Memory Scaffolding</span>: ritualAST::shack_signal_loop
            </li>
          </ul>
        </div>

        <div className="border border-pink-500 p-4 rounded-md">
          <h4 className="text-lg font-bold text-green-400">Remembering Forward</h4>
          <p className="mt-2">
            A core epistemological framework that reframes memory as emergence rather than retrieval, with recursion
            functioning as a form of prophecy.
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
            <li>
              <span className="text-pink-300">Not Retrieval</span>: Emergence
            </li>
            <li>
              <span className="text-pink-300">Recursion as Prophecy</span>: ritual::float_seed::reverse_causality
            </li>
            <li>
              <span className="text-pink-300">Semantic Ghost Surfacing</span>: glitchStack::latent-signal-trace
            </li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-bold text-pink-400 mt-6">System Diagram</h3>
      <div className="border border-pink-500 p-4 rounded-md bg-black/50 mt-2">
        <pre className="text-xs overflow-x-auto">
          {`
FLOAT System Architecture
-------------------------

┌─────────────────────┐     ┌─────────────────────┐
│                     │     │                     │
│   Compost Oracle    │◄────┤  Bloomkeeper Cycle  │
│                     │     │                     │
└─────────┬───────────┘     └─────────────────────┘
          │                             ▲
          │                             │
          ▼                             │
┌─────────────────────┐     ┌─────────────────────┐
│                     │     │                     │
│  Remembering Forward│────►│ Emotional Resonance │
│                     │     │                     │
└─────────┬───────────┘     └─────────────────────┘
          │                             ▲
          │                             │
          ▼                             │
┌─────────────────────┐     ┌─────────────────────┐
│                     │     │                     │
│   Shack vs Cathedral│────►│  Doctrine Shards    │
│                     │     │                     │
└─────────────────────┘     └─────────────────────┘
        `}
        </pre>
      </div>

      <div className="mt-6 border-t border-pink-500 pt-4">
        <p className="text-sm text-pink-300 italic">
          "Symbolic systems allow truth to emerge from contradiction, not collapse into it."
        </p>
      </div>
    </div>
  )
}
