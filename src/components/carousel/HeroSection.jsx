export const HeroSection = function () {
  return (
    <>
      <div id="sync1" className="owl-carousel owl-theme">
        <div className="item">
          <div
            className="hero-section mx-5 p-5 lg:mx-10 lg:p-10"
            style="
            background-image: url('/images/1.jpg');
            background-size: cover;
            background-position: center;
          ">
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-md"
              style="font-family: montserrat">
              Better Gears for Better Experience
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-gray-600 max-w-md mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <button className="text-white text-xs sm:text-sm px-3 py-2 sm:px-4 font-light bg-red-400 rounded">
              Shop Now
            </button>
          </div>
        </div>
        <div className="item">
          <div
            className="hero-section mx-5 p-5 lg:mx-10 lg:p-10"
            style="
            background-image: url('/images/2.jpg');
            background-size: cover;
            background-position: center;
          ">
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-md"
              style="font-family: montserrat">
              Better Gears for Better Experience
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-gray-600 max-w-md mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
            <button className="text-white text-xs sm:text-sm px-3 py-2 sm:px-4 font-light bg-red-400 rounded">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
