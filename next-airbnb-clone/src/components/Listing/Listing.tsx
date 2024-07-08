import ListingCarousel from './Carousel';
import FavouriteButton from './FavouriteButton';
import ListingLabel from './Label';
import './styles.css';

const Listing = () => {
  return (
    <div className="cursor-pointer relative">
      <ListingCarousel />
      <ListingLabel />
      <div className="absolute top-3 right-2">
        <FavouriteButton />
      </div>
    </div>
  );
};

export default Listing;
