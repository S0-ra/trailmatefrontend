const AboutContent = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <section className="text-sm pb-3 pt-10 flex ml-20">
        <a href="/index/main.html">Home</a>
        <p>&nbsp;&gt;&nbsp;</p>
        <a href="#" className="text-red-400">
          About
        </a>
      </section>

      {/* About TrailMate */}
      <section className="text-center mb-12">
        <h1 className="about-sub-heading">About TrailMate</h1>
        <p className="my-9 text-sm mx-36 text-gray-700">
          We are here to provide a place special for Trek-Gears. Although we
          only operated for 2 years but we always provide the best service for
          customers and all the sellers who use our website. With the hope that
          it can help improve a better life using various Trek-Gears with the
          latest technology, we are all ears to any suggestion from our dear
          customers
        </p>
        <div
          className="mt-8 bg-gray-300 rounded-xl h-96 w-full max-w-6xl mx-auto"
          style={{
            backgroundImage: "url(/src/assets/about.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}></div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us text-center my-12">
        <h2 className="sub-headings">Why Choose Us</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img src="src/assets/Quality.png" alt="Quality" />
            <p className="mt-4 font-semibold mb-3">54 Brands</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="src/assets/Fast Delivery.png" alt="Fast Delivery" />
            <p className="mt-4 font-semibold mb-3">Fast Delivery</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="src/assets/COD.png" alt="COD Service" />
            <p className="mt-4 font-semibold mb-3">COD Service</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src="src/assets/Quality2.png" alt="Quality Products" />
            <p className="mt-4 font-semibold mb-3">100% Original Products</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="text-center my-12">
        <h2 className="sub-headings">Our Team</h2>
        <div className="card flex justify-between items-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
            {/* Team Members */}
            {["team1", "team2", "team3", "team4"].map((teamMember, index) => (
              <div
                key={index}
                className="bg-white border border-gray-400 rounded-xl relative h-80 flex flex-col">
                <img
                  src={`src/assets/${teamMember}.jpg`}
                  alt={`Team Member ${index + 1}`}
                  className="w-full rounded-xl h-60 mb-4 object-cover"
                />
                <div className="text-center">
                  <p className="font-medium my-1">
                    {
                      ["Aery Smith", "Gus Fring", "Tyla Grace", "Jynn Reed"][
                        index
                      ]
                    }
                  </p>
                  <p className="text-gray-400 text-xs mb-4">Team Member</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="bg-red-400 -mx-20 px-28 text-white py-10"
        style={{ transform: "translateY(64px)" }}>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="flex text-center md:text-left mb-4 md:mb-0">
            <img
              className="w-16 ml-10 mr-5"
              src="src/assets/newsletter.png"
              alt="Newsletter"
            />
            <div>
              <h3
                className="text-3xl mb-4 font-bold"
                style={{ fontFamily: "montserrat", letterSpacing: "0.07rem" }}>
                Join our newsletter now!
              </h3>
              <p className="text-sm">
                Register now to get the latest updates and promos.
              </p>
            </div>
          </div>
          <form className="flex space-x-4">
            <input
              type="email"
              className="px-4 py-2 rounded-lg text-gray-700 bg-gray-100 bg-no-repeat bg-left pl-12"
              placeholder="Enter your email"
              style={{
                backgroundImage: "url(/images/email-icon.png)",
                backgroundSize: "20px",
              }}
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-2 rounded-lg">
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
