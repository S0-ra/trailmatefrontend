import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrip, faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {
  return (
    <div className="container mx-auto my-4 flex justify-between items-center px-5">
      <a href="#" className="text-3xl font-bold text-red-400">TrailMate</a>

      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 p-2 rounded-lg">
          <FontAwesomeIcon icon={faGrip} style={{ color: '#949494' }} />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
          <input 
            type="text" 
            placeholder="Search here" 
            className="py-2 px-4 w-80 border-none outline-none text-sm text-gray-600 focus:ring-0"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="bg-red-400 p-3 text-white" />
        </div>

        <div>
          <a href="/index/cart.html">
            <FontAwesomeIcon icon={faBagShopping} className="fa-lg px-2" style={{ color: '#000000' }} />
          </a>
        </div>

        <a className="text-red-400 text-sm underline" href="/index/loginpage.html">Sign in</a>

        <button className="text-white text-sm px-3 py-2 bg-red-400 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
