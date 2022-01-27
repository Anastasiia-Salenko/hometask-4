import { initialState } from "./initial-state";
import { actionHandlers as createNoteActionHandlers } from "../../features/create-note/redux/action-handlers";
import { RootStateInterface } from "./types/RootState.interface";
import { actionHandlers as noteItemActionHandlers } from "../../features/note-item/redux/actions-handler";
import { PayloadActionInterface } from "./types/PayloadAction.interface";
import { PayloadWithId } from "../../features/note-item/redux/types/payload-with-id.type";
import { PayloadWithDate } from "../../features/note-item/redux/types/payload-with-date.type";
import { PayloadWithContent } from "../../features/note-item/redux/types/payload-with-content.type";
import { PayloadWithCategory } from "../../features/note-item/redux/types/payload-with-category.type";
import { actionHandlers as filterNotesActionHandlers } from "../../features/filter-notes/redux/action-handlers";

const actionHandlers = {
  ...createNoteActionHandlers,
  ...noteItemActionHandlers,
  ...filterNotesActionHandlers,
};

export const rootReducer = (
  state = initialState,
  action: PayloadActionInterface<
    PayloadWithId | PayloadWithDate | PayloadWithContent | PayloadWithCategory
  >
): RootStateInterface => {
  const handler = actionHandlers[action.type as keyof typeof actionHandlers];

  if (!handler) {
    return state;
  }

  return handler(state, action as any);
};
