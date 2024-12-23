import ContactInfo from "../components/common/ContactInfo";
import SearchBar from "../components/common/SearchBar";
import Footer from "../components/common/Footer";
import SellerForm from "../components/auth/SellerForm";

const BecomeSellerPage = function () {
  return (
    <>
      <ContactInfo />
      <SearchBar />
      <SellerForm />
      <Footer />
    </>
  );
};

export default BecomeSellerPage;
