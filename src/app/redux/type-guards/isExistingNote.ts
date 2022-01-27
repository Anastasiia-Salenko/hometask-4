import { ExistingNoteInterface } from "../types/ExistingNoteItem.interface";
import { NoteItemInterface } from "../types/NoteItem.interface";

export function isExistingNote(
  note: NoteItemInterface
): note is ExistingNoteInterface {
  return !note.isDraft;
}
