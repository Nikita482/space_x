import type { Launch } from "./types";

export type State = {
  data: Launch[] | null;
  selectedMission: Launch | null;
  isOpen: boolean;
};

export type Action =
  | { type: "SET_DATA"; payload: Launch[] }
  | { type: "SELECT_MISSION"; payload: Launch }
  | { type: "TOGGLE_MODAL"; payload: boolean };

export const contextReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SELECT_MISSION":
      return { ...state, selectedMission: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
};
