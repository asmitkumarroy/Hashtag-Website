import React from "react";
import "./Home.css"
import Gallery from './Gallery';
 const Home=()=>{
    return(
        <div className="container">
        <section className="Hero-Section">
            <div className="hero-content">
                <h1 className="main-header">Think. Build. Thrive</h1>
                <h1 className="main-header">Together at HASHTAG.</h1>
            </div>
        </section>
        
        <h1 className="other-Header">The HASHTAG Society</h1>
        <p className="body-text">Founded in the year 2019, HashTag aims to nurture knowledge, opportunities, experience and collaborations within students. With a vision rooted in enriching the student coding culture, Hashtag pulses with ideas, energy and moments that unite learners.
        Hashtag is not just a technical society, it's a platform that welcomes students across all levels of experience, fostering a culture of peer learning and inclusive growth. The society welcomes participants from all technical domains eager to build, learn and grow.
        The society has been actively organizing events, hackathons, and tech competitions felicitating its participants and the winners for their efforts and creativity. With every passing year, Hashtag continues to grow- inspiring creativity, building a community and shaping the future of student innovation..</p>

                <h1 className="other-Header">Our Relations with JIMS</h1>
        <p className="body-text">HASHTAG is the tech pulse of JIMS Greater Noida — not just a club, but a movement built into the core of the campus. Born in classrooms and raised in computer labs, HASHTAG was founded with the vision to turn ideas into innovation. With full support from JIMS — mentorship, resources, and the freedom to create — we’ve grown into a student-powered force of creativity and code. Every workshop, every hackathon, every project we lead is a reflection of JIMS’ trust in its students and belief in experiential learning. Together, we don’t just participate in tech — we shape it. JIMS provides the launchpad, HASHTAG brings the momentum. It’s a collaboration where passion meets purpose, and a campus becomes a community of creators. This is more than partnership — it’s a shared mission to lead the future of tech.</p>

        <Gallery />

        <div className="footer">
  <div className="footer-left">
    <h1 className="footer-header">About</h1>
    <p className="footer-text">
      HASHTAG is a student-led tech society at JIMS Greater Noida, building a
      culture of innovation, coding, and creative collaboration through events,
      workshops, and community-driven growth.
    </p>
  </div>

  <div className="footer-right">
    <h1 className="footer-header">Contact</h1>
    <ul>
      <li>Instagram</li>
      <li>LinkedIn</li>
      <li>X (Twitter)</li>
    </ul>
  </div>
</div>

        </div>
    )
 }

 export default Home