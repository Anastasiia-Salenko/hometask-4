import { PayloadActionInterface } from "../../../../app/redux/types/PayloadAction.interface";
import { RootStateInterface } from "../../../../app/redux/types/RootState.interface";
import { StatisticsStateInterface } from "../../../../app/redux/types/StatisticsState.interface";

export const patchStatisticsState =
  <Payload>(
    patchStatisticsStateReducer: (
      statisticsState: StatisticsStateInterface,
      action: PayloadActionInterface<Payload>
    ) => Partial<StatisticsStateInterface>
  ) =>
  (state: RootStateInterface, action: PayloadActionInterface<Payload>) => {
    const currentStatisticsState = state.statistics;
    const nextStatisticsState = {
      ...currentStatisticsState,
      ...patchStatisticsStateReducer(currentStatisticsState, action),
    };

    return {
      ...state,
      statistics: nextStatisticsState,
    };
  };
