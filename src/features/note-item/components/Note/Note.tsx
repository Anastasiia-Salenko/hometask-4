import React from "react";
import { NoteItemInterface } from "../../../../app/redux/types/NoteItem.interface";
import { NoteEditor } from "../NoteEditor/NoteEditor";
import { NoteViewer } from "../NoteViewer/NoteViewer";

interface Props {
  note: NoteItemInterface;
}

export const Note: React.FC<Props> = ({ note }) => {
  if (note.isDraft || note.isEditing) {
    return <NoteEditor note={note} />;
  }

  return <NoteViewer note={note} />;
};
