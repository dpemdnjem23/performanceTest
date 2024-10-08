import logo from "./logo.svg";
import "./App.css";
import React, { useState, useMemo, useCallback } from "react";

function App() {
  function expensiveCalculation(num) {
    console.log("Expensive calculation running...");

    // 매우 큰 배열 생성
    const bigArray = Array.from({ length: 1000000 }, (_, i) => i + 1);

    // num으로 나눠지는 숫자만 필터링
    return bigArray.filter((value) => value % num === 0);
  }
  const [num, setNum] = useState(1);
  const [otherState, setOtherState] = useState(false);

  // useMemo를 사용해 num이 바뀔 때만 값비싼 계산 실행

  // const memoizedValues = useMemo(() => {
  //   return expensiveCalculation(num);
  // }, [num]);

  //함수 그자체를 반환하기 때문에 함수를 return하는게아니라 useCallback안에 반환할 값들을 작성해줘야한다.

  // const memoizedValues = useCallback(() => {
  //   return expensiveCalculation(num);
  // }, [num]); //X

  const memoizedValues = useCallback(() => {
    setNum((prev)=>prev+1);
  }, []);

  // const memoizedValues = expensiveCalculation(num);

  console.log(memoizedValues);
  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Number: {num}</p>
      <button onClick={() => setNum(num + 1)}>Increase Number</button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State
      </button>
      <p>Filtered Values Length: {memoizedValues.length}</p>
    </div>
  );
}

export default App;
