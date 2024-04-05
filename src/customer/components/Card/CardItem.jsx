import React from 'react'
import { IconButton } from '@mui/material';


const CardItem = () => {
  return (
    <div className='p-5 shodow-lg border rounded=md'>
        
        <div className='flex items-center'>

            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover' src='https://rukminim1.flixcart.com/image/300/300/xif0q/jean/s/x/8/34-printed-001-crishtaliyo-2fashion-original-imagkfk8f9z8hass.jpeg' alt=''/>

            </div>

            <div className='ml-5 space-y-1'>
                <p className='font-somibold'>Men Slim Mid Rise Black Jeans</p>
                <p className='opacity-70'>Size : L,White</p>
                <p className='opacity-70 mt-2'>Seller : Crishtaliyo 2 fashion</p>
                
                <div className='flex space-x-5 items-center text-grap-900 pt-6'>
                <p className='font-semibold'>₹199</p>
                <p className='opacity-50 line-through'>₹499</p>
                <p className='text-green-600 font-semibold'>5% Off</p>
                </div>

            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton className=''>

                    </IconButton>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default CardItem;
