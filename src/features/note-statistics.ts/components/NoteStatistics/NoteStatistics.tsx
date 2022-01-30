import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingStatistics } from "../../redux/start-loading-statistics.slice";
import { statisticsLoadingFailure } from "../../redux/statistics-loading-failure.slice";
import { statisticsLoadingSuccessfuly } from "../../redux/statistics-loading-successfuly.slice";
import { getNoteStatistics } from "../../selectors/getNoteStatistics";

const makeRequestStatisticsNotes = async () => {
  let url =
    "https://anastasiia-radency-hometask-03.herokuapp.com/notes/statistics";
  let response = await fetch(url);
  const data = await response.json();
  return data;
};

export const NoteStatistics = () => {
  const statistics = useSelector(getNoteStatistics);

  const dispatch = useDispatch();

  const loadStatistics = useCallback(async () => {
    try {
      dispatch(startLoadingStatistics.action());

      const result = await makeRequestStatisticsNotes();

      dispatch(statisticsLoadingSuccessfuly.action({ statistics: result }));
    } catch (e) {
      const error = "UNKNOWN_ERROR";
      dispatch(statisticsLoadingFailure.action({ error }));
    }
  }, [dispatch]);

  useEffect(() => {
    loadStatistics();
  }, [loadStatistics]);

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
