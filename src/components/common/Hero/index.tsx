import { memo } from "react";
import { Button } from "../Button";
import BounceButton from "../Button/BounceButton";
import { HeroLabels } from "@/constants/labels";

function Hero() {
  return (
    <>
      <div className="h-screen flex justify-center items-center w-full">
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-2xl px-8 lg:px-12 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-3xl lg:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                {HeroLabels.title}
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 text-sm md:text-lg lg:text-xl dark:text-gray-400">
                {HeroLabels.description}
              </p>
              {/* Added Smooth link to ProductsList */}
              <a
                href="#featuredProducts"
                className="inline-flex items-center justify-center my-3 text-base font-medium text-center text-gray-900 border-gray-300 rounded-lg  focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:focus:ring-gray-800"
              >
                <Button text="Explore" />
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                alt="hero-image"
              />
            </div>
          </div>
        </section>
        <section className="mt-8 absolute bottom-10">
          <BounceButton />
        </section>
      </div>
    </>
  );
}

const MemorizedHero = memo(Hero);

export { MemorizedHero as Hero };
