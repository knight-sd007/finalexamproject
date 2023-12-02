import React, { useState } from "react";

function Question3() {
  const [auth, setAuth] = useState(false);

  return (
    <div
      className='mt-2 pt-3 pl-2 text-center'
      style={{ borderTop: "1px solid #999" }}>
      <div className='text-white pb-2 h4'>
        {auth ? "Data found!!" : "Data not found!!"}
      </div>
      <div className='p-4'>
        <div className='border p-4'>
          <h4 className='text-success pb-2'>Authentication Check</h4>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault1'
              defaultChecked={auth}
              onClick={() => setAuth(true)}></input>
            <label className='form-check-label' htmlFor='flexRadioDefault1'>
              Admin
            </label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='flexRadioDefault'
              id='flexRadioDefault2'
              defaultChecked={!auth}
              onClick={() => setAuth(false)}></input>
            <label className='form-check-label' htmlFor='flexRadioDefault2'>
              Customer
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question3;
