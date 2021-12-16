import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minutesState } from "./atom";

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  // selector를 useRecoilState로 가져오는 경우
  // const [get(),set()] = useRecoilState(selector)
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    //setHours는 atom에서 set 함수를 실행시킨다.
    setHours(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        onChange={onHoursChange}
        type="number"
        value={hours}
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
