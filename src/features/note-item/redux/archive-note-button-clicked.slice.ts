import { createSlice } from "../../../common/redux/helpers/createSlice";
import { samePayload } from "../../../common/redux/helpers/samePayload";
import { changeNote } from "./ho-reducers/change-note.reducer";
import { PayloadWithId } from "./types/payload-with-id.type";

export const archiveNoteButtonClicked = createSlice<PayloadWithId>({
  type: "ARCHIVE_NOTE_BUTTON_CLICKED",
  payload: samePayload,
  reducer: changeNote((note) => ({
    ...note,
    isArchived: true,
  })),
});
