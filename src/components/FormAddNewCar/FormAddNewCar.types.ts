export type ActionType =
  | { type: "SET_YEAR"; payload: number }
  | { type: "SET_FUEL"; payload: string }
  | { type: "SET_NUM_DOOR"; payload: number }
  | { type: "SET_COLOR"; payload: string }
  | { type: "SET_NAME_MODEL"; payload: string }
  | { type: "SET_VALUE"; payload: string }
  | { type: "SET_BRAND"; payload: number };
