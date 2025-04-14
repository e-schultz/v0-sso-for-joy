"use client"

import { useState, useEffect, useCallback } from "react"
import { Terminal } from "@/components/terminal"
import { ConceptExplorer } from "@/components/concept-explorer"
import { GhostTrace } from "@/components/ghost-trace"
import { ShackTrace } from "@/components/shack-trace"
import { FloatHeader } from "@/components/float-header"
import { Documentation } from "@/components/documentation"
import { HelpButton } from "@/components/help-button"
import { MobileTabs, MobileTabsList, MobileTabsTrigger, MobileTabsContent } from "@/components/ui/mobile-tabs"
import { TerminalIcon, Network, Ghost, Code, BookOpen } from "lucide-react"
import { Container } from "@/components/ui/container"

export default function FloatExplorer(): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>("bbs")
  const [isKeyboardUser, setIsKeyboardUser] = useState<boolean>(false)

  // Detect keyboard users to show focus styles only when needed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        setIsKeyboardUser(true)
        window.removeEventListener("keydown", handleKeyDown)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // Add class to body for keyboard users
  useEffect(() => {
    if (isKeyboardUser) {
      document.body.classList.add("keyboard-user")
    } else {
      document.body.classList.remove("keyboard-user")
    }
  }, [isKeyboardUser])

  const openDocumentation = useCallback(() => {
    setActiveTab("docs")
  }, [])

  // Get the current section title for screen readers
  const getCurrentSectionTitle = useCallback(() => {
    switch (activeTab) {
      case "bbs":
        return "BBS Terminal"
      case "concepts":
        return "Concept Explorer"
      case "ghost":
        return "Ghost Trace"
      case "shack":
        return "Shack Trace"
      case "docs":
        return "Documentation"
      default:
        return "FLOAT System Explorer"
    }
  }, [activeTab])

  // Get the current section status for the footer
  const getCurrentSectionStatus = useCallback(() => {
    switch (activeTab) {
      case "bbs":
        return "door::steamies-sanctuary.v1"
      case "concepts":
        return "memory::conceptual-framework"
      case "ghost":
        return "ghost-trace.init"
      case "docs":
        return "float.documentation.v1"
      case "shack":
        return "float.debug.shacktrace"
      default:
        return "system.unknown"
    }
  }, [activeTab])

  return (
    <div className="min-h-screen bg-black text-pink-500 font-mono flex flex-col">
      <header>
        <Container className="py-4">
          <FloatHeader />
          <HelpButton onOpenDocs={openDocumentation} />
        </Container>
      </header>

      <main aria-live="polite" aria-label={getCurrentSectionTitle()}>
        <MobileTabs defaultValue="bbs" value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
          <div className="flex-1">
            <MobileTabsContent value="bbs" className="h-full">
              <Container className="py-4">
                <div className="border border-pink-500 rounded p-4 h-[calc(100vh-180px)] overflow-auto">
                  <Terminal />
                </div>
              </Container>
            </MobileTabsContent>

            <MobileTabsContent value="concepts" className="h-full">
              <Container className="py-4">
                <div className="border border-pink-500 rounded p-4 h-[calc(100vh-180px)] overflow-auto">
                  <ConceptExplorer />
                </div>
              </Container>
            </MobileTabsContent>

            <MobileTabsContent value="ghost" className="h-full">
              <Container className="py-4">
                <div className="border border-pink-500 rounded p-4 h-[calc(100vh-180px)] overflow-auto">
                  <GhostTrace />
                </div>
              </Container>
            </MobileTabsContent>

            <MobileTabsContent value="shack" className="h-full">
              <Container className="py-4">
                <div className="border border-pink-500 rounded p-4 h-[calc(100vh-180px)] overflow-auto">
                  <ShackTrace />
                </div>
              </Container>
            </MobileTabsContent>

            <MobileTabsContent value="docs" className="h-full">
              <Container className="py-4">
                <div className="border border-pink-500 rounded p-4 h-[calc(100vh-180px)] overflow-auto">
                  <Documentation />
                </div>
              </Container>
            </MobileTabsContent>
          </div>

          <footer>
            <Container className="py-2">
              <div className="text-xs border-t border-pink-500 pt-2 mb-16">
                FLOAT System v0.1 | {getCurrentSectionStatus()}
              </div>
            </Container>
          </footer>

          <nav>
            <MobileTabsList position="bottom">
              <MobileTabsTrigger
                value="bbs"
                icon={<TerminalIcon className="w-6 h-6" />}
                label="BBS"
                aria-label="BBS Terminal"
              />
              <MobileTabsTrigger
                value="concepts"
                icon={<Network className="w-6 h-6" />}
                label="Concepts"
                aria-label="Concept Explorer"
              />
              <MobileTabsTrigger
                value="ghost"
                icon={<Ghost className="w-6 h-6" />}
                label="Ghost"
                aria-label="Ghost Trace"
              />
              <MobileTabsTrigger
                value="shack"
                icon={<Code className="w-6 h-6" />}
                label="Shack"
                aria-label="Shack Trace"
              />
              <MobileTabsTrigger
                value="docs"
                icon={<BookOpen className="w-6 h-6" />}
                label="Docs"
                aria-label="Documentation"
              />
            </MobileTabsList>
          </nav>
        </MobileTabs>
      </main>
    </div>
  )
}
