import React from 'react';
import '../About.css';
import videoSrc from '../assets/aboutReel.mp4'; // Ensure your video is in the correct directory
import ceoImage from '../assets/ceo.jpg'; // Replace with the actual path to the CEO image

function About() {
  return (
    <div className="about-container">
      {/* Video Section */}
      <div className="video-section">
        <video className="about-video" controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* About Content Section */}
      <div className="about-content">
        <div className="about-text">
          <h2>HELPING ENTERTAINERS PERFORM OPTIMALLY THROUGH SELF AFFIRMATION</h2>
          <p>
            Ronald “Wink” Woodall founded The Talent Connect (TTC) to offer talent management and career consultation services. He has participated in the official procurement of several network television and feature film-related talent transactions.
          </p>
          <h2>The Talent Connect</h2>
          <p>
            In 2015, Wink launched TTC, a registered member of the national Talent Management Association. The Talent Connect is also a member of the talent representative Breakdown Services Ltd New York and Los Angeles which provides exclusive access to regional film, print, television, commercial, and theater casting listings.
          </p>
        </div>

        {/* CEO Image Section */}
        <div className="ceo-image">
          <img src={ceoImage} alt="CEO" />
        </div>
      </div>
    </div>
  );
}

export default About;
