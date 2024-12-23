import PropTypes from "prop-types";

const ProductCard = ({ product }) => (
  <div className="bg-white border border-gray-400 rounded-xl relative h-max flex flex-col">
    <img
      src={product.imageUrl}
      alt={product.name}
      className="w-full p-5 rounded-3xl object-cover"
    />
    <div className="text-center">
      <p className="text-md my-2">{product.name}</p>
      <p className="text-red-500 text-sm font-semibold mb-2">
        ${product.price}
      </p>
      <div className="flex justify-items-center text-gray-500">
        <p className="ml-10 mr-5">{product.rating}</p>
        <img
          src="/images/stars.png"
          alt="Star"
          className="object-contain object-left h-5"
        />
      </div>
      <button className="text-white text-xs my-3 px-3 py-2 font-light bg-red-400 rounded">
        Add to cart
      </button>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default ProductCard;
