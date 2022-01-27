import { createSlice } from "../../../common/redux/helpers/createSlice";
import { samePayload } from "../../../common/redux/helpers/samePayload";
import { removeNote } from "./ho-reducers/remove-note.reducer";
import { PayloadWithId } from "./types/payload-with-id.type";

export const removeNoteButtonClicked = createSlice<PayloadWithId>({
  type: "REMOVE_NOTE_BUTTON_CLICKED",
  payload: samePayload,
  reducer: removeNote,
});
