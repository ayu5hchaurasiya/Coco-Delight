// Import necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhRwqEGh2BLvHbBZJqrJrWuCThSbGl8W4",
  authDomain: "coffee-e14ce.firebaseapp.com",
  projectId: "coffee-e14ce",
  storageBucket: "coffee-e14ce.firebasestorage.app",
  messagingSenderId: "406879001818",
  appId: "1:406879001818:web:e0e49073fcca4e1c44d9e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getDatabase(app);
