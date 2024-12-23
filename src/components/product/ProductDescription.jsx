import { useEffect, useState } from "react";
import ProductImagesSlider from "./ProductImageSlider";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <FaStar
          key={`full-${index}`}
          style={{ color: "gold", marginRight: "4px" }}
        />
      ))}

      {/* Render half star if applicable */}
      {halfStar && (
        <FaStarHalfAlt style={{ color: "gold", marginRight: "4px" }} />
      )}

      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar
          key={`empty-${index}`}
          style={{ color: "gold", marginRight: "4px" }}
        />
      ))}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const ProductDetails = function ({ product }) {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);

  const handleIncrease = function () {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = function () {
    if (count === 1) {
      setCount(1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    axios(
      `http://localhost:8000/api/equipment/${product.equipmentid}/average-rating`
    ).then((res) => {
      setRating(res.data);
    });
  });



  return (
    <>
      <div className="flex flex-col gap-2 mt-10">
        <RatingStars rating={rating} />
        <h1 className="text-2xl mb-2">{product.name}</h1>
        <div className="flex items-center gap-2 mb-8">
          <h1 className="text-3xl font-semibold">{product.price}</h1>
          <p className="text-[#c4c4c4]">
            {product.avaibilitystatus.toUpperCase()}
          </p>
        </div>
        <hr className="mt-2" />
        <div>
          <h1 className="text-sm mt-2">Description</h1>
          <p className="text-sm text-[#c4c4c4] mt-2">{product.description}</p>
        </div>
        <div className="flex gap-6 items-center mt-8">
          <p className="text-[#c4c4c4] text-sm">Quantity</p>
          <button className="bg-[#c4c4c4] py-2 px-4 rounded-md" onClick={handleDecrease}>-</button>
          <p>{count}</p>
          <button className="text-white py-2 px-4 rounded-md bg-[#f46b5b]" onClick={handleIncrease}>
            +
          </button>
          <button className="text-white bg-[#f46b5b] p-2 rounded-md text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const ProductDescription = ({ product, images }) => {
  return (
    <div className="flex mt-20 p-10">
      <ProductImagesSlider images={images} />
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDescription;
