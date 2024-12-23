const BrandBar = () => {
  return (
    <div className="container mx-5 mt-16 flex justify-center">
      <div className="flex space-x-4 mx-5">
        <p className="text-2xl text-gray-400 font-medium" style={{ fontFamily: 'Playfair Display' }}>
          Trekus
        </p>
      </div>
      <div className="contact flex space-x-4 mx-5">
        <p className="text-2xl font-medium text-gray-400">
          Travelpartner
        </p>
      </div>
      <div className="flex space-x-4 mx-5">
        <p className="text-2xl text-gray-400 font-normal" style={{ fontFamily: 'Vidaloka' }}>
          TravelVan
        </p>
      </div>
      <div className="flex space-x-4 mx-5">
        <p className="text-2xl text-gray-400 font-semibold" style={{ fontFamily: 'Montserrat' }}>
          HIKE
        </p>
      </div>
      <div className="flex space-x-4 mx-5">
        <p className="text-2xl text-gray-400 font-semibold" style={{ fontFamily: 'Nunito, sans-serif' }}>
          Hillspal
        </p>
      </div>
      <div className="flex space-x-4 mx-5">
        <p className="text-2xl text-gray-400 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
          TrekMate
        </p>
      </div>
    </div>
  );
};

export default BrandBar;
