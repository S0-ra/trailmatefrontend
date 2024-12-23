import SearchBar from "../components/common/SearchBar";
import ContactInfo from "../components/common/ContactInfo";
import NewsletterBar from "../components/common/NewsletterBar";
import Footer from "../components/common/Footer";
import CartBox from './../components/cart/CartBox';

const CartPage = function () {
  return (
    <>
      <ContactInfo />
      <SearchBar />
      <CartBox/>
      <NewsletterBar />
      <Footer />
    </>
  );
};

export default CartPage;
