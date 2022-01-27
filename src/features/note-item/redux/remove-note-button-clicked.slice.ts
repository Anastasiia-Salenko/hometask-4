import { createSlice } from "../../../common/redux/helpers/createSlice";
import { removeNote } from "./ho-reducers/remove-note.reducer";
import { PayloadWithId } from "./types/payload-with-id.type";

export const removeNoteButtonClicked = createSlice<
  PayloadWithId,
  PayloadWithId
>({
  type: "REMOVE_NOTE_BUTTON_CLICKED",
  payload: (payloadWithId) => payloadWithId,
  reducer: removeNote,
});
