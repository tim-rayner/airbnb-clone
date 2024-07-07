'use client';

const Rating = ({ rating }: { rating?: string }) => {
  return (
    <div className="items-center flex">
      <i className="pi pi-star text-black text-lg mr-2"></i>{' '}
      <span>{rating}</span>
    </div>
  );
};

export default Rating;
