import Footer from "../components/common/Footer";
import BrandBar from "../components/BrandBar";
import NewsletterBar from "../components/common/NewsletterBar";
import FlashSale from "../components/FlashSale";
import CollectionGrid from "../components/CollectionGrid";
import ProductDisplay from "../components/ProductDisplay";
import NewProductSale from "../components/NewProductSale";
// import TopRatedSection from "../components/TopProductSection";
import EquipmentCategory from "../components/category/CategoryBar";
import { HeaderHome } from "../components/common/HeaderHome";
import HeroSection from "../components/carousel/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeaderHome/>
      <HeroSection />
      <EquipmentCategory />
      <NewProductSale />
      <ProductDisplay />
      <CollectionGrid />
      <FlashSale />
      {/* <TopRatedSection /> */}
      <NewsletterBar />
      <BrandBar />
      <Footer />
    </>
  );
};

export default HomePage;
