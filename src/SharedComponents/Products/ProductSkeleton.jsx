const ProductSkeleton = () => {
  return (
    <div className="card_style  text-center rounded-sm pb-2">
      {/* <div className=" h-80 flex items-center bg-[#edecec]  image-zoomer">
        <img className="w-60 h-60 mx-auto " src="" alt="" />
      </div> */}

      <div className="h-80 flex items-center justify-center w-full  bg-gray-300 rounded sm:w-96 dark:bg-gray-300">
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


      <div className="space-y-2 mt-1 text-left my-8 px-4">
        <h2 className="bg-gray-200 h-8 w-full  custom_font_class  text-lg"></h2>
        <div className="flex gap-2 justify-start items-center">
          <p className="bg-gray-200 h-8 w-full"></p>
          <p className="bg-gray-200 h-8 w-full"></p>
        </div>
        <p className="bg-gray-200 h-8 w-full"></p>
      </div>

      <button className="button_class normal bg-gray-200  w-10/12"></button>
    </div>
  );
};

export default ProductSkeleton;
