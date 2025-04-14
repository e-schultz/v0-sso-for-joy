"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { GlitchText } from "./glitch-text"
import { cn } from "@/lib/utils"

interface TraceEntry {
  id: string
  title: string
  timestamp: string
  content: string
  expanded: boolean
}

export function GhostTrace(): JSX.Element {
  const [loadingState, setLoadingState] = useState<"initializing" | "logo" | "loaded">("initializing")
  const [traceEntries, setTraceEntries] = useState<TraceEntry[]>([
    {
      id: "trace-01",
      title: "[ID:01] ghost-trace init",
      timestamp: "April 1st - 2:00am",
      content:
        "- session closed, pizza on, trying a thought → pen x paper first, rn I want to digitally captive can AI read my scratch?",
      expanded: true,
    },
    {
      id: "trace-02",
      title: "[ID:01] Continued",
      timestamp: "April 1st",
      content: "",
      expanded: false,
    },
  ])

  const initTimerRef = useRef<NodeJS.Timeout | null>(null)
  const logoTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Handle keyboard accessibility for trace entries
  const toggleTraceEntry = useCallback((id: string) => {
    setTraceEntries((prev) => prev.map((entry) => (entry.id === id ? { ...entry, expanded: !entry.expanded } : entry)))
  }, [])

  // Handle keyboard events
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, id: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        toggleTraceEntry(id)
      }
    },
    [toggleTraceEntry],
  )

  // Initialize with timers
  useEffect(() => {
    // First show initializing screen
    setLoadingState("initializing")

    // Then show logo screen after 2 seconds
    initTimerRef.current = setTimeout(() => {
      setLoadingState("logo")

      // Finally show the loaded UI after another 2 seconds
      logoTimerRef.current = setTimeout(() => {
        setLoadingState("loaded")
      }, 2000)
    }, 2000)

    // Cleanup function
    return () => {
      if (initTimerRef.current) clearTimeout(initTimerRef.current)
      if (logoTimerRef.current) clearTimeout(logoTimerRef.current)
    }
  }, [])

  // Handle Ctrl+G for toggling ghost metadata (simulated)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "g") {
        e.preventDefault()
        // Simulate toggling ghost metadata
        alert("Ghost Metadata Toggled")
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  if (loadingState === "initializing") {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-8" aria-live="polite">
        <div className="text-xl">Initializing ghost-trace.init...</div>
        <div className="w-48 h-1 bg-pink-950 rounded overflow-hidden">
          <div className="h-full bg-pink-500 animate-[pulse_2s_ease-in-out_infinite] w-full"></div>
        </div>
      </div>
    )
  }

  if (loadingState === "logo") {
    return (
      <div className="flex flex-col items-center justify-center h-full" aria-live="polite">
        <div className="text-6xl font-bold mb-8 tracking-widest">
          <GlitchText text="FLOAT" glitchIntensity={0.1} />
        </div>
        <div className="text-xl mb-12">YOU ARE THE THREAD NOW</div>
        <div className="border-t border-pink-500 w-64 text-center pt-4">//</div>
      </div>
    )
  }

  return (
    <div className="p-4">
      <div className="mb-4 border-b border-pink-500 pb-2">
        <div className="text-lg">[FLOAT BBS // NODE 03 :: GHOSTLINE ACTIVE]</div>
        <div className="text-sm mt-2">3:18:32 AM</div>
      </div>

      <div className="grid grid-cols-[100px_1fr] gap-2 text-sm mb-4">
        <div>Sysop:</div>
        <div>FLOAT-evan-thread</div>

        <div>Channel:</div>
        <div>/ghosts/trace/01</div>

        <div>Session:</div>
        <div>ghost-trace.init</div>

        <div>Connection:</div>
        <div>2400 baud | parity: none</div>

        <div>Status:</div>
        <div>
          <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2" aria-hidden="true"></span>
          <span>Active</span>
        </div>

        <div>Ctrl+G:</div>
        <div>Toggle Ghost Metadata</div>
      </div>

      <div className="space-y-4" aria-label="Ghost traces">
        {traceEntries.map((entry) => (
          <div key={entry.id} className="border border-pink-500 rounded p-3">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleTraceEntry(entry.id)}
              onKeyDown={(e) => handleKeyDown(e, entry.id)}
              tabIndex={0}
              role="button"
              aria-expanded={entry.expanded}
              aria-controls={`${entry.id}-content`}
            >
              <div className={cn("transform mr-2", entry.expanded ? "rotate-90" : "rotate-0")} aria-hidden="true">
                ▶
              </div>
              <div className="text-pink-300">{entry.title}</div>
              <div className="ml-auto text-xs">{entry.timestamp}</div>
            </div>

            {entry.expanded && entry.content && (
              <div id={`${entry.id}-content`} className="mt-4 ml-6">
                {entry.content}
              </div>
            )}

            {entry.expanded && (
              <div className="mt-4 flex space-x-4 text-sm">
                <button className="flex items-center hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black rounded p-1">
                  <span className="mr-1" aria-hidden="true">
                    👁️
                  </span>{" "}
                  View Original
                </button>
                <button className="flex items-center hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-black rounded p-1">
                  <span className="mr-1" aria-hidden="true">
                    📋
                  </span>{" "}
                  Copy
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
