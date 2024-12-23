import PropTypes from "prop-types";

const CategoryCard = function ({ title }) {
  return (
    <>
      <button className="bg-white border border-gray-300 p-4 rounded-2xl text-center">
        <p className="text-sm">{title}</p>
      </button>
    </>
  );
};

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CategoryCard;
