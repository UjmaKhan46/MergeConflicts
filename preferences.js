window.onload = () => {
    const data = JSON.parse(localStorage.getItem("preferences"));
    if (data) showData(data);
};

function savePreferences() {
    const field = document.getElementById("field").value;
    const interest = document.getElementById("interest").value;
    const goal = document.getElementById("goal").value;

    if (!field || !interest || !goal) {
        alert("Fill all fields");
        return;
    }

    const preferences = { field, interest, goal };
    localStorage.setItem("preferences", JSON.stringify(preferences));
    showData(preferences);
}

function showData(data) {
    document.getElementById("output").innerHTML = `
        <p><b>Field:</b> ${data.field}</p>
        <p><b>Interest:</b> ${data.interest}</p>
        <p><b>Goal:</b> ${data.goal}</p>
    `;
}
