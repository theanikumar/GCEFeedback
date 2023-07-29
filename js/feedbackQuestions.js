
const questions = [
	"Has the Teacher covered entire Syllabus as prescribed by University/ College/ Board?",
	"Has the Teacher covered relevant topics beyond syllabus?",
	"Effectiveness of Teacher in terms of:\n\t(i) Technical Content/course content\n\t(ii) Communication Skills\n\t(iii) Use of technical aids",
	"Pace on which contents were covered",
	"Motivation and inspiration for students to learn",
	"Motivation and inspiration for students’ skill\n\t(i) Practical demonstration\n\t(ii) Hands on training",
	"Clarity of expectations of students",
	"Feedback provided on students’ progress",
	"Willingness to offer help and advice to students",
];
const ratings = [
	"Very Poor",
	"Poor",
	"Good",
	"Very Good",
	"Excellent",
];

function createFeedbackObj(questionsLength) {
	const obj = {};

	for(let i = 1; i <= questionsLength; ++i) {
		obj[`q${i}`] = "";
	}
	return obj;
}
const feedbackObj = createFeedbackObj(questions.length);
// make global variables like this only when strictly necessary, can cause
// global variable conflicts
//
// here, without making it global, it is not possible to get all the updated
// values of the rating
window.feedbackObj = feedbackObj;

function addQuestions(id) {
	/* All the commented codes are for either information or for the optionsClass
	 * being used in string literal replaced by css class
	 */

	const questionsDiv = document.getElementById(id);

	// const optionsClass = "options";

	// infact, when `whiteSpace` style property is set to "pre-wrap", the tabs
	// and newlines in the string literal also become part of the output html
	// render when we use white spaces to format the code
	//
	// That's why you would see in the upcoming for loops to generate the radio
	// inputs for the feedback is cluttered and not organised to form clear
	// distinction of child elements and its clumsy.
	// But, we need it to render the questions correctly stored in array

	questionsDiv.style.whiteSpace = "pre-wrap";

	function createQuestions(questions) {
		let questionsHTML = "";
		for(const [index, question] of questions.entries()) {
			// questionsHTML = `<div class="question">Q${index + 1}. ${question}</div><div class="flex-row ${optionsClass}">`;
			questionsHTML +=
			`<div class="question">Q${index + 1}. ${question}</div><div class="flex-row options radio-group">`;
			for(const [ratingIndex, ratingValue] of ratings.entries()) {
				questionsHTML += 
					`<input type="radio" id="q${index}${ratingIndex}" name="q${index + 1}" value="${ratingIndex + 1}" required /><label for="q${index}${ratingIndex}">${ratingValue}</label>`;
			}
			questionsHTML += `</div>\n`;
		}
		return questionsHTML;
	}

	questionsDiv.innerHTML += createQuestions(questions);

	// document.querySelectorAll(`.${optionsClass}`).forEach((element) => {
	// (or)
	/*
	 *document.querySelectorAll("options").forEach((element) => {
	 *	element.style.justifyContent = "space-around";
	 *	// element.style.justifyContent = "space-evenly";
	 *	// element.style.justifyContent = "space-between";
	 *	element.style.maxWidth = "35rem";
	 *});
	 */

	// add event listener to every input radio so it updates user feedback object
	// with the rating 1-5
	function handleRadioClick(e) {
		// console.dir(e);
		feedbackObj[e.target.name] = e.target.value;
	}
	const radioInputs = document.querySelectorAll('input[type="radio"]');
	radioInputs.forEach((radio) => {
		radio.addEventListener('click', handleRadioClick);
	});
}

addQuestions("questions");
