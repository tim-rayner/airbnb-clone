'use client';
import { DummyListingImages } from '@/temp/temp.ListingImages';

const ListingCarousel = () => {
  const imageUrls = DummyListingImages;
  return (
    <div className="h-[23rem] w-[22rem] rounded-xl overflow-hidden">
      <img
        src={imageUrls[0]}
        alt="Listing Image"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ListingCarousel;
