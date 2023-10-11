import React, { useState } from "react";
import { Link } from "react-router-dom";

const Notify = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    <>
      {isBannerOpen && (
        <div
          id="bottom-banner"
          tabIndex="-1"
          className="fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-black text-white dark:bg-black dark:text-white dark:border-gray-600"
        >
          <div className="flex-grow">
            {/* Your banner content here */}
            TEDXWCESangli is going to be held on{" "}
            <span color="red">21st October, 2023.</span>
          </div>
          <div className="flex items-center">
            <Link
              to="/registration"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded bg-red-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-red-500"
            >
              Register
            </Link>
            <button
              onClick={closeBanner}
              type="button"
              className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-white hover:bg-gray-200 hover:text-black rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close banner</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Notify;
