import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const images = [
  "https://www.shutterstock.com/image-vector/india-national-day-banner-flag-260nw-2333987757.jpg",
  "https://m.media-amazon.com/images/I/71OypP1fQtL._AC_UF1000,1000_QL80_.jpg",
  "https://trendsresearch.org/wp-content/uploads/2024/08/India-Elections-scaled.jpg",
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentImageIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="home">
      {/* Main Content */}
      {/* <div className="home-content">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to excellence starts here. Discover, connect, and achieve!</p>
        <button className="cta-button">Learn More</button>
      </div> */}

      {/* Banner Section with Slideshow */}
      <div className="banner">
        {/* Previous Button */}
        <button className="slider-btn prev-btn" onClick={prevImage}>
          &lt;
        </button>

        {/* Banner Images */}
        <div
          className="banner-image"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>

        {/* Next Button */}
        <button className="slider-btn next-btn" onClick={nextImage}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Home;
