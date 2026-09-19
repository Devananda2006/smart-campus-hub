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
const eventNames = [
    "Tech Fest",
    "Hackathon",
    "Cultural Fest",
    "Sports Day"
];
console.log(eventNames);
console.log(eventNames[0]);
console.log(eventNames[1]);
console.log(eventNames[2]);
console.log(eventNames[3]);
eventNames.pop();
console.log(eventNames);
eventNames.forEach(function(event) {
    console.log(event);
});
const event = {
    name: "Tech Fest",
    date: "March 15, 2026",
    description: "A festival celebrating technology and innovation."
};
console.log(event);
console.log(event.name);
console.log(event.date);
console.log(event.description);
const events = [
    {
        name: "Tech Fest",
        date: "March 15, 2026",
        description: "A festival celebrating technology and innovation."
    },
    {
        name: "Hackathon",
        date: "April 20, 2026",
        description: "A 24-hour hackathon for students."
    },
    {
        name: "Cultural Fest",
        date: "May 10, 2026",
        description: "A celebration of diverse cultures."
    }
];
console.log(events);
console.log(events[0].name);
console.log(events[1].description);
events.forEach(function(event) {
    console.log(event.name + " - " + event.date + " - " + event.description);
});
function showEvents() {
    events.forEach(function(event) {
        console.log(event.name + " - " + event.date);
    });
}
showEvents();
function showEvent(event) {
    console.log(event.name + " - " + event.date);
}
showEvent(events[0]);
showEvent(events[1]);
showEvent(events[2]);
events.forEach(function(event) {
    showEvent(event);
});
function getEventName(event) {
    return event.name;
}
const firstEvent = getEventName(events[0]);

console.log(firstEvent);function getEventNames() {

    events.forEach(function(event) {
        console.log(event.name);
    });

}
getEventNames();
const eventNamesList = events.map(function(event) {
    return event.name;
});

const eventDetails = events.map(function(event) {

    return event.name + " - " + event.date;

});

console.log(eventDetails);
const eventCards = events.map(function(event) {

    return event.name + " | " + event.date + " | " + event.description;

});

console.log(eventCards);
const dynamicEvents = document.getElementById("dynamicEvents");

events.forEach(function(event) {

    const eventElement = document.createElement("p");

    eventElement.textContent =
        event.name + " - " + event.date;

    dynamicEvents.appendChild(eventElement);

});