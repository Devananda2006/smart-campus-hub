// ========================================
// SMART CAMPUS OS - SCRIPT.JS
// DAY 7
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
        name: "Tech Fest 2026",
        date: "March 15, 2026",
        description:
            "A campus-wide technology festival featuring workshops, exhibitions and coding competitions."
    },

    {
        name: "24-Hour Hackathon",
        date: "April 20, 2026",
        description:
            "Build a creative solution to a real-world problem during this 24-hour coding challenge."
    },

    {
        name: "Cultural Fest",
        date: "May 10, 2026",
        description:
            "A celebration of music, dance, art and the diverse cultures of our campus."
    },

    {
        name: "AI Workshop",
        date: "June 5, 2026",
        description:
            "Learn the fundamentals of artificial intelligence and experiment with modern AI tools."
    },

    {
        name: "Sports Meet",
        date: "July 12, 2026",
        description:
            "An inter-department sports event featuring athletics, football, badminton and more."
    },

    {
        name: "Cyber Security Seminar",
        date: "August 18, 2026",
        description:
            "Discover common cyber threats, online safety practices and the basics of ethical hacking."
    }

];


// ========================================
// 3. EXPLORE BUTTON
// ========================================

exploreBtn.addEventListener(
    "click",
    function () {

        document
            .getElementById("events")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// ========================================
// 4. DISPLAY EVENTS FUNCTION
// ========================================

function displayEvents(eventList) {

    dynamicEvents.innerHTML = "";

    eventList.forEach(
        function (event) {

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


            // Button click
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


            // Add card to page
            dynamicEvents.appendChild(card);

        }
    );

}


// ========================================
// 5. LOADING STATE
// ========================================

dynamicEvents.innerHTML =
    "<p>Loading campus events...</p>";


setTimeout(
    function () {

        displayEvents(events);

    },
    800
);


// ========================================
// 6. SEARCH EVENTS
// ========================================

searchInput.addEventListener(
    "input",
    function () {

        const searchText =
            searchInput.value
                .toLowerCase()
                .trim();


        const filteredEvents =
            events.filter(
                function (event) {

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

                }
            );


        // No results
        if (filteredEvents.length === 0) {

            dynamicEvents.innerHTML =
                "<p>No events found. Try another search.</p>";

            eventMessage.textContent = "";

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

        searchInput.value = "";

        eventMessage.textContent = "";

        displayEvents(events);

    }
);


// ========================================
// 8. SORT EVENTS BY DATE
// ========================================

sortDateBtn.addEventListener(
    "click",
    function () {

        const sortedEvents =
            [...events];


        sortedEvents.sort(
            function (a, b) {

                return (
                    new Date(a.date) -
                    new Date(b.date)
                );

            }
        );


        displayEvents(sortedEvents);

    }
);


// ========================================
// 9. REGISTRATION FORM
// ========================================

registrationForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        // Get form values
        const name =
            document
                .getElementById("name")
                .value;

        const email =
            document
                .getElementById("email")
                .value;

        const department =
            document
                .getElementById("department")
                .value;

        const year =
            document
                .getElementById("year")
                .value;

        const reason =
            document
                .getElementById("reason")
                .value;

        const eventName =
            document
                .getElementById("event")
                .value;


        // Create registration object
        const registration = {

            name: name,

            email: email,

            department: department,

            year: year,

            reason: reason,

            event: eventName

        };


        // Save registration
        localStorage.setItem(
            "registration",
            JSON.stringify(registration)
        );


        // Show success message
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

    registrationMessage.innerHTML = `
        <h3>Your Registration</h3>

        <p>
            <strong>Name:</strong>
            ${registration.name}
        </p>

        <p>
            <strong>Email:</strong>
            ${registration.email}
        </p>

        <p>
            <strong>Department:</strong>
            ${registration.department}
        </p>

        <p>
            <strong>Year:</strong>
            S${registration.year}
        </p>

        <p>
            <strong>Event:</strong>
            ${registration.event}
        </p>
    `;

}