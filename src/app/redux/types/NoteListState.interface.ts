import { NoteItemInterface } from "./NoteItem.interface";

export interface NoteListStateInterface {
  loaded: boolean;
  loading: boolean;
  loadingError: null | string;
  list: NoteItemInterface[];
}
