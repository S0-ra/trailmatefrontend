import PropTypes from "prop-types";

const CartSummary = function ({ total }) {
  return (
    <div className="w-1/3">
      <button className="w-full border text-md border-red-400 text-red-400 py-3 rounded-md mb-4 flex items-center justify-between px-4">
        <span>Have a coupon code?</span>
        <span>›</span>
      </button>

      <div className="p-5 border border-red-400 rounded-md">
        <h3 className="font-medium mb-3">Summary</h3>
        <div className="flex justify-between mb-2">
          <span className="text-sm">Total</span>
          <span className="text-red-400 font-semibold">${total}</span>
        </div>
        <button className="w-full bg-red-400 text-white py-3 rounded-md mt-2">
          Checkout
        </button>
        <button className="w-full text-sm py-3 rounded-md mt-1 text-red-400">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

CartSummary.propTypes = {
  total: PropTypes.number.isRequired,
};

export default CartSummary;
