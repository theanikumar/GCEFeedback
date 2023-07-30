// Define the subjects data array with subjects for each semester and branch
const subjectsData = {
  "1": {
    "Civil Engineering": ["Subject 1A", "Subject 2A", "Subject 3A"],
    "Computer Science and Engineering": ["Subject 1B", "Subject 2B", "Subject 3B"],
    "Electrical Engineering": ["Subject 1C", "Subject 2C", "Subject 3C" ],
    "Mechanical Engineering": ["Subject ME1_1", "Subject ME1_2", "Suject ME 1_3", "Subject ME 1_4"],
    "Metallurgical & Materials Engineering": ["Subject MME1", "Subject MME2", "Subject MME3"],
    "Mineral Engineering": ["Subject ME1", "Subject ME2", "Subject ME3"],
    "Mining Engineering": ["Subject Min 1", "Subject Min 2", "Ssubject Min 3"]
  },

  "2": {
    "Civil Engineering": ["Subject 1A", "Subject 2A", "Subject 3A"],
    "Computer Science and Engineering": ["Subject 1B", "Subject 2B", "Subject 3B"],
    "Electrical Engineering": ["Subject 1C", "Subject 2C", "Subject 3C" ],
    "Mechanical Engineering": ["Subject ME1_1", "Subject ME1_2", "Suject ME 1_3", "Subject ME 1_4"],
    "Metallurgical & Materials Engineering": ["Subject MME1", "Subject MME2", "Subject MME3"],
    "Mineral Engineering": ["Subject ME1", "Subject ME2", "Subject ME3"],
    "Mining Engineering": ["Subject Min 1", "Subject Min 2", "Ssubject Min 3"]
  },

  "3": {
    "Civil Engineering": ["Subject 1A", "Subject 2A", "Subject 3A"],
    "Computer Science and Engineering": ["Subject 1B", "Subject 2B", "Subject 3B"],
    "Electrical Engineering": ["Subject 1C", "Subject 2C", "Subject 3C" ],
    "Mechanical Engineering": ["Subject ME1_1", "Subject ME1_2", "Suject ME 1_3", "Subject ME 1_4"],
    "Metallurgical & Materials Engineering": ["Subject MME1", "Subject MME2", "Subject MME3"],
    "Mineral Engineering": ["Subject ME1", "Subject ME2", "Subject ME3"],
    "Mining Engineering": ["Subject Min 1", "Subject Min 2", "Ssubject Min 3"]
  },

  "4": {
    "Civil Engineering": ["Subject 1A", "Subject 2A", "Subject 3A"],
    "Computer Science and Engineering": ["Computer Organisation & Architecture", "Design & Analysis of Algorithm", "Data Communication", "Discrete Mathematics", "Engineering Economics", "Analog Electronics Circuit", "Python Programming Lab", "Seminar/Group Decussion"],
    "Electrical Engineering": ["Subject 1C", "Subject 2C", "Subject 3C" ],
    "Mechanical Engineering": ["Subject ME1_1", "Subject ME1_2", "Suject ME 1_3", "Subject ME 1_4"],
    "Metallurgical & Materials Engineering": ["Subject MME1", "Subject MME2", "Subject MME3"],
    "Mineral Engineering": ["Subject ME1", "Subject ME2", "Subject ME3"],
    "Mining Engineering": ["Subject Min 1", "Subject Min 2", "Ssubject Min 3"]
  },

  "5": {
    "Civil Engineering": ["Subject 1A", "Subject 2A", "Subject 3A"],
    "Computer Science and Engineering": ["Subject 1B", "Subject 2B", "Subject 3B"],
    "Electrical Engineering": ["Subject 1C", "Subject 2C", "Subject 3C" ],
    "Mechanical Engineering": ["Subject ME1_1", "Subject ME1_2", "Suject ME 1_3", "Subject ME 1_4"],
    "Metallurgical & Materials Engineering": ["Subject MME1", "Subject MME2", "Subject MME3"],
    "Mineral Engineering": ["Subject ME1", "Subject ME2", "Subject ME3"],
    "Mining Engineering": ["Subject Min 1", "Subject Min 2", "Ssubject Min 3"]
  },

  "6": {
    "Civil Engineering": ["Subject 1A", "Subject 2A", "Subject 3A"],
    "Computer Science and Engineering": ["Software Engineering", "Compiler Design", "Wireless Sesor Network", "Analog and Digital Communication", "Optimization in Engineering", "Future Ready Contributor Develop Model Lab"],
    "Electrical Engineering": ["Subject 1C", "Subject 2C", "Subject 3C" ],
    "Mechanical Engineering": ["Subject ME1_1", "Subject ME1_2", "Suject ME 1_3", "Subject ME 1_4"],
    "Metallurgical & Materials Engineering": ["Subject MME1", "Subject MME2", "Subject MME3"],
    "Mineral Engineering": ["Subject ME1", "Subject ME2", "Subject ME3"],
    "Mining Engineering": ["Subject Min 1", "Subject Min 2", "Ssubject Min 3"]
  },

  "7": {
    "Civil Engineering": ["Subject 1A", "Subject 2A", "Subject 3A"],
    "Computer Science and Engineering": ["Subject 1B", "Subject 2B", "Subject 3B"],
    "Electrical Engineering": ["Subject 1C", "Subject 2C", "Subject 3C" ],
    "Mechanical Engineering": ["Subject ME1_1", "Subject ME1_2", "Suject ME 1_3", "Subject ME 1_4"],
    "Metallurgical & Materials Engineering": ["Subject MME1", "Subject MME2", "Subject MME3"],
    "Mineral Engineering": ["Subject ME1", "Subject ME2", "Subject ME3"],
    "Mining Engineering": ["Subject Min 1", "Subject Min 2", "Ssubject Min 3"]
  },

  "8": {
    "Civil Engineering": ["Subject 1A", "Subject 2A", "Subject 3A"],
    "Computer Science and Engineering": ["Subject 1B", "Subject 2B", "Subject 3B"],
    "Electrical Engineering": ["Subject 1C", "Subject 2C", "Subject 3C" ],
    "Mechanical Engineering": ["Subject ME1_1", "Subject ME1_2", "Suject ME 1_3", "Subject ME 1_4"],
    "Metallurgical & Materials Engineering": ["Subject MME1", "Subject MME2", "Subject MME3"],
    "Mineral Engineering": ["Subject ME1", "Subject ME2", "Subject ME3"],
    "Mining Engineering": ["Subject Min 1", "Subject Min 2", "Ssubject Min 3"]
  },
  // Add more data for other semesters and branches as needed
};

