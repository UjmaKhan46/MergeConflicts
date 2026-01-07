function generateResources() {
    const field = document.getElementById("field").value.toLowerCase();
    let resources = [];

    if (field.includes("frontend")) {
        resources = [
            "HTML & CSS – MDN Web Docs",
            "JavaScript Basics – freeCodeCamp",
            "Responsive Design – CSS Tricks",
            "React Basics – Official React Docs",
            "Project Practice – Frontend Mentor"
        ];
    } 
    else if (field.includes("data analyst")) {
        resources = [
            "Excel for Data Analysis",
            "SQL – W3Schools",
            "Python for Data Science – Kaggle",
            "Data Visualization – Tableau Public",
            "Statistics – Khan Academy"
        ];
    }
    else if (field.includes("backend")) {
        resources = [
            "Programming Language (Java / Python)",
            "Databases – MySQL / MongoDB",
            "REST APIs",
            "Authentication & Authorization",
            "Backend Projects & Deployment"
        ];
    }
    else if (field.includes("cyber security")) {
        resources = [
            "Networking Basics",
            "Linux Fundamentals",
            "Cyber Security Fundamentals",
            "Ethical Hacking – TryHackMe",
            "Security Certifications Overview"
        ];
    }
    else {
        alert("Please enter: Frontend, Backend, Data Analyst, or Cyber Security");
        return;
    }

    let html = "";
    resources.forEach((item, index) => {
        html += `<div class="resource">📘 ${index + 1}. ${item}</div>`;
    });

    document.getElementById("resourceBox").innerHTML = html;
}
