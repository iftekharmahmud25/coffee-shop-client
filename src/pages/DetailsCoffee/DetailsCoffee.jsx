import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCoffeeCard from '../../componants/DetailsCoffeeCard/DetailsCoffeeCard';

const DetailsCoffee = () => {
  
    const coffees = useLoaderData();
  


    
    
    return (
        <div>
        <h1 className="text-3xl font-bold text-center">
            Your Ordered Coffee 
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-5 px-10 gap-10 '>
        {
            coffees.map(coffee => (
               
                <DetailsCoffeeCard
                key={coffee._id}
                coffee={coffee}
                
            

                >

                </DetailsCoffeeCard>
                
            ))
        }
        </div>
    </div>
    );
};

export default DetailsCoffee;