import { StatisticsItemInterface } from "./StatisticsItem.interface";

export interface StatisticsStateInterface {
  loaded: boolean;
  loading: boolean;
  loadingError: null | string;
  data: StatisticsItemInterface[];
}
