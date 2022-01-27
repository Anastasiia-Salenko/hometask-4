import React from "react";
import { useDispatch } from "react-redux";
import { NoteItemInterface } from "../../../../app/redux/types/NoteItem.interface";
import { NOTE_CATEGORIES } from "../../../../common/constants";
import {
  cancelEditNoteButtonClicked,
  noteCategoryChanged,
  noteContentChanged,
  saveNoteButtonClicked,
} from "../../redux/action-creators";
import { getDatesFromContent } from "../../selectors/getDatesFromContent";

interface Props {
  note: NoteItemInterface;
}

export const NoteEditor: React.FC<Props> = ({ note }) => {
  const dispatch = useDispatch();
  const dates = getDatesFromContent(note.content);

  const handleChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      noteContentChanged({
        id: note.id,
        content: event.target.value,
      })
    );
  };

  const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      noteCategoryChanged({
        id: note.id,
        category: event.target.value,
      })
    );
  };

  const handleSaveClicked = () => {
    dispatch(
      saveNoteButtonClicked({
        id: note.id,
      })
    );
  };

  const handleCancelClicked = () => {
    dispatch(
      cancelEditNoteButtonClicked({
        id: note.id,
      })
    );
  };

  return (
    <tr>
      <td>
        <input value={note.content} onChange={handleChangeContent} />
      </td>
      <td>
        <select value={note.category} onChange={handleChangeCategory}>
          {Object.values(NOTE_CATEGORIES).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </td>
      <td>{note.created}</td>
      <td>{dates}</td>
      <td>
        <button onClick={handleSaveClicked}>save</button>
        <button onClick={handleCancelClicked}>cancel</button>
      </td>
    </tr>
  );
};
