import SearchBar from "../components/common/Header";
import ContactInfo from "../components/common/ContactInfo";
import Footer from "../components/common/Footer";
import NewsletterBar from "../components/common/NewsletterBar";
import ContactForm from "../components/ContactForm";
import ContactBar from "../components/ContactBar";

const ContactPage = function () {
  return (
    <>
      <ContactInfo />
      <SearchBar />
      <ContactBar />
      <ContactForm />
      <NewsletterBar />
      <Footer />
    </>
  );
};

export default ContactPage;
