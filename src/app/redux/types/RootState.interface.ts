import { NoteListStateInterface } from "./NoteListState.interface";
import { StatisticsStateInterface } from "./StatisticsState.interface";

export interface RootStateInterface {
  filter: string;
  notes: NoteListStateInterface;
  statistics: StatisticsStateInterface;
}
