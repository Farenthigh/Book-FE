import { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";

function Heart() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    console.log(`The heart is now ${isLiked ? "liked (red)" : "not liked (gray)"}`);
  }, [isLiked]);

  return (
    <button 
      onClick={handleClick} 
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer', 
        outline: 'none', 
        color: isLiked ? 'red' : 'gray',
      }}
      aria-label="Like or Unlike" 
    >
      <FaHeart size={20}/> 
    </button>
  );
}

export default Heart;
