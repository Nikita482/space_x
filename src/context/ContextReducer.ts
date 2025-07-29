import type { Launch } from "./types";

export type State = {
  data: Launch[] | null;
};

export type Action = { type: "SET_DATA"; payload: Launch[] };

export const contextReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
