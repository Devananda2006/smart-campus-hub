function Events() {
  return (
    <div className="page">

      <h1>Campus Events</h1>

      <p>
        Discover upcoming events happening on campus.
      </p>

      <div className="event-list">

        <div className="event-item">
          <h2>Tech Fest 2026</h2>
          <p>March 15, 2026</p>
          <p>
            A campus-wide technology festival featuring
            workshops and coding competitions.
          </p>
        </div>

        <div className="event-item">
          <h2>24-Hour Hackathon</h2>
          <p>April 20, 2026</p>
          <p>
            Build a creative solution to a real-world
            problem during this coding challenge.
          </p>
        </div>

        <div className="event-item">
          <h2>Cultural Fest</h2>
          <p>May 10, 2026</p>
          <p>
            A celebration of music, dance, art and
            campus culture.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Events;