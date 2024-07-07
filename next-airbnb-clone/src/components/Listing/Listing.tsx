import ListingCarousel from "./Carousel";
import ListingLabel from "./Label";


const Listing = () => {
  return (
    <div className="cursor-pointer">
      <ListingCarousel />
      <ListingLabel />
    </div>
  );
};

export default Listing;