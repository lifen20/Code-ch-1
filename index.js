// Prompt the user to enter a student's marks
const marks = prompt("Enter the student's marks (0 to 100):");

// Convert the input to a number
const numMarks = Number.parseInt(marks, 10);

// Check if the input is a valid number between 0 and 100
if (isNaN(numMarks) || numMarks < 0 || numMarks > 100) {
  alert("Invalid input. Please enter a number between 0 and 100.");
} else {
  // Determine the grade based on the marks
  let grade;
  if (numMarks > 79) {
    grade = "A";
  } else if (numMarks >= 60) {
    grade = "B";
  } else if (numMarks >= 59) {
    grade = "C";
  } else if (numMarks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }

  // Display the grade
  alert("The student's grade is: " + grade);
}