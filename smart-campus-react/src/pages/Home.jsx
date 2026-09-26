import PageHeader from "../components/PageHeader";
import InfoCard from "../components/InfoCard";
import StatCard from "../components/StatCard";

function Home() {
  return (
    <div className="page">

      <PageHeader
        title="Welcome to Smart Campus OS"
        description="A student-friendly platform for campus events, registrations and information."
      />

      <div className="info-grid">

        <InfoCard
          title="Campus Events"
          description="Discover workshops, hackathons, cultural events and more."
        />

        <InfoCard
          title="Student Registration"
          description="Register for campus activities quickly and easily."
        />

        <InfoCard
          title="Campus Information"
          description="Find useful information about your college and student activities."
        />

      </div>

      <h2 className="stats-title">Campus at a Glance</h2>

      <div className="stats-grid">

        <StatCard
          number="120"
          label="Events"
        />

        <StatCard
          number="45"
          label="Clubs"
        />

        <StatCard
          number="850"
          label="Students"
        />

      </div>

      <button>Explore Campus</button>

    </div>
  );
}

export default Home;