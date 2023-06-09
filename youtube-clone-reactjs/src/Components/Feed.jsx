import React, { useContext, useEffect } from 'react';
import { Context } from '../Context/contextApi';
import LeftNav from "./LeftNav";

const Feed = () => {
  useContext(Context);
  // useEffect();
  return (
    <div className='flex flex-row h-[calc(100%-56px)]'>
      <LeftNav />
    </div>
  )
}

export default Feed