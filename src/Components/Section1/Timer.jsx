import React, { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      setTimer(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [start]);

  return (
    <div
      className='mt-2 pt-3 pl-2 text-center'
      style={{ borderTop: "1px solid #999" }}>
      <div className='text-white pb-2 h4'>Timer : {timer}</div>
      <div className='p-4'>
        <div className='border p-4'>
          <h4 className='text-success pb-2'>Basic Timer</h4>
          <button className='btn btn-primary' onClick={() => setStart(true)}>
            Start
          </button>
          &nbsp;
          <button className='btn btn-warning' onClick={() => setStart(false)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
