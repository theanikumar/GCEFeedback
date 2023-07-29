import {
	checkUser,
} from "./fireStore.js";

const form = document.getElementsByTagName("form")[0];

// buttons
const submitBtn = document.querySelector(".submit");

// User Details input
const email = document.getElementById("email");
const password = document.getElementById("password");

submitBtn.addEventListener("click", async function(e){
	e.preventDefault();

	submitBtn.disabled = true;

	if(!form.checkValidity()) {
		alert("Enter the required details!");
		return;
		submitBtn.disabled = false;
	}

	const user = {
		email: email.value,
		password: password.value,
	};

	function handleLogin(result) {
		/*
		 *email.value = "";
		 *password.value = "";
		 */

		if (!result.message) {
			alert("User not found!")
			submitBtn.disabled = false;
			return;
		}

		if(result.info) {
			alert("Login successful!");
			// sessionStorage.setItem("GCEKFeedbackLoginID", result.id);
			window.location = "/feedback.html";
		} else {
			alert("User Name or password incorrect!");
			submitBtn.disabled = false;
			return;
		}
	}
	await checkUser(user)
		.then((result) => handleLogin(result))
		.catch((error) => console.error(error));
});
