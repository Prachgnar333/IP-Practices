console.log("JS loaded ✅");
// Step 1.
var school = "GIC;"
let year = 2025;
const maxScore = 100;
school = "GIM";
year = 2026
// maxScore = 120; // This will cause an error because maxScore is a constant

// STEP 1.3
console.log(a);      // This will cause an error because 'a' is defined after console.log
var a = 10;

try {
  console.log(b);    // ReferenceError (cannot access before initialization)
  let b = 20;
} catch (e) { console.log("b error:", e.message); }


// let -> function scoped
// var -> global scoped (can be access anywhere)

//Step 2
function letterGrade(score) {
  // return "A" (>=90), "B" (80–89), "C" (70–79), "D" (60–69), otherwise "F"
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}
console.log("Grade(92) =", letterGrade(92)); // expect "A"

function mood(emoji) {
  switch (emoji) {
    case ":)":
      return "happy";
    case ":(":
      return "sad";
    case ":|":
      return "neutral";
    default:
      return "unknown";
  }
}

// Step 3
// Sum 1..5 using three loop types:
// for loop
let sumFor = 0;
for (let i = 1; i <= 5; i++) {
  sumFor += i;
}

// while loop
let sumWhile = 0;
let j = 1;
while (j <= 5) {
  sumWhile += j;
  j++;
}

// for...of loop
const nums = [1, 2, 3, 4, 5];
let sumOf = 0;
for (const n of nums) {
  sumOf += n;
}

console.log("sumFor:", sumFor, "sumWhile:", sumWhile, "sumOf:", sumOf);

//Step 4
const scores = [88, 95, 62];
scores.push(74); // Add 74 to the end
scores.shift();  // Remove the first element
const highest = Math.max(...scores); // Find highest score
const passing = scores.filter((s) => s >= 60); // Keep only passing scores

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Passing:", passing);

// Step 5
// a) Function declaration
function square1(n) {
  return n * n;
}

// b) Function expression
const square2 = function (n) {
  return n * n;
};

// c) Arrow function
const square3 = (n) => n * n;

console.log(square1(4), square2(4), square3(4)); // expect 16 16 16

//Step 6
const student = { name: "Dana", score: 84 };
// Add a new boolean property
student.passed = student.score >= 60;

function describeStudent(s) {
  const status = s.passed ? "pass" : "fail";
  return `${s.name} scored ${s.score} (${status})`;
}

console.log(describeStudent(student));

// Step 7
const output = document.getElementById("output");
const nameInput = document.getElementById("nameInput");
const scoreInput = document.getElementById("scoreInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const list = document.getElementById("list");
const stats = document.getElementById("stats");

output.textContent = "Ready to practice DOM!";

//Step 8
// State = list of students
const state = { students: [] };

// Compute average of all scores
function computeAverage(arr) {
  if (arr.length === 0) return 0;
  const total = arr.reduce((sum, s) => sum + s.score, 0);
  return total / arr.length;
}

// Render function: update <ul> and stats
function render() {
  list.innerHTML = "";

  let passCount = 0;
  let failCount = 0;

  // Create each <li>
  state.students.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = `${s.name} — ${s.score}`;
    li.className = s.score >= 60 ? "pass" : "fail";

    if (s.score >= 60) passCount++;
    else failCount++;

    // Add remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "8px";

    removeBtn.addEventListener("click", () => {
      // Remove student by index and re-render
      state.students.splice(i, 1);
      render();
    });

    li.appendChild(removeBtn);
    list.appendChild(li);
  });

  const avg = computeAverage(state.students).toFixed(2);
  stats.textContent = `Count: ${state.students.length} | Avg: ${avg} | Pass: ${passCount} | Fail: ${failCount}`;
}

// Add student
addBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const score = Number(scoreInput.value);

  if (!name) {
    alert("Name cannot be empty!");
    return;
  }
  if (isNaN(score) || score < 0 || score > 100) {
    alert("Score must be a number between 0 and 100!");
    return;
  }

  state.students.push({ name, score });
  nameInput.value = "";
  scoreInput.value = "";
  render();
});

// Clear all
clearBtn.addEventListener("click", () => {
  state.students = [];
  render();
});

// Initial render
render();



