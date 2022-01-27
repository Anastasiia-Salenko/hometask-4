import { createSlice } from "../../../common/redux/helpers/createSlice";

export const showArchivedNotesButtonClicked = createSlice<undefined, undefined>(
  {
    type: "SHOW_ARCHIVED_NOTES_BUTTON_CLICKED",
    payload: () => undefined,
    reducer: (state) => ({
      ...state,
      filter: "archived",
    }),
  }
);
