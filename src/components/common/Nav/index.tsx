import Link from "next/link";
import { memo } from "react";
import ChevronDoubleDownIcon from "../Icon/ChevronDoubleDownIcon";

function Nav() {
  return (
    <div className="2xl:container 2xl:mx-auto fixed top-0 left-0 right-0 w-full z-30">
      <div className="bg-white rounded shadow-lg py-4 px-7">
        <nav className="flex justify-between">
          <Link href={"/"}>
            <div className="flex items-center space-x-3">
              <h2 className="font-normal text-2xl leading-6 text-gray-800">
                SPA Shop
              </h2>
            </div>
          </Link>
          <div className=" flex space-x-5 justify-center items-center pl-2">
            <svg
              className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 "
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </nav>
      </div>
    </div>
  );
}

const MemorizedNav = memo(Nav);

export { MemorizedNav as Nav };
