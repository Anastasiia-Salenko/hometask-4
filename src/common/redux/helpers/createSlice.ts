import { AnyAction } from "redux";
import { RootStateInterface } from "../../../app/redux/types/RootState.interface";

type OptionalArgTuple<T> = T extends undefined ? [] : [T];

interface CreateSliceArgs<ActionCreatorPayload, ActionPayload> {
  type: string;
  payload: (...params: OptionalArgTuple<ActionCreatorPayload>) => ActionPayload;
  reducer: (
    state: RootStateInterface,
    action: {
      type: string;
      payload: ActionPayload;
    }
  ) => RootStateInterface;
}

export const createSlice = <
  ActionCreatorPayload = undefined,
  ActionPayload = undefined
>({
  type,
  payload,
  reducer,
}: CreateSliceArgs<ActionCreatorPayload, ActionPayload>) => {
  const actionCreator = (...params: OptionalArgTuple<ActionCreatorPayload>) => {
    const actionPayload = payload(...params);

    return {
      type,
      payload: actionPayload,
    };
  };

  type OurActionType = ReturnType<typeof actionCreator>;

  const isCurrentActionType = (action: AnyAction): action is OurActionType => {
    return action.type === type;
  };

  const externalReducer = (state: RootStateInterface, action: AnyAction) => {
    if (isCurrentActionType(action)) {
      return reducer(state, action);
    }

    return state;
  };

  return { action: actionCreator, reducer: externalReducer };
};
