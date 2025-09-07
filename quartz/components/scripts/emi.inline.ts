// quartz/components/scripts/counter.inline.ts

// Find the button and display elements by their IDs
const button = document.getElementById("counter-button") as HTMLButtonElement
const display = document.getElementById("counter-display") as HTMLSpanElement

// Make sure the elements were found before adding event listeners
if (button && display) {
  let count = 0

  // Add a 'click' event listener to the button
  button.addEventListener("click", () => {
    // Increment the counter
    count++
    // Update the text content of the display span
    display.textContent = count.toString()
  })
}