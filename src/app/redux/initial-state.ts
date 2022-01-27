import { prepopulatedNotes } from "./prepopulated-notes";
import { RootStateInterface } from "./types/RootState.interface";

export const initialState: RootStateInterface = {
  notes: prepopulatedNotes,
  filter: "active",
};
