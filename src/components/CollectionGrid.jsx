import PropTypes from "prop-types";
import runningShoe1 from "../assets/running_shoe1.jpg";
import runningShoe2 from "../assets/running_shoe2.jpg";

const CollectionCard = ({ collection }) => {
  return (
    <div className="mt-5 relative rounded-2xl p-8 flex justify-center items-center">
      <img
        src={collection.imageUrl}
        alt={collection.title}
        className="absolute inset-0 object-cover w-full h-full rounded-3xl opacity-90"
      />
      <div className="bg-white max-w-xs p-4 text-center rounded-md shadow-md relative z-10">
        <h3 className="text-xl font-bold">{collection.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{collection.description}</p>
      </div>
    </div>
  );
};

CollectionCard.propTypes = {
  collection: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

const CollectionGrid = () => {
  const collections = [
    {
      title: "Trail Running Shoes",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      imageUrl: runningShoe1,
    },
    {
      title: "Mountain Biking Gear",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      imageUrl: runningShoe2,
    },
  ];

  return (
    <>
      <div className="container mt-16 mx-auto text-center">
        <h1 className="sub-headings">Our Collections</h1>
        <p className="max-w-xs my-3 text-xs mx-auto text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className="collection-card mx-5 mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 h-96">
        {collections.map((collection, index) => (
          <CollectionCard key={index} collection={collection} />
        ))}
      </div>
    </>
  );
};

export default CollectionGrid;
