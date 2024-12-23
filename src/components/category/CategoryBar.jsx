const CategoryBar = () => (
  <div className="ml-12">
    <div className="title-part mx-5 mt-5 font-semibold text-xl">
      <h3>Category</h3>
    </div>
    <div className="equip-category pt-4 text-gray-950 text-xs mx-5 flex space-x-6">
      <a href="#" className="flex items-center space-x-2">
        <img
          src="src/assets/trekking-pole.png"
          alt="Trekking Poles"
          className="w-5 h-5"
        />
        <span>Trekking Poles</span>
      </a>
      <a href="#" className="flex items-center space-x-4">
        <img src="src/assets/headlamp.png" alt="HeadLamp" className="w-5 h-5" />
        <span>HeadLamp</span>
      </a>
      <a href="#" className="flex items-center space-x-4">
        <img src="src/assets/hammock.png" alt="Hammock" className="w-5 h-5" />
        <span>Hammock</span>
      </a>
      <a href="#" className="flex items-center space-x-4">
        <img src="src/assets/gaiter.png" alt="Gaiters" className="w-5 h-5" />
        <span>Gaiter</span>
      </a>
      <a href="#" className="flex items-center space-x-4">
        <img
          src="src/assets/sunglasses.png"
          alt="Sunglasses"
          className="w-5 h-5"
        />
        <span>Sunglasses</span>
      </a>
      <a href="#" className="flex items-center space-x-4">
        <img src="src/assets/other.png" alt="Others" className="w-5 h-5" />
        <span>Other Categories</span>
      </a>
    </div>
  </div>
);

export default CategoryBar;
