import { createSlice } from "../../../common/redux/helpers/createSlice";

export const showActiveNotesButtonClicked = createSlice<undefined, undefined>({
  type: "SHOW_ACTIVE_NOTES_BUTTON_CLICKED",
  payload: () => undefined,
  reducer: (state) => ({
    ...state,
    filter: "active",
  }),
});
