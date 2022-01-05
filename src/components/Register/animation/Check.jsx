import React from 'react'

export const Check = () => {
    return (
      <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-check"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#FFFFFF"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </div>
    );
}
