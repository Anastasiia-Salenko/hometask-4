import React from "react";
import { useDispatch } from "react-redux";
import { NoteItemInterface } from "../../../../app/redux/types/NoteItem.interface";
import {
  archiveNoteButtonClicked,
  editNoteButtonClicked,
  removeNoteButtonClicked,
  unarchiveNoteButtonClicked,
} from "../../redux/action-creators";
import { getDatesFromContent } from "../../selectors/getDatesFromContent";

interface Props {
  note: NoteItemInterface;
}

export const NoteViewer: React.FC<Props> = ({ note }) => {
  const dispatch = useDispatch();
  const dates = getDatesFromContent(note.content);

  const handleEditClicked = () => {
    dispatch(
      editNoteButtonClicked({
        id: note.id,
      })
    );
  };

  const handleRemoveClicked = () => {
    dispatch(
      removeNoteButtonClicked({
        id: note.id,
      })
    );
  };

  const handleArchiveClicked = () => {
    dispatch(
      archiveNoteButtonClicked({
        id: note.id,
      })
    );
  };

  const handleUnarchiveClicked = () => {
    dispatch(
      unarchiveNoteButtonClicked({
        id: note.id,
      })
    );
  };

  return (
    <tr>
      <td>{note.content}</td>
      <td>{note.category}</td>
      <td>{note.created}</td>
      <td>{dates.join(", ")}</td>
      <td>
        <button onClick={handleEditClicked}>edit</button>
        {note.isArchived ? (
          <button onClick={handleUnarchiveClicked}>restore</button>
        ) : (
          <button onClick={handleArchiveClicked}>archive</button>
        )}
        <button onClick={handleRemoveClicked}>remove</button>
      </td>
    </tr>
  );
};
