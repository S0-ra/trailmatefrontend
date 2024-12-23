import HeaderCommon from "../components/common/HeaderCommon";
import NewsletterBar from "./../components/common/NewsletterBar";
import Footer from "./../components/common/Footer";
import { ProductCatalog } from "./../components/product/ProductCatalog";

const ProductListPage = function () {
  return (
    <>
      <HeaderCommon />
      <ProductCatalog />
      <NewsletterBar />
      <Footer />
    </>
  );
};

export default ProductListPage;
