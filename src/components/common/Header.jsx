import ContactInfo from "./ContactInfo";
import SearchBar from "./SearchBar";
import NavLinks from "./Navlinks";

const Header = function () {
  return (
    <header>
      <ContactInfo />
      <SearchBar />
      <NavLinks />
    </header>
  );
};

export default Header;
