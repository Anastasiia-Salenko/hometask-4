import React from "react";
import { useSelector } from "react-redux";
import { getNotesToDisplay } from "../../selectors/getNotesToDisplay";
import { Note } from "../../../note-item/components/Note";

export const NoteListTable = () => {
  const notes = useSelector(getNotesToDisplay);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Content</td>
            <td>Category</td>
            <td>Created</td>
            <td>Dates</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {notes.map((item) => (
            <Note note={item} key={item.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
