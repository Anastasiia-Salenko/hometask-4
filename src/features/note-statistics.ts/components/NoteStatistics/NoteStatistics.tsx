import React from "react";
import { useSelector } from "react-redux";
import { getNoteStatistics } from "../../selectors/getNoteStatistics";

export const NoteStatistics = () => {
  const statistics = useSelector(getNoteStatistics);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Note category</td>
            <td>Active</td>
            <td>Archive</td>
          </tr>
        </thead>
        <tbody>
          {statistics.map((item) => (
            <tr key={item.category}>
              <td>{item.category}</td>
              <td>{item.active}</td>
              <td>{item.archived}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
