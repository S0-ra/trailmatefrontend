const NewsletterBar = () => {
  return (
    <div
      className="newsletter-section -mx-20 mt-28 py-12"
      style={{
        backgroundImage: "url('/src/assets/newsletter_bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto pt-8">
        <h2 className="text-3xl text-white font-bold mb-3" style={{ fontFamily: 'Montserrat' }}>
          Join our newsletter now!
        </h2>
        <p className="text-xs mb-9 text-gray-50">
          Register now and get our latest updates and promos.
        </p>
        <div className="flex justify-normal">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 text-xs py-3 w-80 text-gray-500 rounded-l-lg focus:outline-none"
          />
          <button className="px-6 py-3 bg-red-500 font-medium text-white rounded-r-lg text-sm">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBar;
