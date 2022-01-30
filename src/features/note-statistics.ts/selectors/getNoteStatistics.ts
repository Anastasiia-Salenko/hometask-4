import { RootStateInterface } from "../../../app/redux/types/RootState.interface";

export const getNoteStatistics = (state: RootStateInterface) =>
  state.statistics.data;
