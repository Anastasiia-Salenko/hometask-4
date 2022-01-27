import { CreateNoteButton } from "../../../features/create-note/components/CreateNoteButton";
import { NotesFilter } from "../../../features/filter-notes/components/NotesFilter";
import { NoteListTable } from "../../../features/note-list/components/NoteListTable";
import { NoteStatistics } from "../../../features/note-statistics.ts/components/NoteStatistics";

export function App() {
  return (
    <div className="App">
      <NotesFilter />
      <NoteListTable />
      <CreateNoteButton />
      <NoteStatistics />
    </div>
  );
}