// Define the teachers data array with teachers for each subject
const teachersData = {

  //subjects & Fecultty list for 4th semester CSE
  "Computer Organisation & Architecture": ["SANJIT KUMAR BARIK"],
  "Design & Analysis of Algorithm": ["SASMITA PANI"], 
  "Data Communication": ["AMIYA BHUSAN BAGDAJAB"], 
  "Discrete Mathematics": ["SEPHALI MOHANTY"], 
  "Engineering Economics": ["SAGAR KUNDU"], 
  "Analog Electronics Circuit": ["MADHUMITA PAL"], 
  "Python Programming Lab": ["MUKESH BATHRE", "SOUMYA RANJAN MOHAPTRA"], 
  "Seminar/Group Decussion": ["LIZA RANI BEHERA"],
  

  //Subjexts & Feculty list fort 6th semester CSE
  "Software Engineering": ["AMIYA BHUSAN BAGADAJAB"],
  "Compiler Design": ["DEVRAJ PANDA"],
  "Wireless Sesor Network": ["MUKESH BATHRE"],
  "Analog and Digital Communication": ["DEBASISH MOHANTA"],
  "Optimization in Engineering": ["SEPHALI MOHANTY"],
  "Future Ready Contributor Develop Model Lab": ["OMKAR PATTNAIK"]
};

// Function to scroll to the form's top when the page loads
window.addEventListener("load", function() {
  document.getElementById("feedbackForm").scrollIntoView({ behavior: "smooth" });
});

// Function to add smooth scrolling to the form's next button
document.getElementById("submit").addEventListener("submit", function(event) {
  event.preventDefault();
  validateAndProceed();
});

