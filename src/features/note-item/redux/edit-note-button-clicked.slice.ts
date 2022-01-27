import { createSlice } from "../../../common/redux/helpers/createSlice";
import { samePayload } from "../../../common/redux/helpers/samePayload";
import { changeNote } from "./ho-reducers/change-note.reducer";
import { PayloadWithId } from "./types/payload-with-id.type";

export const editNoteButtonClicked = createSlice<PayloadWithId>({
  type: "EDIT_NOTE_BUTTON_CLICKED",
  payload: samePayload,
  reducer: changeNote((note) => ({
    ...note,
    contentOriginal: note.content,
    categoryOriginal: note.category,
    isEditing: true,
  })),
});
