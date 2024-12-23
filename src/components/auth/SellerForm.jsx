import { useState } from 'react';

const SellerForm = () => {
  // You can add state here if needed (e.g., form input states, error handling, etc.)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', { username, password });
  };

  return (
    <div className="flex justify-center items-center -mx-20 h-full">

      {/* Left Section: Become a Seller */}
      <div className="bg-red-400 px-32 w-2/3 h-full flex flex-col py-28 justify-center">
        <h1 className="text-white text-5xl font-bold mb-4 mx-0 leading-normal" style={{ fontFamily: 'Montserrat' }}>
          Become a Seller Today!
        </h1>
        <p className="text-white text-lg">
          Create a seller account now and reach millions of customers!
        </p>
      </div>

      {/* Right Section: Login Form */}
      <div className="bg-red-400 w-full py-16 h-full flex items-center justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-gray-700 text-lg font-semibold mb-6 text-center">
            Login with Password
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Username Input */}
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-400 text-white py-2 rounded-xl hover:bg-red-500 transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-red-400 hover:underline">
              Reset Password
            </a>
            <span className="mx-2 text-gray-400">|</span>
            <a href="#" className="text-sm text-red-400 hover:underline">
              Create a new account
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SellerForm;
