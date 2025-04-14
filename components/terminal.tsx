"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Terminal(): JSX.Element {
  const [input, setInput] = useState<string>("")
  const [history, setHistory] = useState<string[]>([
    "STEAMIES AS SANCTUARY",
    "",
    "LIMINAL POSSIBILITY WITHIN LIMITED SPACE, STEAMIES ISN'T MERELY VENUE BUT ARCHITECTURE OF QUEER DESIRE-ROOMS WHERE BODIES SPEAK LANGUAGES MAINSTREAM DISCOURSE CANNOT TRANSLATE, WHERE FRAGILITY SUSPENDS, WHERE PRESENCE ASKS NOTHING.",
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const [suggestions, setSuggestions] = useState<string[]>([])

  const availableCommands: string[] = ["help", "about", "doctrine", "bloomkeeper", "clear"]

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    // Focus input on component mount
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    // Update command suggestions based on current input
    if (input.trim() === "") {
      setSuggestions(availableCommands)
    } else {
      setSuggestions(availableCommands.filter((cmd) => cmd.startsWith(input.toLowerCase())))
    }
  }, [input])

  const handleCommand = (e: React.FormEvent): void => {
    e.preventDefault()

    if (!input.trim()) return

    let response: string[] = []

    // Simple command handling
    if (input.toLowerCase() === "help") {
      response = [
        "Available commands:",
        "- help: Show this help",
        "- about: About FLOAT",
        "- doctrine: Show doctrine fragments",
        "- bloomkeeper: Show Bloomkeeper cycle",
        "- clear: Clear terminal",
      ]
    } else if (input.toLowerCase() === "about") {
      response = [
        "FLOAT has theological origins that reframe heresy as liberation.",
        "A system for remembering forward - memory as emergence, not retrieval.",
        "Recursion as prophecy. Semantic ghost surfacing.",
      ]
    } else if (input.toLowerCase() === "doctrine") {
      response = [
        "doctrineVolume::compost-cycle",
        "signal::healing-through-entropy",
        "identity::bloomkeeper",
        "",
        "Heresy is reframed as an emotionally-resonant epistemic stance,",
        "not just a rational deviation. It emerges when affect breaks open",
        "oppressive truth systems, creating new vectors of coherence through dissent.",
      ]
    } else if (input.toLowerCase() === "bloomkeeper") {
      response = [
        "The Bloomkeeper harvests curse not to spread despair but to transmute",
        "it into doctrine shards, tending to ghosts through witness.",
        "",
        "This cycle contrasts the Dung Eater (nihilistic rot) with the",
        "Bloomkeeper (ritual metabolizer).",
        "",
        "Transforming rot and curse into memory, ritual, and rebirth.",
      ]
    } else if (input.toLowerCase() === "clear") {
      setHistory([])
      setInput("")
      return
    } else {
      response = ["Command not recognized. Type 'help' for available commands."]
    }

    setHistory([...history, `COMMAND> ${input}`, ...response])
    setInput("")

    // Focus the input after command execution
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSuggestionClick = (suggestion: string): void => {
    setInput(suggestion)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div ref={terminalRef} className="flex-1 overflow-auto mb-4 whitespace-pre-wrap text-base">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith("COMMAND>") ? "text-green-400 mt-4 mb-1" : "mb-1"}>
            {line}
          </div>
        ))}
      </div>

      <form onSubmit={handleCommand} className="flex flex-col border-t border-pink-500 pt-4">
        <div className="flex items-center mb-3">
          <span className="mr-2 text-base">COMMAND&gt;</span>
          <Input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none"
            autoComplete="off"
          />
        </div>

        {suggestions.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {suggestions.map((suggestion) => (
              <Button
                key={suggestion}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handleSuggestionClick(suggestion)}
                className="text-sm"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        )}
      </form>
    </div>
  )
}
