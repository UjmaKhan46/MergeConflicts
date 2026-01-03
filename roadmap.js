function generateRoadmap() {
    const field = document.getElementById("field").value.toLowerCase();
    let steps = [];

    if (field.includes("front")) {
        steps = [
            "HTML Basics",
            "CSS Styling",
            "JavaScript Basics",
            "Responsive Design",
            "React Basics",
            "Build Projects",
            "Apply for Internship"
        ];
    } 
    else if (field.includes("data")) {
        steps = [
            "Excel Basics",
            "SQL",
            "Python for Data",
            "Data Visualization",
            "Statistics",
            "Projects",
            "Apply for Job"
        ];
    }
    else if (field.includes("backend")) {
        steps = [
            "Programming Language",
            "Databases",
            "APIs",
            "Authentication",
            "Server Deployment",
            "Projects",
            "Job Applications"
        ];
    }
    else if (field.includes("cyber")) {
        steps = [
            "Networking Basics",
            "Linux",
            "Security Fundamentals",
            "Ethical Hacking",
            "Tools Practice",
            "Certifications",
            "Job Applications"
        ];
    }
    else {
        alert("Try: Frontend / Data Analyst / Backend / Cyber Security");
        return;
    }

    let html = "";
    steps.forEach((step, index) => {
        html += `
            <div class="step">
                <input type="checkbox" onchange="updateProgress()">
                ${step}
            </div>
        `;
    });

    document.getElementById("roadmapBox").innerHTML = html;
    updateProgress();
}

function updateProgress() {
    const checkboxes = document.querySelectorAll(".step input");
    let completed = 0;

    checkboxes.forEach(box => {
        if (box.checked) completed++;
    });

    const percent = checkboxes.length === 0 ? 0 : Math.round((completed / checkboxes.length) * 100);

    document.getElementById("progressFill").style.width = percent + "%";
    document.getElementById("progressText").innerText = `Progress: ${percent}%`;
}
