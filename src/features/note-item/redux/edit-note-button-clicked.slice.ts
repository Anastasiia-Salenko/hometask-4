import { createSlice } from "../../../common/redux/helpers/createSlice";
import { changeNote } from "./ho-reducers/change-note.reducer";
import { PayloadWithId } from "./types/payload-with-id.type";

export const editNoteButtonClicked = createSlice<PayloadWithId, PayloadWithId>({
  type: "EDIT_NOTE_BUTTON_CLICKED",
  payload: (payloadWithId) => payloadWithId,
  reducer: changeNote((note) => ({
    ...note,
    contentOriginal: note.content,
    categoryOriginal: note.category,
    isEditing: true,
  })),
});
