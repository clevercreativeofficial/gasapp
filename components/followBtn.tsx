'use client'
import { useState } from 'react';

function Follow() {
  const [isFollowing, setIsFollowing] = useState(false);

  const followFunc = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div onClick={followFunc}>
      {isFollowing ? (
        // <i className="fi fi-sr-user-trust text-donkey-brown-500"></i>
        <small
          className={`text-foreground hover:text-red-500 duration-150`}
        >
          <i className="fi fi-rr-remove-user text-foreground"></i>
        </small>
      ) : (
        <i className="fi fi-rr-user-add text-foreground"></i>
      )}
    </div>
  );
}

export default Follow;