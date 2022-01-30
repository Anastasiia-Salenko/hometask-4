import { createSlice } from "../../../common/redux/helpers/createSlice";
import { samePayload } from "../../../common/redux/helpers/samePayload";
import { patchStatisticsState } from "./ho-reducers/patch-statistics-state.reducer";

interface Payload {
  error: string;
}

export const statisticsLoadingFailure = createSlice<Payload>({
  type: "STATISTICS_LOADED_FAILURE",
  payload: samePayload,
  reducer: patchStatisticsState((statisticsState, action) => ({
    loadingError: action.payload.error,
  })),
});
