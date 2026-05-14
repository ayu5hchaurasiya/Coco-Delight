// signup.js

import { auth, db } from './firebaseConfig.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

export async function registerUser() {
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPass").value;

  // Basic validation
  if (!firstName || !lastName || !email || !password) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    // Create the user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save user details in Realtime Database
    const userData = {
      firstName,
      lastName,
      email,
      uid: user.uid,
      createdAt: new Date().toISOString()
    };

    await set(ref(db, 'users/' + user.uid), userData);

    alert("Registration successful!");
    console.log("User registered:");

    document.getElementById("registerForm").reset();
    window.location.href="coffee.html";

  } catch (error) {
    console.error("Signup failed:", error.message);
    alert("Signup failed: " + error.message);
  }
}
