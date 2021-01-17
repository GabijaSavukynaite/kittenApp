import { combineReducers } from "redux";
import { kittensReducer } from "./kittens";

export const rootReducer = combineReducers({
  kittens: kittensReducer
});

export type RootState = ReturnType<typeof rootReducer>