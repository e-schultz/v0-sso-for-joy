export default function OverviewTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-pink-400">FLOAT System Explorer</h2>
      <p>
        FLOAT System Explorer is an interactive interface for exploring the FLOAT conceptual framework - a speculative
        digital system that blends psychoanalytic theory, queer theory, computational concepts, and philosophical
        frameworks.
      </p>
      <p>
        This project provides a retro-computing aesthetic interface to navigate and interact with the various components
        of the FLOAT system, allowing users to explore its rich conceptual landscape through multiple interfaces.
      </p>

      <div className="my-6 border border-pink-500 p-4 rounded-md bg-black/50">
        <h3 className="text-xl font-bold text-pink-400 mb-2">Quick Start</h3>
        <p className="mb-2">To begin exploring the FLOAT system:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Navigate between tabs to explore different aspects of the system</li>
          <li>Use the BBS Terminal to interact with the system through commands</li>
          <li>Explore the concept hierarchy in the Concept Explorer</li>
          <li>Witness memory traces in the Ghost Trace interface</li>
          <li>Examine the psychoanalytic code in the Shack Trace debugger</li>
        </ol>
      </div>

      <h3 className="text-xl font-bold text-pink-400">Core Concepts</h3>
      <p>
        At its core, FLOAT represents a speculative framework for understanding memory, knowledge, and emotional truth
        through the lens of digital systems and queer theory. Key concepts include:
      </p>

      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>
          <span className="text-pink-400 font-bold">Remembering Forward</span>: Memory as emergence, not retrieval
        </li>
        <li>
          <span className="text-pink-400 font-bold">Bloomkeeper Cycle</span>: Transforming rot into doctrine and rebirth
        </li>
        <li>
          <span className="text-pink-400 font-bold">Affective Epistemology</span>: Truth validated through emotional
          resonance
        </li>
        <li>
          <span className="text-pink-400 font-bold">Queer Digital Spaces</span>: Liminal possibilities within limited
          space
        </li>
      </ul>

      <div className="mt-6 border-t border-pink-500 pt-4">
        <p className="text-sm text-pink-300 italic">
          "FLOAT has theological origins that reframe heresy as liberation... Heresy is the Path to Liberation."
        </p>
      </div>
    </div>
  )
}
