import React from "react";
import { useSpring, animated } from "react-spring";
import {fontSizes} from "@/assets"

function Stat({ value, label }) {
  const { number } = useSpring({
    number: value,
    from: { number: 0 },
    trail: 150,
  });

  return (
    <div className="stat">
      <p style={{fontSize: `${fontSizes.small}`, fontWeight: "800"}}>
      <animated.span>{number.interpolate((val) => val.toFixed())}</animated.span>+
      </p>
      <p>{label}</p>
    </div>
  );
}

export default Stat;
