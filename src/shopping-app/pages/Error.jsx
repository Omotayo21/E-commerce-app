import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <h1 className='text-center text-blue-700 font-medium text-xl mt-36'>ERROR PAGE NOT FOUND</h1>
      <button

    className="bg-blue-700 text-white border rounded-lg border-white h-12 w-48 font-bold hover:border-blue-900">
      <Link to="/shop" >Continue shopping</Link>
  </button>
    </div>
  )
}

export default Error;
