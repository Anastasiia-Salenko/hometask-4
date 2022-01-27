import { createSlice } from "../../../common/redux/helpers/createSlice";
import { formatDate } from "../../../utils/formatDate";
import { changeNote } from "./ho-reducers/change-note.reducer";
import { PayloadWithDate } from "./types/payload-with-date.type";
import { PayloadWithId } from "./types/payload-with-id.type";

export const saveNoteButtonClicked = createSlice<
  PayloadWithId,
  PayloadWithDate
>({
  type: "SAVE_NOTE_BUTTON_CLICKED",
  payload: ({ id }) => ({ id, date: formatDate(new Date()) }),
  reducer: changeNote<PayloadWithDate>((note, action) => ({
    ...note,
    isDraft: false,
    isEditing: false,
    created: note.created || action.payload.date,
  })),
});
