import { createSlice } from "../../../common/redux/helpers/createSlice";
import { changeNote } from "./ho-reducers/change-note.reducer";
import { PayloadWithContent } from "./types/payload-with-content.type";

export const noteContentChanged = createSlice<
  PayloadWithContent,
  PayloadWithContent
>({
  type: "NOTE_CONTENT_CHANGED",
  payload: (payloadWithContent) => payloadWithContent,
  reducer: changeNote<PayloadWithContent>((note, action) => ({
    ...note,
    content: action.payload.content,
  })),
});
