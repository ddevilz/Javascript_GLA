document.addEventListener("DOMContentLoaded", () => {
  const revealButton = document.getElementById("revealButton");
  const answer = document.querySelector(".answer");

  revealButton.addEventListener("click", () => {
    answer.classList.toggle("hidden");

    if (answer.classList.contains("hidden")) {
      revealButton.textContent = "Reveal Answer";
    } else {
      revealButton.textContent = "Hide Answer";
    }
  });
});

document.addEventListener("click", function (params) {});











// revealButton.textContent = answer.classList.contains("hidden")
//   ? "Reveal Answer"
//   : "Hide Answer";
