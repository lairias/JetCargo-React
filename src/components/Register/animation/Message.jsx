import React from 'react'

export const Message = () => {
    return (
      <div className="absolute right-0 -mr-2">
        <div className="relative bg-white shadow-lg px-2 py-1 rounded mt-16 -mr-12">
          {/* mensaje */}
          <svg
            className="absolute top-0 -mt-1 w-full right-0 left-0"
            width="16px"
            height="8px"
            viewBox="0 0 16 8"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Progress-Bars"
                transform="translate(-322.000000, -198.000000)"
                fill="#FFFFFF"
              >
                <g id="Group-4" transform="translate(310.000000, 198.000000)">
                  <polygon id="Triangle" points="20 0 28 8 12 8" />
                </g>
              </g>
            </g>
          </svg>
          <p className="text-indigo-700 text-xs font-bold">Step 3: Analyzing</p>
        </div>
      </div>
    );
}
