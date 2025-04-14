import type React from "react"
import { cn } from "@/lib/utils"

type ContainerSize = "default" | "sm" | "lg" | "full"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: ContainerSize
}

export function Container({ children, className, size = "default", ...props }: ContainerProps): JSX.Element {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4",
        {
          "max-w-screen-lg": size === "default",
          "max-w-screen-md": size === "sm",
          "max-w-screen-xl": size === "lg",
          "max-w-none": size === "full",
        },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
