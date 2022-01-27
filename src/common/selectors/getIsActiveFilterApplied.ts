import { RootStateInterface } from "../../app/redux/types/RootState.interface";

export const getIsActiveFilterApplied = (state: RootStateInterface) =>
  state.filter === "active";
