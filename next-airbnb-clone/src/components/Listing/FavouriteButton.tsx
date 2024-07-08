'use client';

/**
 * @info this component is being used client side due to the reactivity needed for the below todo.
 * @todo on click, check if user is logged in, if not, redirect to login page
 */
const FavouriteButton = ({ rating }: { rating?: string }) => {
  return (
    <div className="fav-button opacity-75 z-50">
      <i className="pi pi-heart-fill text-black text-2xl mr-2"></i>
    </div>
  );
};

export default FavouriteButton;
