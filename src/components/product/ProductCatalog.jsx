import ProductFilter from './ProductFilter';
import CategoryGrid from './../category/CategoryGrid';

export const ProductCatalog = () => {
  return (
    <>
      <section className="text-sm pb-3 pt-10 flex ml-20">
        <a href="/">Home</a>
        <p>&nbsp;&gt;&nbsp;</p>
        <a href="#" className="text-red-400">
          All Categories
        </a>
      </section>
      <div className="container py-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold title-part mb-2">All Categories</h1>
          <p className="text-sm text-gray-600">
            Explore all the gear, accessories, and essentials for your trekking
            adventure. Get the ultimate trekking experience at one place.
          </p>
        </div>
        {/*Main Container*/}
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          <ProductFilter />
          <main className='w-full lg:w-3/4'>
            <CategoryGrid />
            
          </main>
        </div>
      </div>
    </>
  );
};
