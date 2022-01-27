import { PayloadActionInterface } from "../../../../app/redux/types/PayloadAction.interface";
import { RootStateInterface } from "../../../../app/redux/types/RootState.interface";
import { PayloadWithId } from "../types/payload-with-id.type";

export const removeNote = (
  state: RootStateInterface,
  action: PayloadActionInterface<PayloadWithId>
) => {
  const notes = state.notes.filter((item) => item.id !== action.payload.id);

  return {
    ...state,
    notes,
  };
};
