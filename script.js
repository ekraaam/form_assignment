document.addEventListener("DOMContentLoaded", function () {
    const surveyForm = document.getElementById("survey-form");
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const summary = document.getElementById("summary");
    const closeButton = document.getElementById("close-popup");
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");

    surveyForm.addEventListener("submit", function (e) {
        e.preventDefault();
        summary.innerHTML = generateSummary();
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
        resetForm();
    });

    resetButton.addEventListener("click", function () {
        resetForm();
    });

    function generateSummary() {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const genderMale = document.getElementById("male").checked ? "Male" : "";
        const genderFemale = document.getElementById("female").checked ? "Female" : "";
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const summaryText = `
            First Name: ${firstName}<br>
            Last Name: ${lastName}<br>
            Date of Birth: ${dob}<br>
            Country: ${country}<br>
            Gender: ${genderMale} ${genderFemale}<br>
            Profession: ${profession}<br>
            Email: ${email}<br>
            Mobile Number: ${mobile}
        `;

        return summaryText;
    }

    function resetForm() {
        surveyForm.reset();
    }
});
