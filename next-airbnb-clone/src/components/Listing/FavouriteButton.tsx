'use client';

import { useState } from 'react';

/**
 * @info this component is being used client side due to the reactivity needed for the below todo.
 * @todo on click, check if user is logged in, if not, redirect to login page
 */
const FavouriteButton = ({ rating }: { rating?: string }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const textColour = isFavourite ? 'text-red-500' : 'text-black';

  const toggleFavourite = () => {
    setIsFavourite((prev) => !prev);
  };

  return (
    <div className="fav-button opacity-75 z-50" onClick={toggleFavourite}>
      <i className={`pi pi-heart-fill text-2xl mr-2 ${textColour}`}></i>
    </div>
  );
};

export default FavouriteButton;
