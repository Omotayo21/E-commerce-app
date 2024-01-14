import React from 'react';
import rolling from '../assets/Rolling-1s-200px.svg'

const Spinner = () => {
  return (
    <div className='flex flex-row items-center'>

      <img src={rolling} />
    </div>
  )
}

export default Spinner;
