import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthForm = () => {
  const navigate = useNavigate();

  // Initial state for login and register forms
  const initialLoginState = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const initialRegisterState = {
    name: "",
    email: "",
    phoneno: "",
    password: "",
    confirmPassword: "",
    role: "user",
  };

  const [loginData, setLoginData] = useState(initialLoginState);
  const [registerData, setRegisterData] = useState(initialRegisterState);

  // Handlers for input changes
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  // Form submission handlers
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("role", data.role);
        toast.success(`Welcome back!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
        setLoginData(initialLoginState);
        setRegisterData(initialRegisterState);
        navigate("/");
      } else {
        toast.error(data.message || "Incorrect credentials. Try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: registerData.name,
          email: registerData.email,
          phoneno: registerData.phoneno,
          password: registerData.password,
          role: registerData.role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Display success toast
        toast.success("Account created successfully!", {
          position: "top-right", // Customize position (optional)
          autoClose: 3000, // Duration in milliseconds
          hideProgressBar: true,
        });
        setLoginData(initialLoginState);
        setRegisterData(initialRegisterState);
        setTimeout(() => navigate("/"), 3000);
      } else {
        toast.error(data.message || "Failed to register. Please try again");
      }
    } catch (error) {
      console.error("Request failed:", error);
    } finally {
      setRegisterData(initialRegisterState); // Clear form after submit
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-2 rounded-3xl max-w-4xl">
        {/* Login Section */}
        <div className="border rounded-2xl px-14 py-8">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <p className="text-sm text-gray-400 mb-6">
            Already have an account? Please, login!
          </p>

          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email" className="text-xs m-1 font-md">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@email.com"
              value={loginData.email}
              onChange={handleLoginChange}
              className="w-full p-2 mt-2 mb-4 border text-xs rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />

            <label htmlFor="password" className="text-xs m-1 font-md">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              className="w-full p-2 mt-2 mb-4 text-xs border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />

            <button
              type="submit"
              className="w-full bg-red-400 text-sm text-white p-2 my-5 rounded-lg hover:bg-red-400 transition">
              Login
            </button>

            <div className="flex items-center justify-between mb-5">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                  className="form-checkbox text-red-400"
                />
                <span className="ml-2 text-xs text-gray-500">Remember me</span>
              </label>
              <a href="#" className="text-xs text-red-400 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        </div>

        {/* Register Section */}
        <div className="border rounded-2xl px-14 py-8">
          <h2 className="text-3xl font-bold mb-4">Create Account</h2>
          <p className="text-sm text-gray-400 mb-6">
            Don&apos;t have an account yet? Register here!
          </p>

          <form onSubmit={handleRegisterSubmit}>
            <label htmlFor="name" className="text-xs m-1 font-md">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={registerData.name}
              onChange={handleRegisterChange}
              className="w-full p-2 mt-2 mb-4 border text-xs rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />

            <label htmlFor="email" className="text-xs m-1 font-md">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@email.com"
              value={registerData.email}
              onChange={handleRegisterChange}
              className="w-full p-2 mt-2 mb-4 border text-xs rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />

            <label htmlFor="phone" className="text-xs m-1 font-md">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={registerData.phoneno}
              onChange={handleRegisterChange}
              className="w-full p-2 mt-2 mb-4 border text-xs rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />

            <label htmlFor="password" className="text-xs m-1 font-md">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.password}
              onChange={handleRegisterChange}
              className="w-full p-2 mt-2 mb-4 text-xs border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />

            <label htmlFor="password" className="text-xs m-1 font-md">
              Confirm Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={registerData.confirmPassword}
              onChange={handleRegisterChange}
              className="w-full p-2 mt-2 mb-4 text-xs border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
            />

            <button
              type="submit"
              className="w-full bg-red-400 text-sm text-white p-2 my-5 rounded-lg hover:bg-red-400 transition">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
