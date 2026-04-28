import React, { useState } from 'react';

function PostCard({ id, userId, title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex flex-col justify-between bg-white p-8 rounded-lg shadow-sm border border-transparent transition-all duration-300 hover:scale-105 hover:border-special-red2 hover:bg-special-light-red">
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-lg font-bold text-center text-gray-800 leading-tight mb-2 uppercase">
          {title}
        </h2>
      </div>
      
      <div className="flex flex-col items-center mb-6">
        <p className="text-gray-500 text-sm text-center leading-relaxed">
          {body}
        </p>
      </div>

      <div className="mt-auto">
        <button
          onClick={() => setIsClicked(true)}
          className={`w-full py-2 px-4 rounded-md transition-all duration-300 font-medium text-sm text-white
            ${isClicked 
              ? 'bg-special-red2 hover:brightness-110' 
              : 'bg-gray-500 hover:bg-gray-400'
            }`}
        >
          {isClicked ? 'Tombol sudah diklik' : 'Silakan Klik'}
        </button>
      </div>
    </div>
  );
}

export default PostCard;
