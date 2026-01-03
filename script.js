let roadmapData = [];

function openTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.add("hidden"));
  const tab = document.getElementById(tabId);
  tab.classList.remove("hidden");
  tab.scrollIntoView({behavior: "smooth", block: "start"});
}

function login() {
  const username = document.getElementById("username").value;
  if (!username) return alert("Enter your name");

  localStorage.setItem("username", username);
  document.getElementById("welcomeText").innerText = `Welcome, ${username} 👋`;
  openTab("profileTab");
}

function generateRoadmap() {
  const field = document.getElementById("careerField").value.toLowerCase();
  if (!field) return alert("Enter career field");

  if (field.includes("data")) {
    roadmapData = ["Excel & SQL", "Python for Data Analysis", "Data Visualization", "Projects", "Job Preparation"];
  } else if (field.includes("front")) {
    roadmapData = ["HTML & CSS", "JavaScript", "Responsive Design", "React.js", "Portfolio"];
  } else if (field.includes("back")) {
    roadmapData = ["Backend Language", "Databases", "APIs", "Authentication", "Deployment"];
  } else if (field.includes("cyber")) {
    roadmapData = ["Networking", "Linux", "Security Basics", "Ethical Hacking", "Certifications"];
  } else {
    roadmapData = ["Fundamentals", "Tools", "Practice", "Portfolio", "Applications"];
  }

  displayRoadmap();
  openTab("roadmapTab");
}

function displayRoadmap() {
  const container = document.getElementById("roadmapList");
  container.innerHTML = "";

  roadmapData.forEach(step => {
    const div = document.createElement("div");
    div.className = "roadmap-step";
    div.innerHTML = `<input type="checkbox" onchange="updateProgress(this)"> ${step}`;
    container.appendChild(div);
  });

  updateProgress();
}

function updateProgress(checkbox = null) {
  if (checkbox) {
    if (checkbox.checked) checkbox.parentElement.classList.add("checked");
    else checkbox.parentElement.classList.remove("checked");
  }

  const total = document.querySelectorAll(".roadmap-step input").length;
  const checked = document.querySelectorAll(".roadmap-step input:checked").length;
  const percent = Math.round((checked / total) * 100) || 0;

  const progressFill = document.getElementById("progressFill");
  progressFill.style.width = percent + "%";
  progressFill.innerText = percent + "% Completed";
}
