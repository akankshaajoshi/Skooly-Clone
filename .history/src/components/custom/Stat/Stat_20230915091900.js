import React from "react";
import { useSpring, animated } from "react-spring";
import {fontSizes} from "@/assets"

function Stat({ value, label }) {
  const { number } = useSpring({
    number: value,
    from: { number: 0 },
  });

  return (
    <div className="stat" style={{fontSize: `${fontSizes.small}`, fontWeight: "600"}}>
      <animated.span>{number.interpolate((val) => val.toFixed())}</animated.span>+
      <p>{label}</p>
    </div>
  );
}

export default Stat;
