import { NoteItemInterface } from "./NoteItem.interface";

export interface RootStateInterface {
  notes: NoteItemInterface[];
  filter: string;
}
