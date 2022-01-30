import { createSlice } from "../../../common/redux/helpers/createSlice";
import { samePayload } from "../../../common/redux/helpers/samePayload";
import { patchNotesState } from "./ho-reducers/patch-notes-state.reducer";

interface Payload {
  error: string;
}

export const notesLoadingFailure = createSlice<Payload>({
  type: "NOTES_LOADER_FAILURE",
  payload: samePayload,
  reducer: patchNotesState((notesState, action) => ({
    loadingError: action.payload.error,
  })),
});
