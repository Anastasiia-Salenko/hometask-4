import { CREATE_NOTE_BUTTON_CLICKED } from "./constants";
import { NOTE_CATEGORIES } from "../../../common/constants";
import { initialState } from "../../../app/redux/initial-state";
import { createNoteButtonClicked } from "./action-creators";

export const actionHandlers = {
  [CREATE_NOTE_BUTTON_CLICKED]: (
    state: typeof initialState,
    action: ReturnType<typeof createNoteButtonClicked>
  ) => {
    return {
      ...state,
      notes: [
        ...state.notes,
        {
          content: "",
          category: NOTE_CATEGORIES.TASK,
          id: action.payload.id,
          isDraft: true,
        },
      ],
    };
  },
};
