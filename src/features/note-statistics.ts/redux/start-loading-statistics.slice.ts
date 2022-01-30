import { createSlice } from "../../../common/redux/helpers/createSlice";
import { noPayload } from "../../../common/redux/helpers/noPayload";
import { patchStatisticsState } from "./ho-reducers/patch-statistics-state.reducer";

export const startLoadingStatistics = createSlice({
  type: "START_LOADING_STATISTICS",
  payload: noPayload,
  reducer: patchStatisticsState(() => ({
    loading: true,
  })),
});
