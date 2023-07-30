// Function to scroll to the form's top when the page loads
window.addEventListener("load", function() {
  document.getElementById("feedbackForm").scrollIntoView({ behavior: "smooth" });
});

// Function to add smooth scrolling to the form's next button
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();
  validateAndProceed();
});

function validateAndProceed() {
  var fullName = document.getElementById("fullName").value;
  var registrationNumber = document.getElementById("registrationNumber").value;
  var semester = parseInt(document.getElementById("semester").value);
  var branch = document.getElementById("branch").value;
  var branchFaculty = document.getElementById("branchFaculty").value;

  if (!fullName || !registrationNumber || !semester || !branch || !branchFaculty) {
    alert("Please fill all the fields!");
    return;
  }
}


// Create an array containing the names of branches
const branchesArray = ["Select Branch", "Civil Engineering", "Computer Science and Engineering", "Electrical Engineering", "Mechanical Engineering", "Metallurgical & Material Engineering", "Mineral Engineering", "Mining Engineering"];
const branchSelect = document.getElementById("branch");

// Function to populate the branch options from the branchesArray
function populateBranchOptions() {
  // Clear the existing options
  branchSelect.innerHTML = "";

  // Populate the branch options
  branchesArray.forEach((branch) => {
    const option = document.createElement("option");
    option.value = branch;
    option.text = branch;
    branchSelect.appendChild(option);
  });
}

// Event listener to update teacher options when the branch is changed
document.getElementById("branch").addEventListener("change", function () {
  updateTeacherOptions();
});

// Call the function to populate the branch options when the page loads
populateBranchOptions();

// Create an object that maps branches to respective arrays of teachers
const branchTeachers = {
  "Civil Engineering": ["Select Teacher", "Teacher 1", "Teacher 2", "Teacher 3"],
  "Computer Science and Engineering": ["Select Teacher", "Teacher A", "Teacher B", "Teacher C"],
  "Electrical Engineering": ["Select Teacher", "Teacher I", "Teacher II", "Teacher III"],
  "Mechanical Engineering": ["Select Teacher", "Teacher M1", "Teacher M2", "Teacher M3"],
  "Metallurgical & Material Engineering": ["Select Teacher", "Teacher MM1", "Teacher MM2", "Teacher MM3"],
  "Mineral Engineering": ["Select Teacher", "Teacher ME1", "Teacher ME2", "Teacher ME3"],
  "Mining Engineering": ["Select Teacher", "Teacher ME1", "Teacher ME2", "Teacher ME3"]

  // Add other branches and their respective teachers here
};


function updateTeacherOptions() {
  const branchSelect = document.getElementById("branch");
  const branchFacultySelect = document.getElementById("branchFaculty");

  const selectedBranch = branchSelect.value;
  const teachers = branchTeachers[selectedBranch];

  // Clear the existing options
  branchFacultySelect.innerHTML = "";

  // Populate the new teacher options
  teachers.forEach((teacher) => {
    const option = document.createElement("option");
    option.value = teacher;
    option.text = teacher;
    branchFacultySelect.appendChild(option);
  });
}

// Event listener to update teacher options when the branch is changed
document.getElementById("branch").addEventListener("change", function () {
  updateTeacherOptions();
});

//Form Validation and Check

function validateAndProceed() {
  var fullName = document.getElementById("fullName").value;
  var registrationNumber = document.getElementById("registrationNumber").value;
  var semester = parseInt(document.getElementById("semester").value);
  var branch = document.getElementById("branch").value;
  var branchFaculty = document.getElementById("branchFaculty").value;

  if (!fullName || !registrationNumber || !semester || !branch || !branchFaculty) {
    alert("Please fill all the fields!");
    return;
  }



firebase.firestore()
    .collection("students")
    .add({
      fullName: fullName,
      registrationNumber: registrationNumber,
      semester: semester,
      branch: branch,
      branchFaculty: branchFaculty
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      // Redirect to the questions.html page after data is saved
      window.location.href = "questions.html";
    });
  }