import {
	addNewUser,
} from "./fireStore.js";

// Selects the form tag
const form = document.getElementsByTagName("form")[0];

// Selects the form
const slidePage = document.querySelector(".slide-page");

// First page buttons
const nextBtnFirst = document.querySelector(".firstNext");

// Second page buttons
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");

// Third page buttons
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");

// Fourth page buttons
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

// Progress Page status
const progressText = document.querySelectorAll(".step p");
const bullet = document.querySelectorAll(".step .bullet");
const progressCheck = document.querySelectorAll(".step .check");

// User Details input
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

let current = 1;

nextBtnFirst.addEventListener("click", function(event){
	event.preventDefault();
	slidePage.style.marginLeft = "-25%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current - 1].classList.add("active");
	current += 1;
});
nextBtnSec.addEventListener("click", function(event){
	event.preventDefault();
	slidePage.style.marginLeft = "-50%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current - 1].classList.add("active");
	current += 1;
});
nextBtnThird.addEventListener("click", function(event){
	event.preventDefault();
	slidePage.style.marginLeft = "-75%";
	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current - 1].classList.add("active");
	current += 1;
});
submitBtn.addEventListener("click", async function(e){
	e.preventDefault();

	submitBtn.disabled = true;

	if(!form.checkValidity()) {
		alert("Enter the required details!");
		return;
		submitBtn.disabled = false;
	} else if(password1.value != password2.value) {
		alert("Both passwords are not same! Rectify it.");
		submitBtn.disabled = false;
		return;
	}

	bullet[current - 1].classList.add("active");
	progressCheck[current - 1].classList.add("active");
	progressText[current - 1].classList.add("active");
	current += 1;

	const user = {
		firstName: firstName.value,
		lastName: lastName.value,
		email: email.value,
		phone: phone.value,
		gender: gender.value,
		password: password1.value,
	};

	function handleAddUser(result) {
		if (!result.info) {
			alert("Unable to create user!")
			console.log(result.error);
			return;
		}
		if (result.message) {
			alert("New user created!");
			window.location = "/login.html";
		} else
			alert("User already exists!");
	}

	await addNewUser(user)
		.then((result) => handleAddUser(result))
		.catch((error) => console.error(error));
/*
 *setTimeout(function(){
 *		alert("Your Form Successfully Signed up");
 *	},
 *	1000);
 *}
 */
});
prevBtnSec.addEventListener("click", function(event){
	event.preventDefault();
	slidePage.style.marginLeft = "0%";
	bullet[current - 2].classList.remove("active");
	progressCheck[current - 2].classList.remove("active");
	progressText[current - 2].classList.remove("active");
	current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
	event.preventDefault();
	slidePage.style.marginLeft = "-25%";
	bullet[current - 2].classList.remove("active");
	progressCheck[current - 2].classList.remove("active");
	progressText[current - 2].classList.remove("active");
	current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
	event.preventDefault();
	slidePage.style.marginLeft = "-50%";
	bullet[current - 2].classList.remove("active");
	progressCheck[current - 2].classList.remove("active");
	progressText[current - 2].classList.remove("active");
	current -= 1;
});
