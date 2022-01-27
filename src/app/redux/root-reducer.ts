import { initialState } from "./initial-state";
import { RootStateInterface } from "./types/RootState.interface";
import { AnyAction } from "redux";
import { createNoteButtonClicked } from "../../features/create-note/redux/create-note-button-clicked.slice";
import { showArchivedNotesButtonClicked } from "../../features/filter-notes/redux/show-archived-notes-button-clicked.slice";
import { showActiveNotesButtonClicked } from "../../features/filter-notes/redux/show-active-notes-button-clicked.slice";

const slices = [
  createNoteButtonClicked,
  showArchivedNotesButtonClicked,
  showActiveNotesButtonClicked,
];

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
