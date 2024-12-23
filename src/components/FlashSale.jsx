import PromoCard from "./PromoCard";
import ProductPromoCard from "./PromoCard";

const FlashSale = () => {
  return (
    <>
      <h2 className="sub-headings mt-10 mx-5 mb-7">Flash Sale</h2>
      <div className="grid grid-cols-1 mx-5 lg:grid-cols-4 gap-6">
        {/* Flash Sale Left Promo Card */}
        <PromoCard />

        {/* Flash Sale Right Product Cards */}
        <ProductPromoCard
          title="Hammocks"
          oldPrice={29.99}
          newPrice={19.99}
          available={10}
          sold={5}
          imageUrl="https://via.placeholder.com/600x400"
        />
        <ProductPromoCard
          title="Hammocks"
          oldPrice={29.99}
          newPrice={19.99}
          available={10}
          sold={5}
          imageUrl="https://via.placeholder.com/600x400"
        />
        <ProductPromoCard
          title="Hammocks"
          oldPrice={29.99}
          newPrice={19.99}
          available={10}
          sold={5}
          imageUrl="https://via.placeholder.com/600x400"
        />
      </div>
    </>
  );
};

export default FlashSale;
