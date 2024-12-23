import ReactOwlCarousel from "react-owl-carousel";
import ProductCard from "./ProductCard";

const topRatedProducts = [
  {
    id: 1,
    name: "Trekking Poles",
    price: 250,
    rating: 5.0,
    imageUrl:
      "https://i.pinimg.com/736x/f4/b5/af/f4b5af3da6f9e4b90bb11d0afcf0470d.jpg",
  },
  {
    id: 2,
    name: "Hiking Backpack",
    price: 1000,
    rating: 5.0,
    imageUrl:
      "https://i.pinimg.com/736x/d8/2d/b1/d82db192bfa37d3a0ca8594bf22f018f.jpg",
  },
  {
    id: 1,
    name: "Trekking Poles",
    price: 250,
    rating: 5.0,
    imageUrl:
      "https://i.pinimg.com/736x/f4/b5/af/f4b5af3da6f9e4b90bb11d0afcf0470d.jpg",
  },
  {
    id: 2,
    name: "Hiking Backpack",
    price: 1000,
    rating: 5.0,
    imageUrl:
      "https://i.pinimg.com/736x/d8/2d/b1/d82db192bfa37d3a0ca8594bf22f018f.jpg",
  },
];

const TopRatedSection = () => {
  return (
    <div className="top-rated-section max-w-7xl mx-auto mt-16 px-4 py-8 relative">
      <h2 className="text-4xl font-bold mb-10 sub-headings">
        Top Rated Product
      </h2>
      <ReactOwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        responsive={{
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        }}>
        {topRatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ReactOwlCarousel>
    </div>
  );
};

export default TopRatedSection;
