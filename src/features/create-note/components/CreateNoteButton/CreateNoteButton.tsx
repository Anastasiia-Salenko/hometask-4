import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIsArchivedFilterApplied } from "../../../../common/selectors/getIsArchivedFilterApplied";
import { createNoteButtonClicked } from "../../redux/action-creators";

export const CreateNoteButton = () => {
  const dispatch = useDispatch();
  const isArchivedFilterApplied = useSelector(getIsArchivedFilterApplied);

  const handleButtonClick = () => {
    dispatch(createNoteButtonClicked());
  };

  return (
    <button onClick={handleButtonClick} disabled={isArchivedFilterApplied}>
      Create note
    </button>
  );
};
