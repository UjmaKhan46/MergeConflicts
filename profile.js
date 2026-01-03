window.onload = function () {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
        displayProfile(savedProfile);
    }
};

function saveProfile() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const field = document.getElementById("field").value;

    if (name === "" || email === "" || field === "") {
        alert("Please fill all fields");
        return;
    }

    const profile = {
        name,
        email,
        field
    };

    localStorage.setItem("profile", JSON.stringify(profile));
    displayProfile(profile);
}

function displayProfile(profile) {
    document.getElementById("profileData").innerHTML = `
        <p><strong>Name:</strong> ${profile.name}</p>
        <p><strong>Email:</strong> ${profile.email}</p>
        <p><strong>Career Field:</strong> ${profile.field}</p>
    `;
}
