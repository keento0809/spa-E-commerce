import Link from "next/link";
import { memo } from "react";
import BellIcon from "../Icon/BellIcon";

function Nav() {
  return (
    <div className="2xl:container 2xl:mx-auto fixed top-0 left-0 right-0 w-full z-30">
      <div className="bg-white rounded shadow-lg py-4 px-7">
        <nav className="flex justify-between">
          <Link href={"/"}>
            <div className="flex items-center space-x-3">
              <h2 className="font-bold tracking-tight text-lg lg:text-2xl leading-6 text-gray-800">
                SPA Shop
              </h2>
            </div>
          </Link>
          <div className=" flex space-x-5 justify-center items-center pl-2">
            <BellIcon />
          </div>
        </nav>
      </div>
    </div>
  );
}

const MemorizedNav = memo(Nav);

export { MemorizedNav as Nav };
