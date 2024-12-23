import PropTypes from 'prop-types';

export const ProductPromoCard = ({ title, oldPrice, newPrice, available, sold, imageUrl }) => {
  return (
    <div className="bg-white border border-gray-400 rounded-bl-xl rounded-br-xl relative flex flex-col w-full">
      <span className="absolute top-2 right-2 bg-red-400 text-white text-xs rounded-md px-3 py-2">20% OFF</span>
      {/* Image Placeholder */}
      <img src={imageUrl} alt={title} className="w-full h-80 object-cover" />
      <div className="text-center">
        <p className="text-lg mb-2 mt-4">{title}</p>
        <div className="flex justify-center space-x-4 mb-4">
          <p className="text-gray-400 line-through">${oldPrice}</p>
          <span className="text-red-500">- ${newPrice}</span>
        </div>
        <div className="relative w-full px-4 pb-4">
          <span className="absolute text-xs left-1 top-1/2 transform -translate-y-1/2 pl-4">Available: {available}</span>
          <span className="absolute text-xs right-1 top-1/2 transform -translate-y-1/2 pr-4">Sold: {sold}</span>
        </div>
        <div id="myProgress" className="text-center mb-4">
          <div id="myBar"></div>
        </div>
      </div>
    </div>
  );
};

ProductPromoCard.propTypes = {
    title: PropTypes.string.isRequired,        
    oldPrice: PropTypes.number.isRequired,     
    newPrice: PropTypes.number.isRequired,     
    available: PropTypes.number.isRequired,    
    sold: PropTypes.number.isRequired,         
    imageUrl: PropTypes.string.isRequired      
  };
  

const PromoCard = () => {
  return (
    <div className="bg-red-400 text-white p-6 rounded-lg flex flex-col justify-normal">
      <h3 className="text-2xl text-center">Up to 30% Off!</h3>
      <img className="my-4" src="https://via.placeholder.com/200" alt="Promo" />
      <p className="text-lg text-center mt-5 mb-2">Sale End In:</p>

      <div className="flex space-x-2 w-full border-gray-50 flex-wrap items-center justify-center" id="timer-left-2">
        <div className="flex flex-col items-center border border-gray-400 rounded-2xl px-4 py-3">
          <span className="text-red-500 text-2xl font-bold">1</span>
          <span className="text-gray-500 text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center border border-gray-400 rounded-2xl px-4 py-3">
          <span className="text-red-500 text-2xl font-bold">49</span>
          <span className="text-gray-500 text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center border border-gray-400 rounded-2xl px-4 py-3">
          <span className="text-red-500 text-2xl font-bold">56</span>
          <span className="text-gray-500 text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
