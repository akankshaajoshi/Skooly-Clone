// Loader.js

import LoaderSpinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'; // Import loader styles

const Loader = ({
  type = 'ThreeDots',
  color = '#007bff',
  height = 50,
  width = 50,
}) => {
  return (
    <div className="loader-container">
      <LoaderSpinner type={type} color={color} height={height} width={width} />
    </div>
  );
};

export default Loader;
