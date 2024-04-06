import React from 'react'
import {Grid} from '@mui/material';
import OrderCard from './OrderCard';


const orderStatus = [
    {lable:"On The Way" , value:"On_The_Way"},
    {lable:"Delivered" , value:"delevered"},
    {lable:"Cancelled" , value:"cancelled"},
    {lable:"Returned" , value:"returned"},

]

const Order = () => {
  return (
    <div className='px:5 lg:px-20'>
        <Grid container sx={{justifyContent:"space-between"}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>

                  <h1 className='font-bold text-lg'>Filter</h1>
                  <div className='space-y-4 mt-10'>
                    <h1 className='font-semibold'> ORDER STATUS</h1>

                     {orderStatus.map((option)=>   <div className='flex items-center'>
                            <input defaultValue={option.value} type='checkbox' className='h-4 e-4 border-grey-300 text-indigo-600  focus:ring-indigo-500'/>
                            <label className='ml-3 text-sm text-grey-600' htmlFor={option.value}>
                                {option.lable}
                            </label>
                        </div>)}
                  </div> 
                </div>
            </Grid>


            <Grid item xs={9}>
            <div className='space-y-5'>
            {[1,1,1,1,1,1].map((item)=><OrderCard/>)}
            </div>
            </Grid>

        </Grid>
    </div>
  )
}

export default Order
