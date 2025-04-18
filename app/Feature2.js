import React from 'react';
// import Image from 'next/image';

function Feature2(props) {
  return (
    props.imageWhere==2 ? (
      <div className="flex flex-col md:flex-row items-center justify-center w-full text-white px-6 md:px-20 py-16 gap-12">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {props.title}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
            {props.description}
          </p>
        </div>

        {/* Image Section */}
        <div className="">
          <img 
          src={props.image.src} 
          alt="" 
          className="rounded-xl shadow-lg max-w-[350px] w-full" />
        </div>
      </div>
    ) : (
      <div className="flex flex-col md:flex-row items-center justify-center w-full text-white px-6 md:px-20 py-16 gap-12">
        {/* Image Section */}
        <div className="">
          <img 
          src={props.image.src} 
          alt="" 
          className="rounded-xl shadow-lg max-w-[350px] w-full" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {props.title}
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
            {props.description}
          </p>
        </div>
      </div>
    )
  )
}

export default Feature2