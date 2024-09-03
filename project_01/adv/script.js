document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("colorPicker");
  
  colorPicker.addEventListener("change", (event) => {
    const selectedColor = event.target.value;
    if (selectedColor) {
      document.body.style.backgroundColor = selectedColor;
    } else {
      document.body.style.backgroundColor = "";
    }
  });
});
