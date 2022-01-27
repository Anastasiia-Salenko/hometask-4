import { isExistingNote } from "../../../app/redux/type-guards/isExistingNote";
import { createSlice } from "../../../common/redux/helpers/createSlice";
import { samePayload } from "../../../common/redux/helpers/samePayload";
import { changeNote } from "./ho-reducers/change-note.reducer";
import { removeNote } from "./ho-reducers/remove-note.reducer";
import { PayloadWithId } from "./types/payload-with-id.type";

export const cancelEditNoteButtonClicked = createSlice<PayloadWithId>({
  type: "CANCEL_EDIT_NOTE_BUTTON_CLICKED",
  payload: samePayload,
  reducer: (state, action) => {
    const foundNote = state.notes.find((item) => item.id === action.payload.id);

    if (!foundNote) {
      throw new Error(`No note found with id ${action.payload.id}`);
    }

    const reducer = isExistingNote(foundNote)
      ? changeNote(() => ({
          ...foundNote,
          content: foundNote.contentOriginal,
          category: foundNote.categoryOriginal,
          isEditing: false,
        }))
      : removeNote;

    return reducer(state, action);
  },
});
