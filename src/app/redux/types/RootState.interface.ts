import { NoteListStateInterface } from "./NoteListState.interface";

export interface RootStateInterface {
  notes: NoteListStateInterface;
  filter: string;
}
