import Link from 'next/link';
import Rating from './Rating';

const ListingLabel = () => {
  return (
    <div className="flex mt-1">
      <div className="details">
        <h4 className="font-semibold my-1"> Bosham, UK</h4>
        <div className="opactiy-85 text-sm my-1 mb-2">
          <p> Professional Host</p>
          <p>
            <small> 25 Oct - 1 Nov</small>
          </p>
        </div>
        <Link href="#" target="_blank" className="underline font-bold">
          {' '}
          £14,325 <span className="font-light">total</span>
        </Link>
      </div>
      <div className="rating-container w-fit ml-auto">
        <div className="ml-auto w-fit mr-2">
          <Rating rating="5.0" />
        </div>
      </div>
    </div>
  );
};

export default ListingLabel;
