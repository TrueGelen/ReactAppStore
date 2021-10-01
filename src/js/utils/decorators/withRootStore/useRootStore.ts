import { useContext } from "react";
import { RootStoreContext } from "./RootStoreContext";

export const useRootStore = () => useContext(RootStoreContext);
