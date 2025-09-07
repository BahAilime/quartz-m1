// quartz/components/CounterButton.tsx
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import script from "./scripts/emi.inline" // We'll create this next

// This is the TSX component that will be rendered on the server
const CounterButton: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`counter-container ${displayClass ?? ""}`}>
      <button id="counter-button">Click me!</button>
      <p>
        Button has been clicked <span id="counter-display">0</span> times.
      </p>
    </div>
  )
}

// This tells Quartz to load the 'counter.inline.ts' script after the DOM is ready
CounterButton.afterDOMLoaded = script

export default (() => CounterButton) satisfies QuartzComponentConstructor