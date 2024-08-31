import React, { useState, useEffect } from 'react';
import './sortingVisualiser.css';

const SortingVisualiser = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 50; i++) {
      newArray.push(randomIntFromInterval(5, 500));
    }
    setArray(newArray);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const bubbleSort = async () => {
    const arrayCopy = [...array];
    for (let i = 0; i < arrayCopy.length; i++) {
      for (let j = 0; j < arrayCopy.length - i - 1; j++) {
        if (arrayCopy[j] > arrayCopy[j + 1]) {
          let temp = arrayCopy[j];
          arrayCopy[j] = arrayCopy[j + 1];
          arrayCopy[j + 1] = temp;
          setArray([...arrayCopy]);
          await new Promise((resolve) => setTimeout(resolve, 100)); // Delay for visualization
        }
      }
    }  // Correctly close the bubbleSort function here
  };

  const selectionSort = async () => {
    const arrayCopy = [...array];
    for (let i = 0; i < arrayCopy.length - 1; i++) {
      let index = i;
      for (let j = index + 1; j < arrayCopy.length; j++) {
        if (arrayCopy[j] < arrayCopy[index]) {
          index = j;
        }
      }
      let temp = arrayCopy[index];
      arrayCopy[index] = arrayCopy[i];
      arrayCopy[i] = temp;
      setArray([...arrayCopy]);
      await new Promise((resolve) => setTimeout(resolve, 100)); // Delay for visualization
    }
  };

  return (
    <div className="array-container">
      {array.map((value, idx) => (
        <div
          className="array-bar"
          key={idx}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <button onClick={resetArray}>Generate New Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <button onClick={selectionSort}>Selection Sort</button>
    </div>
  );
};

export default SortingVisualiser;