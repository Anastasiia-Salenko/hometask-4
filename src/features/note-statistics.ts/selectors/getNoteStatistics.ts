import { RootStateInterface } from "../../../app/redux/types/RootState.interface";
import { NOTE_CATEGORIES } from "../../../common/constants";

export const getNoteStatistics = (state: RootStateInterface) => {
  return [
    {
      category: NOTE_CATEGORIES.TASK,
      active: state.notes.list.filter(
        (item) => item.category === NOTE_CATEGORIES.TASK && !item.isArchived
      ).length,
      archived: state.notes.list.filter(
        (item) => item.category === NOTE_CATEGORIES.TASK && item.isArchived
      ).length,
    },
    {
      category: NOTE_CATEGORIES.IDEA,
      active: state.notes.list.filter(
        (item) => item.category === NOTE_CATEGORIES.IDEA && !item.isArchived
      ).length,
      archived: state.notes.list.filter(
        (item) => item.category === NOTE_CATEGORIES.IDEA && item.isArchived
      ).length,
    },
    {
      category: NOTE_CATEGORIES.RANDOM_THOUGHT,
      active: state.notes.list.filter(
        (item) =>
          item.category === NOTE_CATEGORIES.RANDOM_THOUGHT && !item.isArchived
      ).length,
      archived: state.notes.list.filter(
        (item) =>
          item.category === NOTE_CATEGORIES.RANDOM_THOUGHT && item.isArchived
      ).length,
    },
  ];
};
