import { createContext } from "react";
import type { Dispatch } from "react";
import type { Action } from "./ContextReducer";

type Launch = any;

type ContextType = {
  data: Launch[] | null;
  selectedMission: Launch | null;
  dispatch: Dispatch<Action>;
  isOpen: boolean;
};

export const MyContext = createContext<ContextType | null>(null);
