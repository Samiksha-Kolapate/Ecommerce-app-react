import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="spinner-container">
      <Circles
        height="180"
        width="180"
        color="#09f"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Spinner;
