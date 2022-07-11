import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DayList() {
  const [days, setDays] = useState([])
  const [count, setCount] = useState(0);

  function onclick() {
    setCount(count + 1)
  }

  function onclick2() {
    setDays([
      ...days,
      {
        id : Math.random(),
        day : 1
      }
    ])
  }

  useEffect(() =>{
    console.log("change");
  }, [count]) // [] 안에 count를 넣음으로써 count가 실행되었을 때 console를 실행함.
  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
        <li></li>
      </ul>
      <button onClick={onclick}>{count}</button>
      <button onClick={onclick2}>Day change</button>
    </>
  );
}
