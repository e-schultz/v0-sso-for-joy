"use client"

import type React from "react"
import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface HelpButtonProps {
  onOpenDocs: () => void
}

export function HelpButton({ onOpenDocs }: HelpButtonProps): JSX.Element {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onOpenDocs()
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-pink-500 hover:text-pink-400 hover:bg-pink-950/30"
            onClick={onOpenDocs}
            onKeyDown={handleKeyDown}
            aria-label="Open Documentation"
          >
            <HelpCircle className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Open Documentation</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
