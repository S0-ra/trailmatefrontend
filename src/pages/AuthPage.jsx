import HeaderCommon from "../components/common/HeaderCommon";
import NewsletterBar from "../components/common/NewsletterBar";
import Footer from "../components/common/Footer";
import AuthForm from "../components/auth/AuthForm";

const AuthPage = function () {
  return (
    <>
      <HeaderCommon />
      <AuthForm />
      <NewsletterBar />
      <Footer />
    </>
  );
};

export default AuthPage;
