// login.js

import { auth, db } from './firebaseConfig.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

export async function loginWithUser() {
  const email = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    alert("Login successful!");
    console.log("Logged in:", user.email);

    const now = new Date().toISOString();
    await set(ref(db, 'logins/' + user.uid), {
      email: user.email,
      loginTime: now
    });

    window.location.href="coffee.html";
  } catch (error) {
    console.error("Login failed:", error.message);
    alert("Login failed: " + error.message);
  }
}
