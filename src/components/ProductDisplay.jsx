import PropTypes from "prop-types";

const Timer = ({ hours, minutes, seconds }) => (
  <div className="flex space-x-4 mt-3 border-gray-500">
    <div className="flex flex-col items-center border border-gray-400 rounded-2xl px-4 py-3">
      <span className="text-red-500 text-2xl font-bold">{hours}</span>
      <span className="text-gray-500 text-sm">Hours</span>
    </div>
    <div className="flex flex-col items-center border border-gray-400 rounded-2xl px-4 py-3">
      <span className="text-red-500 text-2xl font-bold">{minutes}</span>
      <span className="text-gray-500 text-sm">Minutes</span>
    </div>
    <div className="flex flex-col items-center border border-gray-400 rounded-2xl px-4 py-3">
      <span className="text-red-500 text-2xl font-bold">{seconds}</span>
      <span className="text-gray-500 text-sm">Seconds</span>
    </div>
  </div>
);

Timer.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

const Card = ({ title, originalPrice, discountedPrice, imgSrc, timerId }) => (
  <div className="border border-gray-400 bg-white rounded-br-2xl rounded-tr-2xl flex-1 flex">
    <div className="w-1/3 mr-4">
      <img
        src={imgSrc}
        alt="Product Image"
        className="object-cover h-full w-full"
      />
    </div>
    <div className="flex-1">
      <div className="bg-red-400 mt-4 text-white text-xs px-4 py-2 rounded-md inline-block mb-2">
        Limited Offer
      </div>
      <h2 className="text-gray-800 text-xl mb-2">{title}</h2>
      <div className="flex items-center space-x-4 mb-4">
        <p className="text-gray-400 line-through">${originalPrice}</p>
        <span className="text-red-500">- ${discountedPrice}</span>
      </div>
      <Timer hours={1} minutes={24} seconds={27} />
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  originalPrice: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  timerId: PropTypes.string.isRequired,
};

const ProductDisplay = () => (
  <>
    <div className="container mt-16 mx-auto text-center">
    <h1 className="sub-headings">Featured Products</h1>
    <p className="max-w-xs my-3 text-xs mx-auto text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor.
    </p>
  </div>
    <div className="flex mt-10 justify-between items-center mx-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-screen-xl">
        {/* Left Section */}
        <div className="ml-5 bg-white rounded-3xl border border-gray-400 p-6 flex flex-col items-center">
          <h2 className="text-2xl my-3">Knives and Multi-tool</h2>
          <div className="flex items-center space-x-4 mb-4">
            <p className="text-gray-400 line-through">$29.99</p>
            <span className="text-red-500">- $19.99</span>
          </div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Image"
            className="w-80 h-60 mb-5 object-cover"
          />
          <Timer hours={1} minutes={24} seconds={27} />
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full pr-5 mr-5 space-y-6">
          <Card
            title="Product Name"
            originalPrice={29.99}
            discountedPrice={19.99}
            imgSrc="https://via.placeholder.com/500x700"
            timerId="timer-right-1"
          />
          <Card
            title="Product Name"
            originalPrice={29.99}
            discountedPrice={19.99}
            imgSrc="https://via.placeholder.com/500x700"
            timerId="timer-right-2"
          />
        </div>
      </div>
    </div>
  </>
);

export default ProductDisplay;
