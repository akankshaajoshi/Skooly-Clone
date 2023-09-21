import { useSpring, animated } from 'react-spring';
import { fontSizes } from '@/assets';

function Stat({ value, label }) {
  const { number } = useSpring({
    number: value,
    from: { number: 0 },
    trail: 50000,
  });

  return (
    <div
      className="stat"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p style={{ fontSize: `${fontSizes.medium}`, fontWeight: '800' }}>
        <animated.span>{number.to((val) => val.toFixed())}</animated.span>+
        {value === 15 ? 'Million' : ''}
      </p>
      <p>{label}</p>
    </div>
  );
}

export default Stat;
