import ContactInfo from "./ContactInfo";
import { FaShoppingBag } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HeaderCommon = function () {
  return (
    <>
      <ContactInfo/>
      <hr className="custom-hr"></hr>
      <div className="container mx-auto my-4 md:space-x-3 flex flex-col sm:flex-row justify-between items-center px-4">
        <a href="/" className="text-3xl font-bold text-red-400 mb-2 sm:mb-0">
          TrailMate
        </a>

        <div
          id="menu"
          className="py-3 text-gray-950 text-sm md:flex md:flex-row md:space-y-0 md:justify-center px-6 flex flex-col justify-start md:space-x-6 space-y-3">
          <a href="/" className="hover:text-red-400">
            Home
          </a>
          <a href="/about" className="text-red-400">
            About
          </a>
          <a href="/category" className="hover:text-red-400">
            Product
          </a>
          <a href="/blog" className="hover:text-red-400">
            Blog
          </a>
          <a href="/contact" className="hover:text-red-400">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search here"
              className="py-2 px-4 w-full sm:w-64 lg:w-80 border-none outline-none text-sm text-gray-600 focus:ring-0"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="bg-red-400 p-3 text-white" />
          </div>

          <div>
            <a href="/cart">
            <FaShoppingBag style={{ color: "#000000" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCommon;
