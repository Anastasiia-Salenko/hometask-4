import { formatDate } from "../../../utils/formatDate";
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
import { PayloadWithId } from "./types/payload-with-id.type";

export const noteContentChanged = ({ id, content }: PayloadWithContent) => ({
  type: NOTE_CONTENT_CHANGED,
  payload: { id, content },
});

export const noteCategoryChanged = ({ id, category }: PayloadWithCategory) => ({
  type: NOTE_CATEGORY_CHANGED,
  payload: { id, category },
});

export const saveNoteButtonClicked = ({ id }: PayloadWithId) => ({
  type: SAVE_NOTE_BUTTON_CLICKED,
  payload: { id, date: formatDate(new Date()) },
});

export const editNoteButtonClicked = ({ id }: PayloadWithId) => ({
  type: EDIT_NOTE_BUTTON_CLICKED,
  payload: { id },
});

export const cancelEditNoteButtonClicked = ({ id }: PayloadWithId) => ({
  type: CANCEL_EDIT_NOTE_BUTTON_CLICKED,
  payload: { id },
});

export const removeNoteButtonClicked = ({ id }: PayloadWithId) => ({
  type: REMOVE_NOTE_BUTTON_CLICKED,
  payload: { id },
});

export const archiveNoteButtonClicked = ({ id }: PayloadWithId) => ({
  type: ARCHIVE_NOTE_BUTTON_CLICKED,
  payload: { id },
});

export const unarchiveNoteButtonClicked = ({ id }: PayloadWithId) => ({
  type: UNARCHIVE_NOTE_BUTTON_CLICKED,
  payload: { id },
});
