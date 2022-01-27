import {
  SHOW_ACTIVE_NOTES_BUTTON_CLICKED,
  SHOW_ARCHIVED_NOTES_BUTTON_CLICKED,
} from "./constants";

export const showActiveNotesButtonClicked = () => ({
  type: SHOW_ACTIVE_NOTES_BUTTON_CLICKED,
});

export const showArchivedNotesButtonClicked = () => ({
  type: SHOW_ARCHIVED_NOTES_BUTTON_CLICKED,
});
