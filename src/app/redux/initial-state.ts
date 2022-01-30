import { RootStateInterface } from "./types/RootState.interface";

export const initialState: RootStateInterface = {
  filter: "active",
  notes: {
    loaded: false,
    loading: false,
    loadingError: null,
    list: [],
  },
  statistics: {
    loaded: false,
    loading: false,
    loadingError: null,
    data: [],
  },
};
