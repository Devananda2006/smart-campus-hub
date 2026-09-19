// ===============================
// Explore Button
// ===============================

const button = document.getElementById("exploreBtn");

button.addEventListener("click", function () {

    alert("Here are the latest events happening on your campus!");

    description.classList.toggle("highlight");

});


// ===============================
// Registration Form
// ===============================

const form = document.querySelector("form");

const registrationMessage =
    document.getElementById("registrationMessage");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const reason = document.getElementById("reason").value;
    const eventName = document.getElementById("event").value;


    if (
        name === "" ||
        email === "" ||
        department === "" ||
        year === "" ||
        reason === "" ||
        eventName === ""
    ) {

        alert("Please fill in all the fields.");

        return;
    }


    registrationMessage.textContent =
        `Registration successful! Welcome, ${name}. You registered for ${eventName}.`;


    form.reset();

});


// ===============================
// Title
// ===============================

const title = document.querySelector("h1");

title.addEventListener("click", function () {

    alert("You clicked the title!");

});

title.textContent = "Smart Campus OS";


// ===============================
// Description
// ===============================

const description = document.querySelector("main p");

description.textContent =
    "Your campus. Your events. Your community.";


// ===============================
// Event Buttons
// ===============================

const eventMessage =
    document.getElementById("eventMessage");

const eventButtons =
    document.querySelectorAll(".event button");


eventButtons.forEach(button => {

    button.addEventListener("click", function () {

        const event = button.parentElement;

        const eventName = event.querySelector("h3");

        const details = event.querySelectorAll("p");

        details[1].classList.toggle("highlight");

        eventMessage.textContent =
            "You selected " + eventName.textContent;

    });

});


// ===============================
// Check number of event buttons
// ===============================

console.log(eventButtons.length);