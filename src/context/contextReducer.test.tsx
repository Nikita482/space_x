import { contextReducer } from "./ContextReducer";
import type { State, Action } from "./ContextReducer";

const initialState: State = {
  data: null,
  selectedMission: null,
  isOpen: false,
};

const mockLaunch = { mission_name: "Test Mission" } as any;

describe("contextReducer", () => {
  it("SET_DATA обновляет data", () => {
    const action: Action = { type: "SET_DATA", payload: [mockLaunch] };
    const newState = contextReducer(initialState, action);
    expect(newState.data).toEqual([mockLaunch]);
  });

  it("SELECT_MISSION обновляет selectedMission", () => {
    const action: Action = { type: "SELECT_MISSION", payload: mockLaunch };
    const newState = contextReducer(initialState, action);
    expect(newState.selectedMission).toEqual(mockLaunch);
  });

  it("TOGGLE_MODAL обновляет isOpen", () => {
    const action: Action = { type: "TOGGLE_MODAL", payload: true };
    const newState = contextReducer(initialState, action);
    expect(newState.isOpen).toBe(true);
  });

  it("возвращает текущее состояние по умолчанию", () => {
    // Обход ошибки с payload
    const action = { type: "UNKNOWN" } as unknown as Action;
    const newState = contextReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
});
