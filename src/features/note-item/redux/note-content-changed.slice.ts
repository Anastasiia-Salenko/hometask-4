import { createSlice } from "../../../common/redux/helpers/createSlice";
import { samePayload } from "../../../common/redux/helpers/samePayload";
import { changeNote } from "./ho-reducers/change-note.reducer";
import { PayloadWithContent } from "./types/payload-with-content.type";

export const noteContentChanged = createSlice<PayloadWithContent>({
  type: "NOTE_CONTENT_CHANGED",
  payload: samePayload,
  reducer: changeNote<PayloadWithContent>((note, action) => ({
    ...note,
    content: action.payload.content,
  })),
});
