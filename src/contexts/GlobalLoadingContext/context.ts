import { Dispatch, SetStateAction, createContext } from "react";

interface GlobalLoadingCtx {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const GlobalLoadingContext = createContext<GlobalLoadingCtx | null>(null);

export { GlobalLoadingContext };
