import React from 'react';
import CreateVideo from '../_components/CreateVideo';

function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg mx-4 sm:mx-0">
        <h2 className='text-lg md:text-3xl text-center font-semibold mb-4'>Create a new short video</h2>
        <CreateVideo />
      </div>
    </div>
  );
}

export default Page;
