import { NoteItemInterface } from "../../../../app/redux/types/NoteItem.interface";
import { PayloadActionInterface } from "../../../../app/redux/types/PayloadAction.interface";
import { RootStateInterface } from "../../../../app/redux/types/RootState.interface";
import { PayloadWithId } from "../types/payload-with-id.type";

export const changeNote = <T extends PayloadWithId>(
  itemReducer: (
    note: NoteItemInterface,
    action: PayloadActionInterface<T>
  ) => NoteItemInterface
) => {
  return (state: RootStateInterface, action: PayloadActionInterface<T>) => {
    const notes = state.notes.map((item) => {
      if (item.id === action.payload.id) {
        return itemReducer(item, action);
      }

      return item;
    });

    return {
      ...state,
      notes,
    };
  };
};
