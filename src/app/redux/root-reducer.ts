import { initialState } from "./initial-state";
import { RootStateInterface } from "./types/RootState.interface";
import { AnyAction } from "redux";
import { createNoteButtonClicked } from "../../features/create-note/redux/create-note-button-clicked.slice";
import { showArchivedNotesButtonClicked } from "../../features/filter-notes/redux/show-archived-notes-button-clicked.slice";
import { showActiveNotesButtonClicked } from "../../features/filter-notes/redux/show-active-notes-button-clicked.slice";
import { noteContentChanged } from "../../features/note-item/redux/note-content-changed.slice";
import { noteCategoryChanged } from "../../features/note-item/redux/note-category-changed.slice";
import { editNoteButtonClicked } from "../../features/note-item/redux/edit-note-button-clicked.slice";
import { removeNoteButtonClicked } from "../../features/note-item/redux/remove-note-button-clicked.slice";
import { saveNoteButtonClicked } from "../../features/note-item/redux/save-note-button-clicked.slice";
import { cancelEditNoteButtonClicked } from "../../features/note-item/redux/cancel-edit-note-button-clicked.slice";
import { archiveNoteButtonClicked } from "../../features/note-item/redux/archive-note-button-clicked.slice";
import { unarchiveNoteButtonClicked } from "../../features/note-item/redux/unarchive-note-button-clicked.slice";

const slices = [
  createNoteButtonClicked,
  showArchivedNotesButtonClicked,
  showActiveNotesButtonClicked,
  noteContentChanged,
  noteCategoryChanged,
  editNoteButtonClicked,
  removeNoteButtonClicked,
  saveNoteButtonClicked,
  cancelEditNoteButtonClicked,
  archiveNoteButtonClicked,
  unarchiveNoteButtonClicked,
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
