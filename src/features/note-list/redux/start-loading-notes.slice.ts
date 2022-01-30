import { createSlice } from "../../../common/redux/helpers/createSlice";
import { noPayload } from "../../../common/redux/helpers/noPayload";
import { patchNotesState } from "./ho-reducers/patch-notes-state.reducer";

export const startLoadingNotes = createSlice({
  type: "START_LOADING_NOTES",
  payload: noPayload,
  reducer: patchNotesState(() => ({
    loading: true,
  })),
});
