import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { todoActions } from "@redux/todo/todoSlice";

const allAction = { ...todoActions };

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allAction, dispatch);
};

export default useActions;
