import { NoteItemInterface } from "../../../app/redux/types/NoteItem.interface";
import { createSlice } from "../../../common/redux/helpers/createSlice";
import { samePayload } from "../../../common/redux/helpers/samePayload";
import { patchNotesState } from "./ho-reducers/patch-notes-state.reducer";

interface Payload {
  notes: NoteItemInterface[];
}

export const notesLoadedSuccessfully = createSlice<Payload>({
  type: "NOTES_LOADED_SUCCESSFULLY",
  payload: samePayload,
  reducer: patchNotesState((notesState, action) => ({
    list: action.payload.notes,
  })),
});
