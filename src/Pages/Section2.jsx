import React, { useState } from "react";

function Section2() {
  const [sum, setSum] = useState("");
  const [even, setEven] = useState("");
  const [capSen, setCapSen] = useState("");
  const [revString, setRevString] = useState("");

  const sumArray = (arrData) => {
    let add = arrData.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    setSum(add);
  };

  const filterEvenNumbers = (arrData) => {
    let add = arrData.filter((obj) => {
      if (obj % 2 === 0) {
        return obj;
      }
      return null;
    });
    setEven(add);
  };

  const capitalizeWords = (sentence) => {
    const listWord = sentence.split(" ");
    for (let i = 0; i < listWord.length; i++) {
      listWord[i] = listWord[i][0].toUpperCase() + listWord[i].substr(1);
    }
    setCapSen(listWord.join(" "));
  };

  const reverseString = (dataString) => {
    setRevString(dataString.split("").reverse().join(""));
  };

  return (
    <div className='row text-center m-2'>
      <div className='col-md-6 col-lg-3 p-1'>
        <div className='card bg-dark'>
          <div className='card-header'>
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => sumArray([2, 4, 5, 12, 25])}>
              Question - I
            </button>
          </div>
          <div className='card-body text-white'>
            {sum !== "" ? `[2, 4, 5, 12, 25] sum of elements = ${sum}` : ""}
          </div>
        </div>
      </div>
      <div className='col-md-6 col-lg-3 p-1'>
        <div className='card bg-dark'>
          <div className='card-header'>
            <button
              type='button'
              className='btn btn-secondary'
              onClick={() => filterEvenNumbers([2, 4, 5, 12, 25])}>
              Question - II
            </button>
          </div>
          <div className='card-body text-white'>
            {even !== ""
              ? `[2, 4, 5, 12, 25] even number array = [${even}]`
              : ""}
          </div>
        </div>
      </div>
      <div className='col-md-6 col-lg-3 p-1'>
        <div className='card bg-dark'>
          <div className='card-header'>
            <button
              type='button'
              className='btn btn-success'
              onClick={() => capitalizeWords("This is a sentence.")}>
              Question - III
            </button>
          </div>
          <div className='card-body text-white'>
            {capSen !== ""
              ? `'This is a sentence.' with first letter capitalized = ${capSen}`
              : ""}
          </div>
        </div>
      </div>
      <div className='col-md-6 col-lg-3 p-1'>
        <div className='card bg-dark'>
          <div className='card-header'>
            <button
              type='button'
              className='btn btn-danger'
              onClick={() => reverseString("Accknowledge")}>
              Question - IV
            </button>
          </div>
          <div className='card-body text-white'>
            {revString !== ""
              ? `'Accknowledge' reverse string = ${revString}`
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
