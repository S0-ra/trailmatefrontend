import { useState, useEffect } from "react";
import backgroundImage1 from "../../assets/1.jpg";
import backgroundImage2 from "../../assets/2.jpg";

const slideImages = [backgroundImage1, backgroundImage2];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide automatically
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
  };

 ;

  return (
    <div className="w-full flex justify-center items-center py-8">
      <div className="relative w-[75%] overflow-hidden rounded-3xl shadow-lg h-[350px]">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
          {slideImages.map((image, index) => (
            <div
              key={index}
              className="w-full h-[400px] flex-shrink-0 relative"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-black">
                <h2 className="text-4xl font-semibold  leading-tight">
                  Better gears for better
                  <br />
                  experience
                </h2>
              </div>
            </div>
          ))}
        </div>

       

        {/* Dots for Pagination */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? "bg-black" : "bg-gray-400"
              }`}></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
