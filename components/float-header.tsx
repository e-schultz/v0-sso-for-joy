import { GlitchText } from "./glitch-text"
import type { JSX } from "react/jsx-runtime"

export function FloatHeader(): JSX.Element {
  return (
    <div className="border border-pink-500 p-4 rounded">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wider">
          <GlitchText text="[FLOAT BBS]" />
        </h1>
        <div className="text-right">
          <span className="opacity-70">(Ξ) E</span>
        </div>
      </div>

      <div className="mt-6 mb-2">
        <GlitchText text="SSO FOR JOY" className="text-5xl font-bold tracking-widest text-center block" />
      </div>
    </div>
  )
}
