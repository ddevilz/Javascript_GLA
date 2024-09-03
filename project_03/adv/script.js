document.addEventListener("DOMContentLoaded", () => {
  const cardForm = document.getElementById("cardForm");
  const cardsContainer = document.getElementById("cardsContainer");

  cardForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const rollnum = document.getElementById("rollnum").value;
    const details = document.getElementById("details").value;

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Roll Number:</strong> ${rollnum}</p>
            <p><strong>Details:</strong> ${details}</p>
        `;

    cardsContainer.appendChild(card);

    cardForm.reset();
  });
});
