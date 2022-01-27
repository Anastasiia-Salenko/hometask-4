import { NoteItemInterface } from "./NoteItem.interface";

export interface ExistingNoteInterface extends NoteItemInterface {
  contentOriginal: string;
  categoryOriginal: string;
}
