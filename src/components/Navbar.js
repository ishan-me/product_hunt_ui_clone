import React from 'react';

export const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a
          href="javascript.void(0)"
          className="flex title-font font-medium items-center text-gray-900 mb-4 mr-5 md:mb-0"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
                fill="#DA552F"
              ></path>
              <path
                d="M22.667 20H17v-6h5.667a3 3 0 010 6m0-10H13v20h4v-6h5.667a7 7 0 100-14"
                fill="#FFF"
              ></path>
            </g>
          </svg>
        </a>
        <div>
          <div className="relative w-full">
            <input
              type="text"
              id="hero-field"
              name="hero-field"
              className="text-sm pl-10 xl:w-80 bg-gray-100 bg-opacity-50 rounded  focus:bg-transparent border border-gray-300 focus:border-grey-500 outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Discover your next favourite thing..."
            />
            <div className="absolute inset-15">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                xmlns="http://www.w3.org/2000/svg"
                className="styles_searchIcon__1g65n"
              >
                <path
                  d="M9.383 10.347a5.796 5.796 0 11.965-.964L15 14.036l-.964.964-4.653-4.653zm-3.588-.12a4.432 4.432 0 100-8.863 4.432 4.432 0 000 8.863z"
                  fill="#BBB"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <nav className="md:mr-auto md:ml-4 py-1 pl-4 flex flex-wrap items-center text-base justify-center">
          <a
            href="javascript.void(0)"
            className="mr-5 text-base text-gray-500 hover:text-gray-700"
          >
            Discussions
          </a>
          <a
            href="javascript.void(0)"
            className="mr-5 text-base text-gray-500 hover:text-gray-700"
          >
            Deals
          </a>
          <a
            href="javascript.void(0)"
            className="mr-5 text-base text-gray-500 hover:text-gray-700"
          >
            Jobs
          </a>
          <a
            href="javascript.void(0)"
            className="mr-5 text-base text-gray-500 hover:text-gray-700"
          >
            Ship
          </a>
          <a
            href="javascript.void(0)"
            className="mr-5 text-base text-gray-500 hover:text-gray-700"
          >
            <svg
              width="20"
              height="4"
              viewBox="0 0 20 4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 4A2 2 0 102.001.001 2 2 0 002 4zm8 0a2 2 0 10.001-3.999A2 2 0 0010 4zm8 0a2 2 0 10.001-3.999A2 2 0 0018 4z"
                fill="#BBB"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
        </nav>
        <button className="text-xs font-bold inline-flex items-center bg-white border border-gray-300 mr-2 uppercase py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <span>log in</span>
        </button>
        <button className="primary text-xs font-bold uppercase inline-flex text-white items-center bg-orange border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          <span>Sign up</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
