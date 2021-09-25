import React from "react";

function Prep() {
  return (
    <div className=" rounded-2xl md:bg-gray-50 md:p-6 md:w-44 md:shadow-2xl">
      <div>
        <div className="flex space-x-2">
          <svg
            className="w-5 h-5 "
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-tools-kitchen-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#F59E0B"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
          </svg>
          <div>
            <p className="text-xs font-bold text-gray-600 md:text-sm">YIELDS</p>
            <p className="text-xs text-yellow-500 md:text-base ">12 servings</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-4 md:space-y-4 md:flex-col">
        {/* 1 */}
        <div className="flex space-x-2">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-clock"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 15" />
          </svg>
          <div>
            <p className="text-xs font-bold text-gray-600 md:text-sm">
              PREP TIME
            </p>
            <p className="text-xs md:text-base">45 minutes</p>
          </div>
        </div>
        {/* 2 */}
        <div className="flex space-x-2">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-clock"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 15" />
          </svg>
          <div>
            <p className="text-xs font-bold text-gray-600 md:text-sm">
              COOK TIME
            </p>
            <p className="text-xs md:text-base">1 hour</p>
          </div>
        </div>
        {/* 3 */}
        <div className="flex space-x-2">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-clock"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 15" />
          </svg>
          <div>
            <p className="text-xs font-bold text-gray-600 md:text-sm">
              TOTAL TIME
            </p>
            <p className="text-xs md:text-base">1.45 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prep;
