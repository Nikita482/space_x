import { createContext } from "react";

type Launch = any;

type ContextType = {
  data: Launch[] | null;
};

export const MyContext = createContext<ContextType | null>(null);
