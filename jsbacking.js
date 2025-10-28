const rows = 5;
const cols = 8;
const seatingChart = document.getElementById("seating-chart");
const confirmBtn = document.getElementById("confirm-btn");
let selectedSeats = [];

//chart
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.textContent = `${String.fromCharCode(65 + r)}${c + 1}`;
    seat.dataset.row = r;
    seat.dataset.col = c;

    seat.addEventListener("click", () => {
      if (seat.classList.contains("reserved")) return;

      seat.classList.toggle("selected");
      const id = `${seat.dataset.row}-${seat.dataset.col}`;

      if (seat.classList.contains("selected")) {
        selectedSeats.push(id);
      } else {
        selectedSeats = selectedSeats.filter(s => s !== id);
      }
    });

    seatingChart.appendChild(seat);
  }
}

confirmBtn.addEventListener("click", () => {
  if (selectedSeats.length === 0) {
    alert("Please select at least one seat.");
  } else {
    alert(`You selected seats: ${selectedSeats.join(", ")}`);
  }
  //redirect to touchnet somehow after this^^
});
