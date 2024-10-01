import { gsap } from 'gsap';
import React, { useState, useEffect } from 'react';
import '../Home.css'; // We will style the showcase here
import img1 from '../assets/work1.png';
import img2 from '../assets/work2.png';
import img3 from '../assets/work3.png';
import img4 from '../assets/work4.png';
import img5 from '../assets/work5.png';


const images = [img1, img2, img3, img4, img5];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Manually navigate to the next or previous image
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    
    <div className="home-container">
     
      <h1>Our Past, Present, and Future</h1> 
      {/* Showcase Slider */}
      <div className="slider">
        <button className="prev-btn" onClick={goToPrevious}>&#8249;</button>
        
        <div className="image-container">
          <img
            src={images[currentIndex]}
            alt="Showcase"
            className="showcase-image"
          />
        </div>
        
        <button className="next-btn" onClick={goToNext}>&#8250;</button>
      </div>
       {/* Blurb Section */}
      <div className="blurb-section">
        <h2>Management. Motivation. Resource.</h2>
        <p className="blurb-text">
        The Talent Connect (TTC) is an Entertainment Service Hub that is known for its Talent Management. We represent a diverse pool of creative Talent across the entertainment industry. We provide career/mindset counseling, packaging, and create opportunities for continued growth for clients and the greater acting community. We are the #1 resource offering actors on all levels the motivation needed to work toward their greatest potential along their acting journey.

"TTC is an active member of the National Talent Manager’s Association (TMA) and the official Breakdown Services NY/LA.”

“Our Non-For-Profit organization, Talent ConnectED, focuses on mental health and provides resources through education and the arts.”

“Our online shop offers motivational apparel designed to help customers put their best foot forward at all times."
        </p>
      </div>
    </div>
  );
}

export default Home;
