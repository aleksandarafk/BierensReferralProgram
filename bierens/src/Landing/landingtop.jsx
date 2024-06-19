import React from "react"; // Import the React library
import "./landingtop.css"; // Import the CSS file for styling
import introimage from "./image/LandingPage-image.png"; // Import the image

// Define the Landingtop functional component
function Landingtop() {
  // Function for smooth scroll
  const scrollToSection = () => {
    const section = document.getElementById('section2_container'); // Find the section element with that ID
    section.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to section
  };


  return (
    <>
      {/* Main container for the top landing section */}
      <div className="Top-Landing">
        
        {/* Container for the text on the left side */}
        <div className="Top-Landing-text">
          <h1>
            Grow your <span className="network">network. </span> <br /> Earn better <span className="network">rewards. </span>
          </h1>
          <p>
            Grow your network with Bierens, access exclusive events, earn unique rewards for each referral through our referral program. Become a Bierens Associate today.
          </p>
          <br />
          {/* Button to trigger the scroll to the next section */}
          <button className="button-calltoaction" onClick={scrollToSection}>Read more</button>
        </div>
        
        {/* Container for the image on the right side */}
        <div>
          <img className="RightImgTop" src={introimage} alt="img" />
        </div>
        
      </div>
    </>
  );
}

export default Landingtop; // Export the component for use in other parts of the app
