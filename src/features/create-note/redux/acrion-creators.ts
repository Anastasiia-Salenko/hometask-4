import { CREATE_NOTE_BUTTON_CLICKED } from "./constants";
import { v4 as uuidv4 } from "uuid";

export const createNoteButtonClicked = () => ({
  type: CREATE_NOTE_BUTTON_CLICKED,
  payload: { id: uuidv4() },
});
