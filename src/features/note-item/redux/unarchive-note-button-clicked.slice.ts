import { createSlice } from "../../../common/redux/helpers/createSlice";
import { changeNote } from "./ho-reducers/change-note.reducer";
import { PayloadWithId } from "./types/payload-with-id.type";

export const unarchiveNoteButtonClicked = createSlice<
  PayloadWithId,
  PayloadWithId
>({
  type: "UNARCHIVE_NOTE_BUTTON_CLICKED",
  payload: (payloadWithId) => payloadWithId,
  reducer: changeNote((note) => ({
    ...note,
    isArchived: false,
  })),
});
