"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  glitchIntensity?: number // 0-1
  glitchSpeed?: number // ms
}

export function GlitchText({
  text,
  className,
  glitchIntensity = 0.03,
  glitchSpeed = 100,
}: GlitchTextProps): JSX.Element {
  const [displayText, setDisplayText] = useState<string>(text)
  const elementRef = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number>()
  const lastUpdateRef = useRef<number>(0)
  const isInViewportRef = useRef<boolean>(true)
  const glitchCharsRef = useRef<string>("!<>-_\\/[]{}—=+*^?#________")

  // Memoize the glitch function to prevent unnecessary re-renders
  const applyGlitchEffect = useCallback(() => {
    if (!isInViewportRef.current || Math.random() > 0.8) return

    const newText = text
      .split("")
      .map((char) => {
        if (Math.random() < glitchIntensity) {
          return glitchCharsRef.current[Math.floor(Math.random() * glitchCharsRef.current.length)]
        }
        return char
      })
      .join("")

    setDisplayText(newText)

    // Reset after a short delay
    setTimeout(() => {
      setDisplayText(text)
    }, 50)
  }, [text, glitchIntensity])

  // Animation function using requestAnimationFrame
  const animate = useCallback(
    (timestamp: number) => {
      // Only update at specified intervals
      if (timestamp - lastUpdateRef.current >= glitchSpeed) {
        lastUpdateRef.current = timestamp
        applyGlitchEffect()
      }

      frameRef.current = requestAnimationFrame(animate)
    },
    [applyGlitchEffect, glitchSpeed],
  )

  useEffect(() => {
    // Create intersection observer to pause when not visible
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          isInViewportRef.current = entries[0].isIntersecting
        },
        { threshold: 0.1 },
      )

      if (elementRef.current) {
        observer.observe(elementRef.current)
      }

      // Start animation
      frameRef.current = requestAnimationFrame(animate)

      // Cleanup function
      return () => {
        observer.disconnect()
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
        }
      }
    } else {
      // Fallback for browsers without IntersectionObserver
      frameRef.current = requestAnimationFrame(animate)

      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current)
        }
      }
    }
  }, [animate])

  // Update display text when text prop changes
  useEffect(() => {
    setDisplayText(text)
  }, [text])

  return (
    <span ref={elementRef} className={cn("relative", className)}>
      <span className="relative z-10">{displayText}</span>
      <span
        className="absolute top-0 left-0 text-blue-400 opacity-30 z-0 transform translate-x-[1px] translate-y-[1px]"
        aria-hidden="true"
      >
        {displayText}
      </span>
    </span>
  )
}
