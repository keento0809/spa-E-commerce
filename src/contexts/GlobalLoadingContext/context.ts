import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface GlobalLoadingCtx {
  isGlobalLoading: boolean;
  setIsGlobalLoading: Dispatch<SetStateAction<boolean>>;
}

// Context API checking the global loading status
const GlobalLoadingContext = createContext<GlobalLoadingCtx | null>(null);

function useGlobalLoadingContext() {
  const context = useContext(GlobalLoadingContext);

  if (!context) throw new Error("Invalid context");

  return context;
}

export { GlobalLoadingContext, useGlobalLoadingContext };
