import { initialState } from "./initial-state";
import { actionHandlers as createNoteActionHandlers } from "../../features/create-note/redux/action-handlers";
import { createNoteButtonClicked } from "../../features/create-note/redux/acrion-creators";
import { RootStateInterface } from "./types/RootState.interface";
// import { actionHandlers as noteItemActionHandlers } from "../../features/note-item/redux/action-handlers";
// import { actionHandlers as filterNotesActionHandlers } from "../../features/filter-notes/redux/action-handlers";

const actionHandlers = {
  ...createNoteActionHandlers,
  // ...noteItemActionHandlers,
  // ...filterNotesActionHandlers,
};

export const rootReducer = (
  state = initialState,
  action: ReturnType<typeof createNoteButtonClicked>
): RootStateInterface => {
  const handler = actionHandlers[action.type as keyof typeof actionHandlers];

  if (!handler) {
    return state;
  }

  return handler(state, action);
};
