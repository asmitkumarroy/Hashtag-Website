import { Link } from "react-router-dom";
import "./Logo.css"

const Logo = () => {
    const handleJimsLogoClick = () => {
        window.open('https://jimsgn.org', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="logo">
            {/* HASHTAG Logo - Links to home page */}
            <Link to="/" className="hashtag-logo-link">
                <img 
                    className="Hashtag-Logo" 
                    src="HASHTAG LOGO (Dark Background) 2.png" 
                    alt="HASHTAG Logo - Go to Home" 
                    title="Go to Home"
                />
            </Link>
            
            {/* JIMS Logo - Links to jimsgn.org */}
            <button 
                className="jims-logo-button"
                onClick={handleJimsLogoClick}
                aria-label="Visit JIMS Greater Noida website"
                title="Visit JIMS Greater Noida"
            >
                <img 
                    className="Jims-logo" 
                    src="JIMS GN LOGO (Original) 2.png" 
                    alt="JIMS Greater Noida Logo - Visit Website" 
                />
            </button>
        </div>
    )
}

export default Logo