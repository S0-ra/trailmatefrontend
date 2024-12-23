import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#fff7f6] footer px-20 w-full mt-16 text-gray-800 py-16">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          {/* Left Section */}
          <div className="w-1/3">
            <h2 className="text-xl font-bold mb-4">TrailMate</h2>
            <p className="text-gray-500 mb-6 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-800 bg-red-300 px-1 rounded">
                <FontAwesomeIcon icon={faInstagram} size="sm" />
              </a>
              <a href="#" className="text-white rounded hover:text-gray-800 bg-red-300 px-1">
                <FontAwesomeIcon icon={faTwitter} size="sm" />
              </a>
              <a href="#" className="text-white rounded hover:text-gray-800 bg-red-300 px-1">
                <FontAwesomeIcon icon={faFacebook} size="sm" />
              </a>
            </div>
          </div>

          {/* Company, Information, and Contact Sections */}
          <div className="justify-items-end grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-md font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-xs">
                <li><a href="/index/about.html" className="text-gray-600 hover:text-gray-800">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Products</a></li>
                <li><a href="/index/contact.html" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                <li><a href="/index/blog.html" className="text-gray-600 hover:text-gray-800">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-md mr-8 font-semibold mb-4">Information</h3>
              <ul className="space-y-3 text-xs">
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Payment Methods</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Return & Refund</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-md font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-xs">
                <li>
                  <a href="#" className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} style={{ color: '#f46b5b' }} />
                    <span className="pl-2 text-xs">+977 9817153553</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: '#f46b5b' }} />
                    <span className="pl-2 text-xs">support@trkmate.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between footer-bottom mt-20 w-full">
          <p className="text-left flex justify-start text-gray-600 text-xs">
            Copyright © 2021 Trailmate. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
