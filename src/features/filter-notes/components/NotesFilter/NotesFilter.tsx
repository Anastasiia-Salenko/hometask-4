import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showActiveNotesButtonClicked,
  showArchivedNotesButtonClicked,
} from "../../redux/action-creator";
import { getIsActiveFilterApplied } from "../../../../common/selectors/getIsActiveFilterApplied";
import { getIsArchivedFilterApplied } from "../../../../common/selectors/getIsArchivedFilterApplied";
import "./styles.css";

export const NotesFilter = () => {
  const dispatch = useDispatch();
  const isActiveFilterApplied = useSelector(getIsActiveFilterApplied);
  const isArchivedFilterApplied = useSelector(getIsArchivedFilterApplied);

  const handleActiveClicked = () => {
    dispatch(showActiveNotesButtonClicked());
  };

  const handleArchivedClicked = () => {
    dispatch(showArchivedNotesButtonClicked());
  };

  return (
    <div className="notes-filter">
      <button disabled={isActiveFilterApplied} onClick={handleActiveClicked}>
        Active
      </button>
      <button
        disabled={isArchivedFilterApplied}
        onClick={handleArchivedClicked}
      >
        Archived
      </button>
    </div>
  );
};
