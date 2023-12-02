import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Storage/Redux/counterSlice";
import { resetFinalProject } from "../../Storage/Redux/actions";

function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();

  return (
    <div
      className='mt-2 pt-3 pl-2 text-center'
      style={{ borderTop: "1px solid #999" }}>
      <div className='text-white pb-2 h4'>Counter : {count}</div>
      <div className='p-4'>
        <div className='border p-4'>
          <h4 className='text-success pb-2'>Basic Counter</h4>
          <button
            className='btn btn-primary'
            onClick={() => dispatch(increment())}>
            Increment +5
          </button>{" "}
          &nbsp;
          <button
            className='btn btn-secondary'
            onClick={() => dispatch(decrement())}>
            Decrement -1
          </button>
          &nbsp;
          <button
            className='btn btn-warning'
            onClick={() => dispatch(resetFinalProject())}>
            Reset App
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
