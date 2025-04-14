"use client"

import { useState, useRef, useCallback, type KeyboardEvent } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ConceptNode {
  id: string
  name: string
  color: string
  children?: ConceptNode[]
}

export function ConceptExplorer(): JSX.Element {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    consciousness: true,
    "somatic-awareness": true,
    "embodied-mind": true,
    "sensorial-perception": true,
    "sensorial-dissonance": true,
    "somatic-emotions": true,
  })
  const [focusedNodeId, setFocusedNodeId] = useState<string | null>(null)
  const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const toggleNode = useCallback((nodeId: string) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [nodeId]: !prev[nodeId],
    }))
  }, [])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>, nodeId: string, hasChildren: boolean) => {
      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault()
          if (hasChildren) {
            toggleNode(nodeId)
          }
          break
        case "ArrowRight":
          e.preventDefault()
          if (hasChildren && !expandedNodes[nodeId]) {
            toggleNode(nodeId)
          }
          break
        case "ArrowLeft":
          e.preventDefault()
          if (hasChildren && expandedNodes[nodeId]) {
            toggleNode(nodeId)
          }
          break
        default:
          break
      }
    },
    [expandedNodes, toggleNode],
  )

  // Concept data structure
  const conceptData: ConceptNode = {
    id: "consciousness",
    name: "Consciousness",
    color: "text-purple-400",
    children: [
      {
        id: "somatic-awareness",
        name: "Somatic Awareness",
        color: "text-green-400",
        children: [
          {
            id: "embodied-mind",
            name: "Embodied Mind",
            color: "text-blue-400",
            children: [
              {
                id: "sensorial-perception",
                name: "Sensorial Perception",
                color: "text-purple-400",
                children: [
                  {
                    id: "sensorial-dissonance",
                    name: "Sensorial Dissonance",
                    color: "text-blue-400",
                    children: [
                      {
                        id: "perceptual-conflict",
                        name: "Perceptual Conflict",
                        color: "text-green-400",
                      },
                    ],
                  },
                  {
                    id: "aesthetic-perception",
                    name: "Aesthetic Perception",
                    color: "text-red-400",
                  },
                  {
                    id: "perceptual-abstraction",
                    name: "Perceptual Abstraction",
                    color: "text-red-400",
                  },
                  {
                    id: "sensory-synesthesia",
                    name: "Sensory Synesthesia",
                    color: "text-red-400",
                  },
                ],
              },
              {
                id: "somatic-emotions",
                name: "Somatic Emotions",
                color: "text-purple-400",
                children: [
                  {
                    id: "body-keeps-score",
                    name: "The Body Keeps the Score",
                    color: "text-red-400",
                    children: [
                      {
                        id: "somatic-memory",
                        name: "Somatic Memory",
                        color: "text-white",
                      },
                      {
                        id: "quantum-biology",
                        name: "Quantum Biology",
                        color: "text-white",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

  // Recursive component to render concept nodes
  const renderConceptNode = (node: ConceptNode, depth = 0): JSX.Element => {
    const isExpanded = expandedNodes[node.id] ?? false
    const hasChildren = node.children && node.children.length > 0
    const isFocused = focusedNodeId === node.id

    return (
      <div key={node.id} className={node.color}>
        <div
          ref={(el) => (nodeRefs.current[node.id] = el)}
          className={cn(
            "flex items-center min-h-[44px] px-2 rounded transition-colors",
            "hover:bg-pink-950/20 active:bg-pink-950/40",
            isFocused && "ring-2 ring-pink-500 ring-offset-1 ring-offset-black",
          )}
          onClick={() => hasChildren && toggleNode(node.id)}
          onKeyDown={(e) => handleKeyDown(e, node.id, hasChildren)}
          onFocus={() => setFocusedNodeId(node.id)}
          onBlur={() => setFocusedNodeId(null)}
          tabIndex={0}
          role={hasChildren ? "button" : undefined}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-label={`${node.name}${hasChildren ? ", " + (isExpanded ? "expanded" : "collapsed") : ""}`}
        >
          {hasChildren ? (
            <span className="mr-2 flex items-center justify-center w-6 h-6" aria-hidden="true">
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </span>
          ) : (
            <span className="mr-2 w-6 h-6 flex items-center justify-center" aria-hidden="true">
              └─
            </span>
          )}
          <span>{node.name}</span>
        </div>

        {hasChildren && isExpanded && (
          <div className="ml-4" role="group" aria-label={`${node.name} children`}>
            {node.children!.map((child) => renderConceptNode(child, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="font-mono text-base">
      <div className="mb-6 text-center text-green-400 text-lg">🌱 CONCEPT EXPLORER 🌱</div>

      <div role="tree" aria-label="Concept hierarchy">
        {renderConceptNode(conceptData)}
      </div>

      <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-gray-500">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div>Concepts: 2115 | Connections: 2269</div>
          <div>Display depth: 7</div>
        </div>
        <div className="mt-1">Exploring: Sensorial Dissonance</div>
      </div>
    </div>
  )
}
