import { RootStateInterface } from "./types/RootState.interface";

export const initialState: RootStateInterface = {
  notes: {
    loaded: false,
    loading: false,
    loadingError: null,
    list: [],
  },
  filter: "active",
};
