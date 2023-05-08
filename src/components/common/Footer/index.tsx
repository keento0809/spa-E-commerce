import Link from "next/link";
import { memo } from "react";
import FacebookIcon from "../Icon/FacebookIcon";
import InstagramIcon from "../Icon/InstagramIcon";
import PinterestIcon from "../Icon/PinterestIcon";

function Footer() {
  return (
    <footer className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-x-8 mt-6">
          <div className="cursor-pointer">
            <Link href="https://www.facebook.com/">
              <FacebookIcon />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="https://www.instagram.com/">
              <InstagramIcon />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="https://www.pinterest.com">
              <PinterestIcon />
            </Link>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <p className="text-sm lg:text-base leading-4 text-gray-800">
            2023 <span className="font-semibold">Kento Honda</span>
          </p>
          <div className="border-l border-gray-800 pl-2 ml-2">
            <p className="text-sm lg:text-base leading-4 text-gray-800">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const MemorizedFooter = memo(Footer);

export { MemorizedFooter as Footer };
