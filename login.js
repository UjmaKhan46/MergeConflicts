function login() {
  const username = document.getElementById("username").value.trim();
  if (!username) {
    alert("Please enter your name!");
    return;
  }

  // Save username in localStorage
  localStorage.setItem("username", username);
  alert(`Welcome, ${username}!`);
  
  // Optional: redirect to another page
  // window.location.href = "dashboard.html";
}
