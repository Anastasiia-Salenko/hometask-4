import { RootStateInterface } from "../../app/redux/types/RootState.interface";

export const getIsArchivedFilterApplied = (state: RootStateInterface) =>
  state.filter === "archived";
