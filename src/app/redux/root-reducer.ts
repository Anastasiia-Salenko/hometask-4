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
import { startLoadingNotes } from "../../features/note-list/redux/start-loading-notes.slice";
import { notesLoadedSuccessfully } from "../../features/note-list/redux/notes-loaded-successfully.slice";
import { notesLoadingFailure } from "../../features/note-list/redux/notes-loading-failure.slice";
import { startLoadingStatistics } from "../../features/note-statistics.ts/redux/start-loading-statistics.slice";
import { statisticsLoadingSuccessfuly } from "../../features/note-statistics.ts/redux/statistics-loading-successfuly.slice";
import { statisticsLoadingFailure } from "../../features/note-statistics.ts/redux/statistics-loading-failure.slice";

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

  startLoadingNotes,
  notesLoadedSuccessfully,
  notesLoadingFailure,

  startLoadingStatistics,
  statisticsLoadingSuccessfuly,
  statisticsLoadingFailure,
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
