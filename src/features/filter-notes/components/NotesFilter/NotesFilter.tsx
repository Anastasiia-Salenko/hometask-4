import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsActiveFilterApplied } from "../../../../common/selectors/getIsActiveFilterApplied";
import { getIsArchivedFilterApplied } from "../../../../common/selectors/getIsArchivedFilterApplied";
import { showActiveNotesButtonClicked } from "../../redux/show-active-notes-button-clicked.slice";
import { showArchivedNotesButtonClicked } from "../../redux/show-archived-notes-button-clicked.slice";
import "./styles.css";

export const NotesFilter = () => {
  const dispatch = useDispatch();
  const isActiveFilterApplied = useSelector(getIsActiveFilterApplied);
  const isArchivedFilterApplied = useSelector(getIsArchivedFilterApplied);

  const handleActiveClicked = () => {
    dispatch(showActiveNotesButtonClicked.action());
  };

  const handleArchivedClicked = () => {
    dispatch(showArchivedNotesButtonClicked.action());
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
