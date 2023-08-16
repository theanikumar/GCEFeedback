// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {
	getFirestore,
	addDoc,
	collection,
	query,
	where,
	limit,
	doc,
	getDoc,
	getDocs,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBnEAGAFK0by299bJzy4l9dmyNi1iAAiBw",
	authDomain: "gcefeedback-850de.firebaseapp.com",
	projectId: "gcefeedback-850de",
	storageBucket: "gcefeedback-850de.appspot.com",
	messagingSenderId: "429791775924",
	appId: "1:429791775924:web:784dfe3c44864797f01be1",
	measurementId: "G-1BXCP6E4YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

// Getting users Collections
const users = collection(firestore, "users");

async function checkUserID(userID) {
	try {
		// note we cannot refer to this since this only uses ID
		// how would the database know it is from which collection
		// we instead use ID with `users` collection, create a
		// reference and then try to get document
		//	const userSnapshot = await getDoc(userID);
		const userRef = doc(firestore, "users", userID);
		const userSnapshot = await getDoc(userRef);

		if(userSnapshot.exists())
			return ({
				message: true,
				info: true,
			});
		return ({
			message: true,
			info: false,
		});
	} catch (error) {
		return ({
			message: false,
			error,
		})
	}
}

async function checkUser(user) {
	// return message `true` means data was fetched and either correct
	// credentials were provided or wrong.
	try {
		const userQuery = query(
			collection(firestore, "users"),
			where("email", "==", user.email),
			limit(1)
		);

		const userSnapshot = await getDocs(userQuery);

		if (!userSnapshot.empty) {
			const docSnapshot = userSnapshot.docs[0];
			const reqData = { ...docSnapshot.data(), id: docSnapshot.id };
			if (reqData.password == user.password)
				return ({
					message: true,
					info: true,
					id: reqData.id,
				});
			else
				return ({
					message: true,
					info: false,
				});
		} else {
			return ({
				message: false,
			});
		}
	} catch (error) {
		console.error("Error checking the user:", error);
		return ({
			message: false,
		})
	}
}

async function checkRegisteredUser(userEmail) {
	try {
		const userQuery = query(
			collection(firestore, "users"),
			where("email", "==", userEmail),
			limit(1)
		);

		const userSnapshot = await getDocs(userQuery);

		if (!userSnapshot.empty) {
			const docSnapshot = userSnapshot.docs[0];
			const reqData = { id: docSnapshot.id };
			return reqData;
		} else {
			return null;
		}
	} catch (error) {
		console.error("Error checking the user:", error);
		return null;
	}
}

async function addNewUser(userData) {
	let user = await checkRegisteredUser(userData.email);
	if(user)
		return ({
			message: true,
			info: false,
		});

	try {
		user = await addDoc(users, userData);
		return ({
			message: true,
			info: true,
		});
	} catch (error) {
		return ({
			messsage: false,
			error
		});
	}
}

export {
	checkUserID,
	checkUser,
	addNewUser,
};
