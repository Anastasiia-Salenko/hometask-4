import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotesToDisplay } from "../../selectors/getNotesToDisplay";
import { Note } from "../../../note-item/components/Note";
import { startLoadingNotes } from "../../redux/start-loading-notes.slice";
import { notesLoadedSuccessfully } from "../../redux/notes-loaded-successfully.slice";
import { NoteItemInterface } from "../../../../app/redux/types/NoteItem.interface";
import { notesLoadingFailure } from "../../redux/notes-loading-failure.slice";

const makeRequest = async () => {
  let url = "https://anastasiia-radency-hometask-03.herokuapp.com/notes";
  let response = await fetch(url);
  const data = await response.json();

  return data as NoteItemInterface[];
};

export const NoteListTable = () => {
  const notes = useSelector(getNotesToDisplay);
  const dispatch = useDispatch();

  const loadNotes = useCallback(async () => {
    try {
      dispatch(startLoadingNotes.action());

      const result = await makeRequest();

      dispatch(notesLoadedSuccessfully.action({ notes: result }));
    } catch (e) {
      console.log(e);
      const error = "UNKNOWN_ERROR";
      dispatch(notesLoadingFailure.action({ error }));
    }
  }, [dispatch]);

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

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
