import { useState } from "react";
import { GlobalLoadingContext } from "./context";
import Loader from "@/components/common/Loader";

interface Props {
  children: React.ReactNode;
}

export function GlobalLoadingProvider({ children }: Props) {
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  return (
    <GlobalLoadingContext.Provider
      value={{ isGlobalLoading, setIsGlobalLoading }}
    >
      {isGlobalLoading && <Loader />}
      {children}
    </GlobalLoadingContext.Provider>
  );
}
