import knives from "../assets/knives.jpg";
import shoe from "../assets/shoe1.jpg";
import bag from "../assets/bag1.jpg";


// eslint-disable-next-line react/prop-types
const Timer = ({ hours, minutes, seconds }) => (
  <div className="flex space-x-4 mt-3 border-gray-500">
    <div className="flex flex-col items-center border border-gray-400 rounded-2xl px-2 py-3">
      <span className="text-red-500 text-xl font-bold">{hours}</span>
      <span className="text-gray-500 text-xs">Hours</span>
    </div>
    <div className="flex flex-col items-center border border-gray-400 rounded-2xl px-2 py-3">
      <span className="text-red-500 text-xl font-bold">{minutes}</span>
      <span className="text-gray-500 text-xs">Minutes</span>
    </div>
    <div className="flex flex-col items-center border border-gray-400 rounded-2xl px-2 py-3">
      <span className="text-red-500 text-xl font-bold">{seconds}</span>
      <span className="text-gray-500 text-xs">Seconds</span>
    </div>
  </div>
);

// eslint-disable-next-line react/prop-types
const ProductCard = ({ title, price, discountedPrice, imgSrc, timerId }) => (
  <div className="border border-gray-400 bg-white rounded-br-2xl rounded-tr-2xl flex-1 flex">
    <div className="w-1/3 mr-4">
      <img src={imgSrc} alt={`${title} Image`} className="object-cover h-full w-full" />
    </div>
    <div className="flex-1">
      <div className="bg-red-400 mt-4 text-white text-xs px-4 py-2 rounded-md inline-block mb-2">
        Limited Offer
      </div>
      <h2 className="text-gray-800 text-xl mb-2">{title}</h2>
      <div className="flex items-center space-x-4 mb-4">
        <p className="text-gray-400 line-through">Rs {price}</p>
        <span className="text-red-500">- Rs {discountedPrice}</span>
      </div>
      <Timer hours="1" minutes="31" seconds="20" id={timerId} />
    </div>
  </div>
);

const ProductsGrid = () => {
  return (
    <div className="flex mt-10 justify-between items-center mx-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-screen-xl">
        {/* Main Featured Product */}
        <div className="ml-5 bg-white rounded-3xl border border-gray-400 p-6 flex flex-col items-center">
          <h2 className="text-2xl my-3">Knives and Multi-tool</h2>
          <div className="flex items-center space-x-4 mb-4">
            <p className="text-gray-400 line-through">Rs 2999</p>
            <span className="text-red-500">- Rs 1999</span>
          </div>
          <img
            src={knives}
            alt="Knives and Multi-tool"
            className="w-80 h-60 mb-5 object-cover"
          />
          <Timer hours="1" minutes="31" seconds="20" id="timer-left" />
        </div>

        {/* Other Product Cards */}
        <div className="flex flex-col w-full md:pr-5 md:mr-5 space-y-6">
          <ProductCard
            title="Bags"
            price="2999"
            discountedPrice="1999"
            imgSrc={bag}
            timerId="timer-right-1"
          />
          <ProductCard
            title="Shoes"
            price="2999"
            discountedPrice="1999"
            imgSrc={shoe}
            timerId="timer-right-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
