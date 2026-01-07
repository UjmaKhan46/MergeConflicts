let roadmapData = [];

function openTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

function login() {
  const username = document.getElementById("username").value;
  if (!username) return alert("Enter your name");

  document.getElementById("welcomeText").innerText = `Welcome, ${username} 👋`;
  openTab("profileTab");
}

function generateRoadmap() {
  const field = document.getElementById("careerField").value.toLowerCase();
  if (!field) return alert("Enter career field");

  if (field.includes("data")) {
    roadmapData = [
      "Excel & SQL",
      "Python for Data Analysis",
      "Data Visualization",
      "Projects",
      "Job Preparation"
    ];
  } 
  else if (field.includes("front")) {
    roadmapData = [
      "HTML & CSS",
      "JavaScript",
      "Responsive Design",
      "React.js",
      "Portfolio"
    ];
  } 
  else if (field.includes("back")) {
    roadmapData = [
      "Backend Language",
      "Databases",
      "APIs",
      "Authentication",
      "Deployment"
    ];
  } 
  else if (field.includes("cyber")) {
    roadmapData = [
      "Networking",
      "Linux",
      "Security Basics",
      "Ethical Hacking",
      "Certifications"
    ];
  } 
  else {
    roadmapData = [
      "Fundamentals",
      "Tools",
      "Practice",
      "Portfolio",
      "Applications"
    ];
  }

  displayRoadmap();
  generateResources(field);
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
    checkbox.parentElement.classList.toggle("checked", checkbox.checked);
  }

  const total = document.querySelectorAll(".roadmap-step input").length;
  const checked = document.querySelectorAll(".roadmap-step input:checked").length;
  const percent = Math.round((checked / total) * 100) || 0;

  const progressFill = document.getElementById("progressFill");
  progressFill.style.width = percent + "%";
  progressFill.innerText = percent + "% Completed";
}

function generateResources(field) {
  let resources = [];

  if (field.includes("data")) {
    resources = [
      "Excel for Data Analysis – Microsoft Learn",
      "SQL – W3Schools",
      "Python for Data Analysis – Kaggle",
      "Data Visualization – Tableau",
      "Statistics – Khan Academy"
    ];
  } 
  else if (field.includes("front")) {
    resources = [
      "HTML & CSS – MDN",
      "JavaScript – freeCodeCamp",
      "React – Official Docs",
      "Frontend Mentor – Projects"
    ];
  } 
  else if (field.includes("back")) {
    resources = [
      "Backend Languages – Java / Python",
      "Databases – MySQL / MongoDB",
      "REST APIs",
      "Authentication",
      "Deployment"
    ];
  } 
  else if (field.includes("cyber")) {
    resources = [
      "Networking Basics",
      "Linux Fundamentals",
      "TryHackMe",
      "Ethical Hacking",
      "Security Certifications"
    ];
  } 
  else {
    resources = ["No resources available"];
  }

  const box = document.getElementById("resourceBox");
  box.innerHTML = "";

  resources.forEach(r => {
    const div = document.createElement("div");
    div.className = "resource-item";
    div.innerText = r;
    box.appendChild(div);
  });
}


