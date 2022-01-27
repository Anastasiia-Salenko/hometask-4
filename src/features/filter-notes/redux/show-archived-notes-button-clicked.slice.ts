import { createSlice } from "../../../common/redux/helpers/createSlice";
import { noPayload } from "../../../common/redux/helpers/noPayload";

export const showArchivedNotesButtonClicked = createSlice({
  type: "SHOW_ARCHIVED_NOTES_BUTTON_CLICKED",
  payload: noPayload,
  reducer: (state) => ({
    ...state,
    filter: "archived",
  }),
});
