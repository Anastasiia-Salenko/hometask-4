import { NoteItemInterface } from "../../../app/redux/types/NoteItem.interface";
import { RootStateInterface } from "../../../app/redux/types/RootState.interface";

export const getNotesToDisplay = (state: RootStateInterface) => {
  const filterCondition =
    state.filter === "active"
      ? (item: NoteItemInterface) => !item.isArchived
      : (item: NoteItemInterface) => item.isArchived;

  return state.notes.list.filter(filterCondition);
};
