import { initialState } from "./initial-state";
import { RootStateInterface } from "./types/RootState.interface";
import { AnyAction } from "redux";
import { createNoteButtonClicked } from "../../features/create-note/redux/create-note-button-clicked.slice";

const slices = [createNoteButtonClicked];

export const rootReducer = (
  state = initialState,
  action: AnyAction
): RootStateInterface => {
  return slices.reduce((currentState, currentSlice) => {
    const { reducer } = currentSlice;

    const nextState = reducer(currentState, action);

    return nextState;
  }, state);
};
