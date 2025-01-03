// Select all bars
const bars = document.querySelectorAll('.bar');

// Select the tooltip element
const tooltip = document.getElementById('tooltip');

// Add event listeners to each bar
bars.forEach((bar) => {
  // Show tooltip on mousemove
  bar.addEventListener('mousemove', (e) => {
    // Get the percentage value from the bar's data attribute
    const percentage = bar.dataset.percentage;

    // Update tooltip content
    if (percentage !== undefined) {
      tooltip.querySelector('.tooltip-text').textContent = `${percentage}%`;
    } else {
      tooltip.querySelector('.tooltip-text').textContent = `Percentage: Not Defined`;
    }

    // Position tooltip near the cursor
    tooltip.style.left = `${e.pageX - 40}px`; // Slight right offset
    tooltip.style.top = `${e.pageY - 50}px`; // Slight above offset

    // Show the tooltip
    tooltip.classList.add('show');
  });

  // Hide the tooltip when mouse leaves
  bar.addEventListener('mouseleave', () => {
    tooltip.classList.remove('show');
  });
});
