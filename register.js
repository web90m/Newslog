import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.register = function () {

  // Get values
  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Basic validation
  if (!fullName || !email || !password || !confirmPassword) {
    alert("All fields are required");
    return;
  }

  // Password length check
  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  // Confirm password check
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Create user
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      // Update display name
      return updateProfile(userCredential.user, {
        displayName: fullName
      });

    })
    .then(() => {
      alert("Registration successful 🎉");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message);
    });
};
