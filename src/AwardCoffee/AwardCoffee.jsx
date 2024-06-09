import React from 'react';
import img from '../../public/images/coffee3jpg.jpg'

const AwardCoffee = () => {
    return (
        <div className="mt-3">
            <div className="lg:flex lg:items-center lg:gap-4 gap-7  text-white ">
                 <div className='bg-pink-400 lg:p-11 rounded-full lg:text-xl text-sm px-7 lg:px-0 '>
                   <p>We create positive change through our products and relationships around the world that inspire you to help us make a meaningful impact with every cup of coffee we pour.</p>
                 </div>
                 <div className=''>
                    <img className='lg:h-[500px] lg:w-[500px] h-[300px] w-[300px] mx-auto object-contain rounded-full lg:mr-9' src={img} alt="" />
                 </div>
            </div>
        </div>
    );
};

export default AwardCoffee;
