// Animate skill bars
document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".bar span");
  skillBars.forEach(bar => {
    const skillLevel = bar.getAttribute("data-skill");
    bar.style.width = skillLevel + "%";
  });
});

// Simple form alert (demo)
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});