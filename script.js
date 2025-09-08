// 🎯 Part 2: Functions with parameters & return values

// Function to calculate total marks
function calculateTotal(marks) {
  let total = 0;
  for (let m of marks) total += m;
  return total;
}

// Function to calculate average
function calculateAverage(total, count) {
  return total / count;
}

// Function to determine grade
function calculateGrade(avg) {
  if (avg >= 70) return "A";
  else if (avg >= 60) return "B";
  else if (avg >= 50) return "C";
  else if (avg >= 40) return "D";
  else return "E";
}

// Global Scope Example
let systemName = "Rimomo Student Marksheet";

function showSystem() {
  let localNote = "Marks are confidential!";
  console.log(systemName); // ✅ global accessible
  console.log(localNote);  // ✅ local accessible
}
showSystem();

// 🎬 Part 3: Combine CSS + JS animations

const btn = document.getElementById("calcBtn");
const box = document.getElementById("box");
const result = document.getElementById("result");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

btn.addEventListener("click", () => {
  // Animate box
  box.classList.add("animate");

  // Sample student marks (simulate user input)
  const marks = [80, 65, 70]; 
  let total = calculateTotal(marks);
  let avg = calculateAverage(total, marks.length);
  let grade = calculateGrade(avg);

  // Display result
  result.textContent = `Total: ${total}, Average: ${avg.toFixed(2)}, Grade: ${grade}`;

  // Show modal
  modal.style.display = "flex";

  setTimeout(() => box.classList.remove("animate"), 1000);
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
