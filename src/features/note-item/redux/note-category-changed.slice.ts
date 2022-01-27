import { createSlice } from "../../../common/redux/helpers/createSlice";
import { samePayload } from "../../../common/redux/helpers/samePayload";
import { changeNote } from "./ho-reducers/change-note.reducer";
import { PayloadWithCategory } from "./types/payload-with-category.type";

export const noteCategoryChanged = createSlice<PayloadWithCategory>({
  type: "NOTE_CATEGORY_CHANGED",
  payload: samePayload,
  reducer: changeNote<PayloadWithCategory>((note, action) => ({
    ...note,
    category: action.payload.category,
  })),
});
