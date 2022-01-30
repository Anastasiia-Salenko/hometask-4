import { NoteListStateInterface } from "../../../../app/redux/types/NoteListState.interface";
import { PayloadActionInterface } from "../../../../app/redux/types/PayloadAction.interface";
import { RootStateInterface } from "../../../../app/redux/types/RootState.interface";

export const patchNotesState =
  <Payload>(
    patchNotesStateReducer: (
      notesState: NoteListStateInterface,
      action: PayloadActionInterface<Payload>
    ) => Partial<NoteListStateInterface>
  ) =>
  (state: RootStateInterface, action: PayloadActionInterface<Payload>) => {
    const currentNotesState = state.notes;
    const nextNotesState = {
      ...currentNotesState,
      ...patchNotesStateReducer(currentNotesState, action),
    };

    return {
      ...state,
      notes: {
        ...nextNotesState,
      },
    };
  };
