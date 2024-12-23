import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <nav className="px-5 pt-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Social Media Icons */}
        <div className="social-media-icons flex space-x-3">
          <a href="#" className="p-2">
            <FaFacebook className="fa-md" />
          </a>
          <a href="#" className="p-2">
            <FaInstagram className="fa-md" />
          </a>
          <a href="#" className="p-2">
            <FaTwitter className="fa-md" />
          </a>
          <a href="#" className="p-2">
            <FaLinkedin className="fa-md" />
          </a>
        </div>

        {/* Contact Information */}
        <div className="contact flex space-x-4">
          <a href="#" className="flex items-center">
            <FaPhone style={{ color: "#f46b5b" }} />
            <span className="pl-2 text-sm">+977 9817153553</span>
          </a>
          <a href="#" className="flex items-center">
            <FaEnvelope style={{ color: "#f46b5b" }} />
            <span className="pl-2 text-sm">support@trailmate.com</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default ContactInfo;
