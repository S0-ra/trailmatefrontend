import PropTypes from "prop-types";

const Card = ({ title, price, imgSrc, isNew }) => (
  <div className="bg-white border border-gray-400 rounded-bl-xl rounded-br-xl relative h-96 flex flex-col">
    {isNew && (
      <span className="absolute top-2 right-2 bg-red-400 text-white text-xs font-bold rounded-full px-3 py-2">
        NEW
      </span>
    )}
    <img src={imgSrc} alt={title} className="w-full h-80 mb-4 object-cover" />
    <div className="text-center">
      <p className="text-sm my-2">{title}</p>
      <p className="text-red-500 text-sm font-semibold mb-4">${price}</p>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
};

const NewProductSale = () => (
  <>
    <div className="container mt-16 mx-auto text-center">
      <h1 className="sub-headings">New Arrivals</h1>
      <p className="max-w-xs text-xs my-3 mx-auto text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </p>
    </div>
    <div className="card flex justify-between items-center mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
        <Card
          title="Hammocks"
          price={299}
          imgSrc="https://via.placeholder.com/600x400"
          isNew={true}
        />
        <Card
          title="Headlights"
          price={299}
          imgSrc="https://via.placeholder.com/600x400"
          isNew={true}
        />
        <Card
          title="Helmets"
          price={299}
          imgSrc="https://via.placeholder.com/600x400"
          isNew={true}
        />
      </div>
    </div>
  </>
);

export default NewProductSale;