// Function to populate the subject options based on the selected semester and branch
function populateSubjectOptions() {
  var semesterSelect = document.getElementById("semester");
  var branchSelect = document.getElementById("branch");
  var subjectSelect = document.getElementById("subject");

  var selectedSemester = semesterSelect.value;
  var selectedBranch = branchSelect.value;

  subjectSelect.innerHTML = '<option value="">Select Subject</option>'; // Clear existing options

  if (!selectedSemester || !selectedBranch) {
    return;
  }

  var subjects = subjectsData[selectedSemester][selectedBranch];

  if (!subjects) {
    console.log("No subjects found for the selected semester and branch.");
    return;
  }

  subjects.forEach((subject) => {
    var option = document.createElement("option");
    option.value = subject;
    option.text = subject;
    subjectSelect.appendChild(option);
  });
}

// Function to populate the teacher options based on the selected subject
function populateTeacherOptions() {
  var subjectSelect = document.getElementById("subject");
  var teacherSelect = document.getElementById("teacher");

  var selectedSubject = subjectSelect.value;

  teacherSelect.innerHTML = '<option value="">Select Teacher</option>'; // Clear existing options

  if (!selectedSubject) {
    return;
  }

  var teachers = teachersData[selectedSubject];

  if (!teachers) {
    console.log("No teachers found for the selected subject.");
    return;
  }

  teachers.forEach((teacher) => {
    var option = document.createElement("option");
    option.value = teacher;
    option.text = teacher;
    teacherSelect.appendChild(option);
  });
}

// Call the function to populate the subject options when the semester or branch is changed
document.getElementById("semester").addEventListener("change", populateSubjectOptions);
document.getElementById("branch").addEventListener("change", populateSubjectOptions);

// Call the function to populate the teacher options when the subject is changed
document.getElementById("subject").addEventListener("change", populateTeacherOptions);

// Function to validate the form and save data to Firebase
function validateAndProceed() {
  var fullName = document.getElementById("fullName").value;
  var registrationNumber = document.getElementById("registrationNumber").value;
  var semester = parseInt(document.getElementById("semester").value);
  var branch = document.getElementById("branch").value;
  var subject = document.getElementById("subject").value;
  var teacher = document.getElementById("teacher").value;

  if (!fullName || !registrationNumber || !semester || !branch || !subject || !teacher) {
    alert("Please fill all the fields!");
    return;
  }

  if (!feedbackObjIsValid(feedbackObj)) {
    alert("Please fill all the feedback questions!");
    return;
  }

   // Get the current date and time
   var currentDate = new Date();


  // Save data to Firebase or perform any other actions you need
  // Save data to Firebase or perform any other actions you need
  firebase
    .firestore()
    .collection("feedback")
    .add({
      fullName: fullName,
      registrationNumber: registrationNumber,
      semester: semester,
      branch: branch,
      subject: subject,
      teacher: teacher,
      date: currentDate, // Add the current date to the data
      feedback: feedbackObj, // Add the feedback ratings
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      // Redirect to the new HTML page after data is saved
      window.location.href = "new_page.html"; // Replace "new_page.html" with your desired page name
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}
// Function to check if the feedbackObj is valid and all questions have been answered
function feedbackObjIsValid(feedbackObj) {
  for (const key in feedbackObj) {
    if (feedbackObj[key] === "") {
      return false;
    }
  }
  return true;
}

import { checkUserID } from "./fireStore.js";
async function validateUser() {
  const res = JSON.parse(sessionStorage.getItem("GCEKFeedbackLoginID"));
  console.log(res)

  if(res == null) {
    alert("Login first!");
    window.location = "index.html";
    return;
  }
  const response = await checkUserID(res.id);
  console.log(response);

  if(!response.message) {
    console.log("Internal Server Error!");
    alert("Some problem occurred! Please try again later.");
    window.location = "index.html";
    return;
  }

  if(!response.info || res.expireTime < Date.now()) {
    alert("Login first!");
    window.location = "index.html";
    return;
  }
}

//validateUser();
console.log(await checkUserID('0WRLw7AQ0DC43HZb3ECe'));
