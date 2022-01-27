import { createSlice } from "../../../common/redux/helpers/createSlice";
import { v4 as uuidv4 } from "uuid";
import { PayloadWithId } from "../../note-item/redux/types/payload-with-id.type";
import { NOTE_CATEGORIES } from "../../../common/constants";

export const createNoteButtonClicked = createSlice<undefined, PayloadWithId>({
  type: "CREATE_NOTE_BUTTON_CLICKED",
  payload: () => ({ id: uuidv4() }),
  reducer: (state, action) => {
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
});
