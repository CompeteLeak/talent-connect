import React from 'react';
import '../Services.css'; // Import your CSS for this page
import videoSrc from '../assets/Strategy-Session.mp4'; // Make sure to replace with your actual video path

function Services() {
  return (
    <div className="services-container">
      {/* Button linking to another webpage */}
      <div className="button-container">
        <a href="https://calendly.com/ceo-391" target="_blank" rel="noopener noreferrer" className="services-button">
          Schedule Your Strategy Session Here
        </a>
      </div>

      {/* MP4 Video Display */}
      <div className="video-container">
        <video className="services-video" autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Services;
