import { createSlice } from "../../../common/redux/helpers/createSlice";
import { changeNote } from "./ho-reducers/change-note.reducer";
import { PayloadWithCategory } from "./types/payload-with-category.type";

export const noteCategoryChanged = createSlice<
  PayloadWithCategory,
  PayloadWithCategory
>({
  type: "NOTE_CATEGORY_CHANGED",
  payload: (payloadWithCategory) => payloadWithCategory,
  reducer: changeNote<PayloadWithCategory>((note, action) => ({
    ...note,
    category: action.payload.category,
  })),
});
