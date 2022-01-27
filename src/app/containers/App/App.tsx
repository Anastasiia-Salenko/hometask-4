import { CreateNoteButton } from "../../../features/create-note/components/CreateNoteButton";
import { NotesFilter } from "../../../features/filter-notes/components/NotesFilter";
import { NoteListTable } from "../../../features/note-list/components/NoteListTable";

export function App() {
  return (
    <div className="App">
      <NotesFilter />
      <NoteListTable />
      <CreateNoteButton />
    </div>
  );
}
