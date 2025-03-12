import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date()); // 1초마다 새로운 시간
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  return (
    <div>
      <h2>현재 시간은: {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
