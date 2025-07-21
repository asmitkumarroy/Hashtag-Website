import React from "react";
import "./Events.css";
import csImage from "../assets/eventposters/cs.png";
import vctImage from "../assets/eventposters/vct.jpg";
import ideautsavImage from "../assets/eventposters/ideautsav.jpg";
import brandbrawlImage from "../assets/eventposters/brandbrawl.jpg";
import cryptichuntImage from "../assets/eventposters/cryptichunt.jpg";
import treasurehuntImage from "../assets/eventposters/treasurehunt.jpg";
import codetrekrelayImage from "../assets/eventposters/codetrekrelay.jpg";
import codetrekImage from "../assets/eventposters/codetrek.jpg";

const events = {
  upcoming: [
    {
      title: 'Coming Soon',
      description: 'Exciting events are on the horizon. Stay tuned!',
      image: csImage,
    },
  ],
  past: [
    {
      title: 'Hack Battle',
      description: "Hashtag successfully hosted VCT Hashtag, a high-energy Valorant Tournament, bringing competitive spirit to the forefront. The event highlighted teamwork, strategic thinking, and sportsmanship throughout. Top performers were awarded for their excellence. This tournament marks Hashtag’s commitment to promoting tech and e-sports culture on campus.",
      image: vctImage,
    },
    {
      title: 'IdeaUtsav',
      description: "IdeaUtsav was HashTag’s flagship ideation event where creativity met real-world tech challenges. Teams pitched smart, feasible solutions and competed with sharp ideas and strong collaboration. Top teams earned trophies, certificates, and well-deserved recognition — a true celebration of innovation and problem-solving!",
      image: ideautsavImage,
    },
    {
      title: 'Brand Brawl',
      description: 'Brand Brawl is a coding fest- a challenge to design websites with a unique and a captive style. The exciting part? Participants can choose any tech stack. Pick from the given themes and bring them to life with a touch of creativity and innovation',
      image: brandbrawlImage,
    },
    {
      title: 'Cryptic Hunt',
      description: "Cryptic Hunt isn't just a hunt- It's a mental battlefield. Will your team choose the red pill or the blue? Put your logic to the test and solve your way through the rounds - start online, crack the codes, and pave the way to the real-world treasure where every clue leads you to glory!",
      image: cryptichuntImage,
    },
    {
      title: 'Treasure Hunt',
      description: 'Treasure hunt was an event one of its kind, a mystery filled adventure full of suspense and twists all the way to the end. Every participant gave it their all and showed us their cleverness while solving the carefully curated puzzles and riddles created by the talents at HashTag. With twists and turns at every step, the participants showed they had what it takes to find the ultimate treasure.',
      image: treasurehuntImage,
    },
    {
      title: 'Relay Coding',
      description: "Hashtag conducted Codetrek'25 Where participants tackled a series of coding tasks under tight time constraints. The event tested not just technical knowledge but also critical thinking and time management. With every level, the competition grew more intense, pushing participants to think fast and code faster. CodeTrek reaffirmed Hashtag’s mission to foster innovation, analytical thinking, and a passion for problem-solving.",
      image: codetrekrelayImage,
    },
    {
      title: 'Codetrek',
      description: "CodeTrek Aug'24 lit up the coding scene as teams raced to solve real-time challenges with speed and precision. The event blended logic, pressure, and teamwork — pushing coders to bring their A-game. With intense problem-solving, sharp collaboration, and nonstop energy, CodeTrek wasn’t just a contest — it was a full-blown coding experience.",
      image: codetrekImage,
    },
  ],
};

const EventCard = ({ title, description, image, isPast }) => (
  <div className="event-card">
    <img
      src={image}
      alt={title}
      className="event-image"
    />
    <div className="event-details">
      <h3>{title}</h3>
      <p>{description}</p>
      {!isPast && <button className="register-btn">Register</button>}
    </div>
  </div>
);

const Events = () => {
  return (
    <div className="events-container">
      <h1 className="new-page-main-title">Our Events</h1>
      <p className="page-subtitle">A chronicle of our past triumphs and future challenges.</p>

      <h2 className="subtitle">Upcoming Events</h2>
      <div className="events-section">
        {events.upcoming.map((event, idx) => (
          <EventCard key={idx} {...event} isPast={false} />
        ))}
      </div>

      <h2 className="subtitle">Past Events</h2>
      <div className="events-section">
        {events.past.map((event, idx) => (
          <EventCard key={idx} {...event} isPast={true} />
        ))}
      </div>
    </div>
  );
};

export default Events;