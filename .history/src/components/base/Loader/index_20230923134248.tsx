// Loader.tsx

import React, { FunctionComponent } from 'react';
import LoaderSpinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; // Import loader styles

interface LoaderProps {
  type: 'Audio' | 'BallTriangle' | 'Bars' | 'Circles' | 'Grid' | 'Hearts' | 'Oval' | 'Puff' | 'Rings' | 'TailSpin' | 'ThreeDots';
  color: string;
  height: number;
  width: number;
}

function Loader({ type = 'ThreeDots', color = '#007bff', height = 50, width = 50 }: LoaderProps) {
  return (
    <div className="loader-container">
      <LoaderSpinner type={type} color={color} height={height} width={width} />
    </div>
  );
}

export default Loader;
