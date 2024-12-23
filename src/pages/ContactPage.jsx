import Footer from "../components/common/Footer";
import NewsletterBar from "../components/common/NewsletterBar";
import ContactForm from "../components/ContactForm";
import HeaderCommon from "../components/common/HeaderCommon";

const ContactPage = function () {
  return (
    <>
      <HeaderCommon/>
      <ContactForm />
      <NewsletterBar />
      <Footer />
    </>
  );
};

export default ContactPage;
