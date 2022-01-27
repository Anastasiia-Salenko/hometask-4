import { isExistingNote } from "../../../app/redux/type-guards/isExistingNote";
import { NoteItemInterface } from "../../../app/redux/types/NoteItem.interface";
import { PayloadActionInterface } from "../../../app/redux/types/PayloadAction.interface";
import { RootStateInterface } from "../../../app/redux/types/RootState.interface";
import {
  NOTE_CONTENT_CHANGED,
  EDIT_NOTE_BUTTON_CLICKED,
  SAVE_NOTE_BUTTON_CLICKED,
  CANCEL_EDIT_NOTE_BUTTON_CLICKED,
  REMOVE_NOTE_BUTTON_CLICKED,
  ARCHIVE_NOTE_BUTTON_CLICKED,
  UNARCHIVE_NOTE_BUTTON_CLICKED,
  NOTE_CATEGORY_CHANGED,
} from "./constants";
import { PayloadWithCategory } from "./types/payload-with-category.type";
import { PayloadWithContent } from "./types/payload-with-content.type";
import { PayloadWithDate } from "./types/payload-with-date.type";
import { PayloadWithId } from "./types/payload-with-id.type";

const changeNote = <T extends PayloadWithId>(
  itemReducer: (
    note: NoteItemInterface,
    action: PayloadActionInterface<T>
  ) => NoteItemInterface
) => {
  return (state: RootStateInterface, action: PayloadActionInterface<T>) => {
    const notes = state.notes.map((item) => {
      if (item.id === action.payload.id) {
        return itemReducer(item, action);
      }

      return item;
    });

    return {
      ...state,
      notes,
    };
  };
};

const removeNote = (
  state: RootStateInterface,
  action: PayloadActionInterface<PayloadWithId>
) => {
  const notes = state.notes.filter((item) => item.id !== action.payload.id);

  return {
    ...state,
    notes,
  };
};

export const actionHandlers = {
  [NOTE_CONTENT_CHANGED]: changeNote<PayloadWithContent>((note, action) => ({
    ...note,
    content: action.payload.content,
  })),
  [NOTE_CATEGORY_CHANGED]: changeNote<PayloadWithCategory>((note, action) => ({
    ...note,
    category: action.payload.category,
  })),
  [SAVE_NOTE_BUTTON_CLICKED]: changeNote<PayloadWithDate>((note, action) => ({
    ...note,
    isDraft: false,
    isEditing: false,
    created: note.created || action.payload.date,
  })),
  [EDIT_NOTE_BUTTON_CLICKED]: changeNote((note) => ({
    ...note,
    contentOriginal: note.content,
    categoryOriginal: note.category,
    isEditing: true,
  })),
  [CANCEL_EDIT_NOTE_BUTTON_CLICKED]: (
    state: RootStateInterface,
    action: PayloadActionInterface<PayloadWithId>
  ) => {
    const foundNote = state.notes.find((item) => item.id === action.payload.id);

    if (!foundNote) {
      throw new Error(`No note found with id ${action.payload.id}`);
    }

    const reducer = isExistingNote(foundNote)
      ? changeNote(() => ({
          ...foundNote,
          content: foundNote.contentOriginal,
          category: foundNote.categoryOriginal,
          isEditing: false,
        }))
      : removeNote;

    return reducer(state, action);
  },
  [REMOVE_NOTE_BUTTON_CLICKED]: removeNote,
  [ARCHIVE_NOTE_BUTTON_CLICKED]: changeNote((note) => ({
    ...note,
    isArchived: true,
  })),
  [UNARCHIVE_NOTE_BUTTON_CLICKED]: changeNote((note) => ({
    ...note,
    isArchived: false,
  })),
};
