import { useState } from "react";
import { GlobalLoadingContext } from "./context";
import Loader from "@/components/common/Loader";
import { ChildrenProps } from "@/types";

export function GlobalLoadingProvider({ children }: ChildrenProps) {
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
