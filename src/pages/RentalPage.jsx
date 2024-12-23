import Header from "../components/common/Header";
import NewsletterBar from "../components/common/NewsletterBar";
import Footer from "../components/common/Footer";
import AuthForm from "../components/auth/AuthForm";

const AuthPage = function () {
  return (
    <>
      <Header />
      <AuthForm />
      <NewsletterBar />
      <Footer />
    </>
  );
};

export default AuthPage;
