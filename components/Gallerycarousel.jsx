'use client'
import React from 'react'
import { data } from '../constants/gallery_img';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from 'next/image';

const Gallerycarousel = () => {
  const LeftIcon = () => <MdChevronLeft size={50} className='text-black' />;
  const RightIcon = () => <MdChevronRight size={50} className='text-black' />;
  // Inside your component
const slideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft - 500;
};

const slideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + 500;
};

return (
  <div className=' pb-10 bg-gray-100'>
    <div className='text-white ml-12'>
      <h1 className='text-4xl text-black font-serif text-center mb-5'>Project Gallery!</h1>
    </div>
    <div className='relative flex items-center'>
      <div
        className='opacity-50 cursor-pointer hover:opacity-100'
        onClick={slideLeft}
      >
        <LeftIcon />
      </div>
      <div
        id='slider'
        className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
      >
        {data.map((item) => (
          <Image
            key={item.id}
            className=' inline-block p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 shadow-md rounded-lg'
            src= {item.img}
            width={380}
            height={100}
            alt='/'
          />
        ))}
      </div>
      <div
        className='opacity-50 cursor-pointer hover:opacity-100'
        onClick={slideRight}
      >
        <RightIcon />
      </div>
    </div>
  </div>
);

}
export default Gallerycarousel
