const ProductDetailsSkeleton = () => {
  return (
    <div className="bg-white  w-11/12 mx-auto flex  gap-2 lato_font">
      <div>
        <div className="flex items-center justify-center w-[600px] h-[600px]  bg-gray-300 rounded dark:bg-gray-300">
          <svg
            className="w-20 h-80 text-gray-200 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="mt-10">
          <p className="h-10 bg-gray-200 rounded w-full mb-2"></p>
          <p className="h-10 bg-gray-200 rounded w-full mb-2"></p>
          <p className="h-10 bg-gray-200 rounded w-full mb-2"></p>
        </div>
      </div>

      <div className="pt-6 px-2">
        <h1 className="h-10 bg-gray-200 rounded  w-24 mb-4"></h1>
        <h1 className="h-14 bg-gray-200 rounded  w-[400px] mb-24"></h1>
        <p className="h-10 bg-gray-200 rounded  w-10 mb-4"></p>
        <p className="h-10 bg-gray-200 rounded  w-[500px] mb-4"></p>
        <p className="h-10 bg-gray-200 rounded  w-[500px] mb-4"></p>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
