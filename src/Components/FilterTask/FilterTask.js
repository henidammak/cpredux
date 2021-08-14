import React from "react";
import { useDispatch } from "react-redux";
import { filterTask, filterTask1 } from "../../redux/actions/TaskActions";

const FilterTask = () => {
  const dispatch = useDispatch();
  
  const filtre = () => {
    dispatch(filterTask1());
};
  const filtr = () => {
    dispatch(filterTask());
};
  return (
    <div className="add" >
      
      <button className="filtre1" onClick={filtr}>not done</button>
      <button className="filtre2" onClick={filtre}> done</button>
    </div>
  );
};

export default FilterTask;
