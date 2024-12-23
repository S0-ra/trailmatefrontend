import PropTypes from "prop-types";

const CartItem = ({ item, updateQuantity, removeItem, availableStock }) => {
  const handleIncrease = () => {
    if (item.quantity < availableStock) {
      updateQuantity(item.id, 1);
    } else {
      alert(`Sorry, only ${availableStock} items are available in stock.`);
    }
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, -1);
    }
  };

  return (
    <div className="flex items-center justify-between border-b border-red-300 pb-4">
      <div className="flex items-center space-x-6">
        <input type="checkbox" className="form-checkbox text-red-400 w-5 h-5" />
        <div className="w-20 h-20 bg-gray-300"></div>
        <div>
          <h2 className="text-lg font-medium">{item.name}</h2>
          <p className="text-red-400 font-semibold">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center"
          onClick={handleDecrease}
        >
          -
        </button>
        <span className="text-gray-700">{item.quantity}</span>
        <button
          className="w-8 h-8 bg-red-400 text-white rounded-md flex items-center justify-center"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <button
        className="text-red-400 font-semibold text-xl"
        onClick={() => removeItem(item.id)}
      >
        ×
      </button>
    </div>
  );
};

// Prop validations
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  availableStock: PropTypes.number.isRequired,
};

export default CartItem;
