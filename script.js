// ========================================
// SMART CAMPUS OS - SCRIPT.JS
// ========================================


// ========================================
// 1. SELECT HTML ELEMENTS
// ========================================

const exploreBtn =
    document.getElementById("exploreBtn");

const eventMessage =
    document.getElementById("eventMessage");

const dynamicEvents =
    document.getElementById("dynamicEvents");

const searchInput =
    document.getElementById("searchInput");

const clearSearchBtn =
    document.getElementById("clearSearchBtn");

const sortDateBtn =
    document.getElementById("sortDateBtn");

const registrationForm =
    document.querySelector("form");

const registrationMessage =
    document.getElementById("registrationMessage");


// ========================================
// 2. EVENT DATA
// ========================================

const events = [

    {
        name: "Tech Fest",
        date: "March 15, 2026",
        description:
            "A festival celebrating technology and innovation."
    },

    {
        name: "Hackathon",
        date: "April 20, 2026",
        description:
            "A 24-hour hackathon for students."
    },

    {
        name: "Cultural Fest",
        date: "May 10, 2026",
        description:
            "A celebration of diverse cultures."
    }

];


// ========================================
// 3. EXPLORE BUTTON
// ========================================

exploreBtn.addEventListener("click", function () {

    alert(
        "Here are the latest events happening on your campus!"
    );

});


// ========================================
// 4. DISPLAY EVENTS FUNCTION
// ========================================

function displayEvents(eventList) {

    // Clear existing cards
    dynamicEvents.innerHTML = "";


    // Create a card for every event
    eventList.forEach(function (event) {

        // Create card
        const card =
            document.createElement("div");

        card.classList.add("event-card");


        // Create title
        const title =
            document.createElement("h3");

        title.textContent =
            event.name;


        // Create date
        const date =
            document.createElement("p");

        date.textContent =
            event.date;


        // Create description
        const description =
            document.createElement("p");

        description.textContent =
            event.description;


        // Create button
        const button =
            document.createElement("button");

        button.textContent =
            "View Details";


        // View Details
        button.addEventListener(
            "click",
            function () {

                eventMessage.textContent =
                    event.name +
                    " - " +
                    event.date +
                    " - " +
                    event.description;

            }
        );


        // Add elements to card
        card.appendChild(title);

        card.appendChild(date);

        card.appendChild(description);

        card.appendChild(button);


        // Add card to webpage
        dynamicEvents.appendChild(card);

    });

}


// ========================================
// 5. DISPLAY ALL EVENTS
// ========================================

displayEvents(events);


// ========================================
// 6. SEARCH EVENTS
// ========================================

searchInput.addEventListener(
    "input",
    function () {

        const searchText =
            searchInput.value.toLowerCase();


        const filteredEvents =
            events.filter(function (event) {

                return (

                    event.name
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    event.date
                        .toLowerCase()
                        .includes(searchText)

                    ||

                    event.description
                        .toLowerCase()
                        .includes(searchText)

                );

            });


        // No events found
        if (filteredEvents.length === 0) {

            dynamicEvents.innerHTML =
                "<p>No events found. Try another search.</p>";

            return;
        }


        // Display matching events
        displayEvents(filteredEvents);

    }
);


// ========================================
// 7. CLEAR SEARCH
// ========================================

clearSearchBtn.addEventListener(
    "click",
    function () {

        // Empty search box
        searchInput.value = "";


        // Show all events
        displayEvents(events);


        // Clear event message
        eventMessage.textContent = "";

    }
);


// ========================================
// 8. SORT EVENTS BY DATE
// ========================================

sortDateBtn.addEventListener(
    "click",
    function () {

        // Create a copy of events
        const sortedEvents =
            [...events];


        // Sort by date
        sortedEvents.sort(
            function (a, b) {

                return (
                    new Date(a.date) -
                    new Date(b.date)
                );

            }
        );


        // Display sorted events
        displayEvents(sortedEvents);

    }
);


// ========================================
// 9. REGISTRATION FORM
// ========================================

registrationForm.addEventListener(
    "submit",
    function (event) {

        // Prevent page refresh
        event.preventDefault();


        // Get form values
        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const department =
            document.getElementById("department").value;

        const year =
            document.getElementById("year").value;

        const reason =
            document.getElementById("reason").value;

        const eventName =
            document.getElementById("event").value;


        // ========================================
        // CREATE REGISTRATION OBJECT
        // ========================================

        const registration = {

            name: name,

            email: email,

            department: department,

            year: year,

            reason: reason,

            event: eventName

        };


        // ========================================
        // SAVE TO LOCAL STORAGE
        // ========================================

        localStorage.setItem(
            "registration",
            JSON.stringify(registration)
        );


        // ========================================
        // SUCCESS MESSAGE
        // ========================================

        registrationMessage.textContent =
            "Registration successful!";


        // Clear form
        registrationForm.reset();

    }
);


// ========================================
// 10. CHECK SAVED REGISTRATION
// ========================================

const savedRegistration =
    localStorage.getItem("registration");


if (savedRegistration) {

    const registration =
        JSON.parse(savedRegistration);


    console.log(
        "Saved registration:",
        registration
    );

}