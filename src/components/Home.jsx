import "./Home.css"
import Gallery from './Gallery';
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container">
      <section className="Hero-Section">
        <div className="hero-content">
          <h1 className="main-header">Think. <span className="mobile-break"> Build.</span>
            <span className="mobile-break"> Thrive.</span><br />
          </h1>
          <h1 className="main-header-together">Together at HASHTAG.</h1>
        </div>
      </section>

      <h1 className="other-Header">The HASHTAG Society</h1>
      <p className="body-text">Founded in the year 2019, HashTag aims to nurture knowledge, opportunities, experience and collaborations within students. With a vision rooted in enriching the student coding culture, Hashtag pulses with ideas, energy and moments that unite learners.
        Hashtag is not just a technical society, it&#39;s a platform that welcomes students across all levels of experience, fostering a culture of peer learning and inclusive growth. The society welcomes participants from all technical domains eager to build, learn and grow.
        The society has been actively organizing events, hackathons, and tech competitions felicitating its participants and the winners for their efforts and creativity. With every passing year, Hashtag continues to grow- inspiring creativity, building a community and shaping the future of student innovation..</p>

      <h1 className="other-Header">Our Relations with JIMS</h1>
      <p className="body-text">HASHTAG is the tech pulse of JIMS Greater Noida — not just a club, but a movement built into the core of the campus. Born in classrooms and raised in computer labs, HASHTAG was founded with the vision to turn ideas into innovation. With full support from JIMS — mentorship, resources, and the freedom to create — we’ve grown into a student-powered force of creativity and code. Every workshop, every hackathon, every project we lead is a reflection of JIMS’ trust in its students and belief in experiential learning. Together, we don’t just participate in tech — we shape it. JIMS provides the launchpad, HASHTAG brings the momentum. It’s a collaboration where passion meets purpose, and a campus becomes a community of creators. This is more than partnership — it’s a shared mission to lead the future of tech.</p>

      <h1 className="other-Header">Our Sponsors</h1>
      <div className="sponsors-section">
        <div className="sponsors-grid">
          <a href="https://azure.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/Microsoft Azure.png" alt="Microsoft Azure" />
            </div>
          </a>
          <a href="https://azdev.reskilll.com/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/AZD1.png" alt="AZD" />
            </div>
          </a>
          <a href="https://reskilll.com/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/Reskill.png" alt="Reskilll" />
            </div>
          </a>
          <a href="http://www.softmart.in/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/Softmart solutions_title sponser 1.png" alt="Softmart" />
            </div>
          </a>
          <a href="https://www.pw.live/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/Physics wallah.png" alt="Physics Wallah" />
            </div>
          </a>
          <a href="https://www.finlatics.com/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/Finlatics.png" alt="Finlatics" />
            </div>
          </a>
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/clickadiet.png" alt="Click a Diet" />
            </div>
          <a href="https://www.linkedin.com/company/zk-genesis" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/Genesis Logo Vertical.png" alt="Genesis" />
            </div>
          </a>
          <a href="https://interviewbuddy.net/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/interview buddy.png" alt="Interview Buddy" />
            </div>
          </a>

          <a href="https://linkedoutofficial.vercel.app/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/LinkedOut_Bg_removed.png" alt="LinkedOut" />
            </div>
          </a>

          <a href="https://julep.ai/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/julep.png" alt="Julep AI" />
            </div>
          </a>


          <a href="https://www.linkedin.com/company/eventsinfo/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/Events Info.png" alt="Events Info" />
            </div>
          </a>
          <a href="https://givemycertificate.com/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/Givemycert.png" alt="Give My Certificates" />
            </div>
          </a>

          <a href="https://www.linkedin.com/company/advertising-pointline/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/adv point line.png" alt="Advertising Point Line" />
            </div>
          </a>

          <a href="https://www.linkedin.com/company/meraj-s-creatives/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/meraj's creatives.png" alt="Meraj's Creatives" />
            </div>
          </a>

          <a href="https://www.linkedin.com/company/navras_jemtec/" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/NAVRAS LOGO (Original).png" alt="Navras Jemtec" />
            </div>
          </a>

          <a href="https://gen.xyz" target="_blank" rel="noopener noreferrer" className="sponsor-link">
            <div className="sponsor-logo">
              <img src="/Photos/Sponsors/xyz-logo-color.png" alt=".xyz Domain Registry" />
            </div>
          </a>
        </div>
      </div>

      <div className="gallery-header">
        <Gallery />
      </div>

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
            {/* Instagram Link */}
            <li className="icon-link">
              <a
                href="https://www.instagram.com/hashtag.jemtec/ "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <div className="icon-text">
                  <FaInstagram className="footer-icon" />
                  <span>Instagram</span>
                </div>
              </a>
            </li>

            {/* LinkedIn Link */}
            <li className="icon-link">
              <a
                href="https://www.linkedin.com/company/hashtag-jemtec-official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <div className="icon-text">
                  <FaLinkedin className="footer-icon" />
                  <span>LinkedIn</span>
                </div>
              </a>
            </li>

            {/* Twitter/X Link */}
            <li className="icon-link">
              <a
                href="https://x.com/Hashtag_Jemtec"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <div className="icon-text">
                  <FaTwitter className="footer-icon" />
                  <span>X (Twitter)</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Home;