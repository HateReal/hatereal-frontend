import {
  useDispatch,
  useSelector,
} from "react-redux";
import {
  DECREASE,
  INCREASE,
  RESET,
  RootState,
} from "src/modules";

export const useCounter = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return {
    counter,
    increase: () => dispatch({ type: INCREASE }),
    decrease: () => dispatch({ type: DECREASE }),
    reset: (to: number) => dispatch({ type: RESET, payload: to }),
  };
};
