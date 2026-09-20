import { useState } from "react";

function EventCard(props) {

    const [showDetails, setShowDetails] = useState(false);

    function handleDetails() {
        setShowDetails(!showDetails);
    }

    return (
        <div className="event-card">

            <h2>{props.name}</h2>

            <p>{props.date}</p>

            <p>{props.description}</p>

            <button onClick={handleDetails}>
                {showDetails ? "Hide Details" : "View Details"}
            </button>

            {showDetails && (
                <p>
                    Registration is open for this event.
                </p>
            )}

        </div>
    );
}

export default EventCard;