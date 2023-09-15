import React from "react";
import { useSpring, animated } from "react-spring";

function Stat({ value, label }) {
  const { number } = useSpring({
    number: value,
    from: { number: 0 },
  });

  return (
    <div className="stat">
      <animated.span>{number.interpolate((val) => val.toFixed())}+</animated.span>
      <p>{label}</p>
    </div>
  );
}

export default Stat;
