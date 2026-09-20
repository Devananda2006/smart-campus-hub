import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import EventCard from "./components/EventCard";

function App() {

    const [loading, setLoading] = useState(false);

    const events = [
        {
            name: "Tech Fest 2026",
            date: "March 15, 2026",
            description: "A campus-wide technology festival."
        },
        {
            name: "24-Hour Hackathon",
            date: "April 20, 2026",
            description: "Build a solution to a real-world problem."
        },
        {
            name: "AI Workshop",
            date: "June 5, 2026",
            description: "Learn the fundamentals of artificial intelligence."
        }
    ];

    function handleLoad() {

        setLoading(true);

        setTimeout(function() {
            setLoading(false);
        }, 2000);
    }

    return (
        <div>

            <Header />

            <main>

                <h2>Upcoming Events</h2>

                <button onClick={handleLoad}>
                    {loading ? "Loading..." : "Load Campus Events"}
                </button>

                {events.map(function(event) {

                    return (
                        <EventCard
                            key={event.name}
                            name={event.name}
                            date={event.date}
                            description={event.description}
                        />
                    );

                })}

            </main>

        </div>
    );
}

export default App;