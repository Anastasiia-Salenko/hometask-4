import { RootStateInterface } from "../../../app/redux/types/RootState.interface";
import {
  SHOW_ACTIVE_NOTES_BUTTON_CLICKED,
  SHOW_ARCHIVED_NOTES_BUTTON_CLICKED,
} from "./constants";

export const actionHandlers = {
  [SHOW_ACTIVE_NOTES_BUTTON_CLICKED]: (state: RootStateInterface) => ({
    ...state,
    filter: "active",
  }),
  [SHOW_ARCHIVED_NOTES_BUTTON_CLICKED]: (state: RootStateInterface) => ({
    ...state,
    filter: "archived",
  }),
};
