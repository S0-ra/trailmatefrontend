const ContactForm = () => {
  return (
    <section className="container mx-auto py-10 px-6">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-lg px-10 py-5">
          <h2 className="text-3xl font-bold text-red-400 mb-6">
            We’d love to hear from you!
          </h2>
          <p className="mb-8 text-gray-600">
            Whether you have a question about our products, need assistance, or
            just want to share your trekking experiences, feel free to reach
            out.
          </p>
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                rows="5"
                className="w-full mt-2 px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none"></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-400 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-red-500 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Content (Images & Info) */}
        <div className="flex flex-col space-y-8">
          {/* Placeholder for Image */}
          <div
            className="bg-gray-200 rounded-lg shadow-md h-56 flex justify-center items-center"
            style={{
              backgroundImage: "url(/images/contact1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}></div>

          {/* Contact Info */}
          <div className="text-gray-700">
            <h2 className="text-3xl font-bold text-red-400 mb-4">
              Reach Us At
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-red-400 mr-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M21.625 16.292l-5.453-2.317a1.025 1.025 0 00-.786.083l-2.667 1.442c-2.796-1.49-4.747-3.462-6.256-6.203l1.428-2.687a1.025 1.025 0 00.079-.787L7.708 2.375a1.025 1.025 0 00-1.188-.679L3.21 2.67a1.025 1.025 0 00-.779.953C2.507 14.722 9.3 21.515 21.225 21.754a1.025 1.025 0 00.953-.779l.974-3.31a1.025 1.025 0 00-.527-1.373z"></path>
                </svg>
                <span>+977 9823458764</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-red-400 mr-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm0 18a8 8 0 118-8 8.009 8.009 0 01-8 8zm1-13h-2v6h2zm0 8h-2v2h2z"></path>
                </svg>
                <span>info@trailmate.com</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-red-400 mr-4"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M11.543 2.005a.57.57 0 00-.086 0L3.25 4.167a.75.75 0 00-.554.726v12.028a.75.75 0 00.554.726l8.208 2.164c.028.007.058.007.086 0l8.207-2.164a.75.75 0 00.554-.726V4.893a.75.75 0 00-.554-.726L11.543 2.005zm.957 2.043l6.757 1.772-7.285 7.286L4.5 5.82l7.255-1.772zm-6.273 3.01l4.53 4.53L5 16.22v-9.16zm7.243 4.53l4.53-4.53v9.16l-4.53-4.53z"></path>
                </svg>
                <span>123 Adventure Lane, Mountain City</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
