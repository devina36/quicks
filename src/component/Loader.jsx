import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loader = ({ teks }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <ColorRing
        colors={['#c4c4c4', '#c4c4c4', '#c4c4c4', '#c4c4c4', '#c4c4c4']}
        visible={true}
        height="130"
        width="130"
      />
      <span className="text-primary-gray mt-1">Loading {teks}...</span>
    </div>
  );
};

export default Loader;
