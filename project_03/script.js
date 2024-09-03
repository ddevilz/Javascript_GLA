function addCard() {
  const name = document.getElementById("name").value;
  const rollnum = document.getElementById("rollnum").value;
  const details = document.getElementById("details").value;

  const card = document.createElement("div");
  card.style.border = "1px solid #000";
  card.style.padding = "10px";
  card.style.margin = "10px 0";

  card.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Roll Number:</strong> ${rollnum}</p>
            <p><strong>Details:</strong> ${details}</p>
        `;

  document.getElementById("cardsContainer").appendChild(card);

  document.getElementById("name").value = "";
  document.getElementById("rollnum").value = "";
  document.getElementById("details").value = "";
}
