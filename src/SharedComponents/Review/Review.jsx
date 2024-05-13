import { Rating } from "@mui/material";
import getReviews from "../../Uitils/getRatings";

const Review = ({ reviews }) => {
  const { avgRatings, reviewCount } = getReviews(reviews);
  return (
    <section className="py-24 relative bg-base-100 shadow">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <div className="w-full">
          <h2 className="font-manrope font-bold text-4xl text-black mb-8 text-center">
            Our customer reviews
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
            <div className="box flex flex-col gap-y-4 w-full ">
              <div className="flex items-center w-full">
            <p className="font-medium text-lg text-black mr-0.5">5</p>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_12042_8589)">
                <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" />
              </g>
              <defs>
                <clipPath id="clip0_12042_8589">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="h-2 w-full sm:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
              <span className="h-full w-[30%] rounded-3xl bg-amber-400 flex" />
            </p>
            <p className="font-medium text-lg  text-black mr-0.5">989</p>
          </div>
          <div className="flex items-center w-full">
            <p className="font-medium text-lg text-black mr-0.5">4</p>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_12042_8589)">
                <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" />
              </g>
              <defs>
                <clipPath id="clip0_12042_8589">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
              <span className="h-full w-[40%] rounded-3xl bg-amber-400 flex" />
            </p>
            <p className="font-medium text-lg text-black mr-0.5">4.5K</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium text-lg text-black mr-0.5">3</p>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_12042_8589)">
                <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" />
              </g>
              <defs>
                <clipPath id="clip0_12042_8589">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
              <span className="h-full w-[20%] rounded-3xl bg-amber-400 flex" />
            </p>
            <p className="font-medium text-lg text-black mr-0.5">50</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium text-lg text-black mr-0.5">2</p>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_12042_8589)">
                <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" />
              </g>
              <defs>
                <clipPath id="clip0_12042_8589">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
              <span className="h-full w-[16%] rounded-3xl bg-amber-400 flex" />
            </p>
            <p className="font-medium text-lg text-black mr-0.5">16</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium text-lg text-black mr-0.5">1</p>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_12042_8589)">
                <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" fill="#FBBF24" />
              </g>
              <defs>
                <clipPath id="clip0_12042_8589">
                  <rect width={20} height={20} fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
              <span className="h-full w-[8%] rounded-3xl bg-amber-400 flex" />
            </p>
            <p className="font-medium text-lg py-[1px] text-black mr-0.5">8</p>
          </div>
            </div>
            {/* =================== total ratings ==================================== */}
            <div className="p-8 bg-amber-50 rounded-3xl flex items-center justify-center flex-col">
              <h2 className="font-manrope font-bold text-5xl text-amber-400 mb-6">
                {avgRatings.toFixed(1)}
              </h2>
              <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
               
                  <Rating
                    size="large"
                    name="half-rating-read"
                    value={avgRatings}
                    precision={0.01}
                    readOnly
                  />
                
              </div>
              <p className="font-medium text-xl leading-8 text-gray-900 text-center">
                {reviewCount} Ratings
              </p>
            </div>

          </div>
          {
            reviews?.map((rev,idx) => 
            <div key={idx} className="pt-11 pb-8 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
            <div  className="flex items-center gap-3 mb-4">
            <Rating
                    size="large"
                    name="half-rating-read"
                    value={rev.rating}
                    precision={0.1}
                    readOnly
                  />
            </div>
            <h3 className="font-manrope font-semibold text-xl sm:text-2xl leading-9 text-black mb-6">
              Outstanding Experience!!!
            </h3>
            <div className="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1704349572.png"
                  alt="John image"
                  className="w-8 h-8"
                />
                <h6 className="font-semibold text-lg leading-8 text-indigo-600 ">
                  {rev.user}
                </h6>
              </div>
              <p className="font-normal text-lg leading-8 text-gray-400">
                Nov 01, 2023
              </p>
            </div>
            <p className="font-normal text-lg leading-8 text-gray-600 max-xl:text-justify">
              {rev.comment}
            </p>
          </div>)
          }
        </div>
      </div>
    </section>
  );
};

export default Review;
