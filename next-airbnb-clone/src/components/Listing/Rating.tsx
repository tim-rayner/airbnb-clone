'use client';

/**
 * @info this component is being used client side due to the reactivity needed for the below todo.
 * @todo on click, check if user is logged in, if not, redirect to login page
 */
const Rating = ({ rating }: { rating?: string }) => {
  return (
    <div className="items-center flex">
      <i className="pi pi-star text-black text-lg mr-2"></i>{' '}
      <span>{rating}</span>
    </div>
  );
};

export default Rating;
