import { useState } from "react";
import { GlobalLoadingContext } from "./context";
import Loader from "@/components/common/Loader";

interface Props {
  children: React.ReactNode;
}

export function GlobalLoadingProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <GlobalLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {/* {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-50 bg-red-200 opacity-30">
          <Loader />
        </div>
      )} */}
    </GlobalLoadingContext.Provider>
  );
}
