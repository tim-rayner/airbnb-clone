'use client';
import { DummyListingImages } from '@/temp/temp.ListingImages';
import { useState } from 'react';

const NavigationButton = ({ direction }: { direction: 'left' | 'right' }) => {
  const icon =
    direction === 'left' ? 'pi pi-chevron-left' : 'pi pi-chevron-right';
  return (
    <div className="nav-btn bg-cloud rounded-full h-[2rem] w-[2rem] items-center content-center flex">
      <i className={`${icon} text-black m-auto`}></i>
    </div>
  );
};

const Indicator = ({ activeIndex }: { activeIndex: number }) => {
  const activeClass = 'bg-white opacity-100';
  return (
    <div className="flex flex-row mx-auto w-fit">
      {DummyListingImages.map((_, index) => (
        <div
          key={index}
          className={`h-[0.65rem] w-[0.65rem] bg-white rounded-full mx-1  ${
            activeIndex === index ? activeClass : 'opacity-75'
          }`}
        >
          &nbsp;
        </div>
      ))}
    </div>
  );
};

const ListingCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState(DummyListingImages);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="h-[23rem] w-[22rem] rounded-xl overflow-hidden relative">
      <img
        src={images[activeIndex]}
        alt="Listing Image"
        className="object-cover w-full h-full"
      />
      <div
        className="absolute left-4 top-0 bottom-0 z-40 content-center items-center nav-btn-container"
        onClick={prev}
      >
        <NavigationButton direction="left" />
      </div>
      <div
        className="absolute right-4 top-0 bottom-0 h-full z-40 content-center items-center nav-btn-container"
        onClick={next}
      >
        <NavigationButton direction="right" />
      </div>
      <div className="absolute bottom-1 w-full text-white text-center py-1">
        <Indicator activeIndex={activeIndex} />
      </div>
    </div>
  );
};

export default ListingCarousel;
