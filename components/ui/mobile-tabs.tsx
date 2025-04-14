"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MobileTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

interface MobileTabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const MobileTabsContext = React.createContext<MobileTabsContextValue | undefined>(undefined)

function useMobileTabsContext(): MobileTabsContextValue {
  const context = React.useContext(MobileTabsContext)
  if (!context) {
    throw new Error("Mobile Tabs components must be used within a MobileTabs component")
  }
  return context
}

export function MobileTabs({
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: MobileTabsProps): JSX.Element {
  const [tabValue, setTabValue] = React.useState(value || defaultValue || "")

  const handleValueChange = React.useCallback(
    (value: string) => {
      setTabValue(value)
      onValueChange?.(value)
    },
    [onValueChange],
  )

  const contextValue = React.useMemo(
    () => ({
      value: value !== undefined ? value : tabValue,
      onValueChange: handleValueChange,
    }),
    [value, tabValue, handleValueChange],
  )

  return (
    <MobileTabsContext.Provider value={contextValue}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </MobileTabsContext.Provider>
  )
}

interface MobileTabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom"
}

export function MobileTabsList({ className, position = "bottom", ...props }: MobileTabsListProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex items-center justify-around bg-black",
        position === "top" ? "border-b" : "border-t fixed bottom-0 left-0 right-0 h-16 z-50",
        className,
      )}
      {...props}
    />
  )
}

interface MobileTabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  icon?: React.ReactNode
  label: string
}

export function MobileTabsTrigger({ className, value, icon, label, ...props }: MobileTabsTriggerProps): JSX.Element {
  const { value: selectedValue, onValueChange } = useMobileTabsContext()
  const isSelected = selectedValue === value

  return (
    <button
      className={cn(
        "flex flex-col items-center justify-center min-w-[64px] min-h-[64px] px-2 py-1",
        isSelected ? "text-pink-400" : "text-pink-300/70",
        className,
      )}
      onClick={() => onValueChange(value)}
      {...props}
    >
      <div className="w-6 h-6 mb-1">{icon}</div>
      <span className="text-xs">{label}</span>
    </button>
  )
}

interface MobileTabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export function MobileTabsContent({
  className,
  value,
  children,
  ...props
}: MobileTabsContentProps): JSX.Element | null {
  const { value: selectedValue } = useMobileTabsContext()
  const isSelected = selectedValue === value

  if (!isSelected) return null

  return (
    <div className={cn("pb-16", className)} {...props}>
      {children}
    </div>
  )
}
