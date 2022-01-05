import { Check } from "./animation/Check";
import { Message } from "./animation/Message";
import { Present } from "./animation/Present";

export const LineTime = ({ ParteOne }) => {
  return (
    <>
      {ParteOne === 1 ? (
        <div className="w-11/12 lg:w-2/6 mx-auto">
          <div className="bg-gray-200 h-1 flex items-center justify-between">
            <div className="w-1/3 bg-white-700 h-1 flex items-center">
              <Present />
            </div>

            <div className="w-1/3 flex justify-end">
              <div className="bg-white h-6 w-6 rounded-full shadow" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {ParteOne === 2 ? (
        <div className="w-11/12 lg:w-2/6 mx-auto">
          <div className="bg-gray-200 h-1 flex items-center justify-between">
            <div className="w-1/3 bg-indigo-700 h-1 flex items-center">
              <Check />
            </div>
            <div className="w-1/3 flex justify-between bg-white-700 h-1 items-center relative">
              <Present />
            </div>

            <div className="w-1/3 flex justify-end">
              <div className="bg-white h-6 w-6 rounded-full shadow" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {ParteOne === 3 ? (
        <div className="w-11/12 lg:w-2/6 mx-auto">
          <div className="bg-gray-200 h-1 flex items-center justify-between">
            <div className="w-1/3 bg-indigo-700 h-1 flex items-center">
              <Check />
            </div>
            <div className="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">
              <div className="bg-indigo-700 h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2">
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
            </div>
            <Present />

            <div className="w-1/3 flex justify-end">
              <div className="bg-white h-6 w-6 rounded-full shadow" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {ParteOne === 4 ? (
        <div className="w-11/12 lg:w-2/6 mx-auto">
          <div className="bg-gray-200 h-1 flex items-center justify-between">
            <div className="w-1/3 bg-indigo-700 h-1 flex items-center">
              <Check />
            </div>
            <div className="w-1/3 flex justify-between bg-indigo-700 h-1 items-center relative">
              <Check />
            </div>
            <Check />

            <div className="w-1/3  bg-indigo-700 h-1 flex  items-center  justify-end">
              <Present />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};


