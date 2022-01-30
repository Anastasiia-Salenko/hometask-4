import { StatisticsItemInterface } from "../../../app/redux/types/StatisticsItem.interface";
import { createSlice } from "../../../common/redux/helpers/createSlice";
import { samePayload } from "../../../common/redux/helpers/samePayload";
import { patchStatisticsState } from "./ho-reducers/patch-statistics-state.reducer";

interface Payload {
  statistics: StatisticsItemInterface[];
}

export const statisticsLoadingSuccessfuly = createSlice<Payload>({
  type: "STATISTICS_LOADED_SUCCESSFULY",
  payload: samePayload,
  reducer: patchStatisticsState((statisticsState, action) => ({
    data: action.payload.statistics,
  })),
});
