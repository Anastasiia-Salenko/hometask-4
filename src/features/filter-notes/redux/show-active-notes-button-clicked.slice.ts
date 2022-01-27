import { createSlice } from "../../../common/redux/helpers/createSlice";
import { noPayload } from "../../../common/redux/helpers/noPayload";

export const showActiveNotesButtonClicked = createSlice({
  type: "SHOW_ACTIVE_NOTES_BUTTON_CLICKED",
  payload: noPayload,
  reducer: (state) => ({
    ...state,
    filter: "active",
  }),
});
