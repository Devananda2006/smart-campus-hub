const button = document.getElementById("exploreBtn");

button.addEventListener("click", function () {
    alert("Welcome to Smart Campus Hub!");
});


const form = document.querySelector("form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const reason = document.getElementById("reason").value;


    if (
        name === "" ||
        email === "" ||
        department === "" ||
        year === "" ||
        reason === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }


    alert(`Registration successful!

Welcome, ${name}.

You registered for Tech Fest.`);


    form.reset();

});