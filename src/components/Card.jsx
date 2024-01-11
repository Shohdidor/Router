import React from 'react'
import Button from '@mui/material/Button';


function Card( { h1 , h3 , img , p }) {
  return (
    <div className='m-auto'>
        <h1 className='text-[110%] lg:text-[150%] text-center font-black'>
            {h1}
        </h1>
        <img src={img} className='m-auto' alt="error" />
        <h3 className='font-bold pl-[12%] lg:text-[120%]'>
            {h3}
        </h3>
        <p className='text-gray-500 text-[80%] lg:text-[100%] lg:w-[80%] lg:pl-[10%]'>
            {p}
        </p>
    </div>
  )
}

export default Card


function Card2 ( {h1 , img , img2 , h3 , h2 , p , btn}) {
  return (
    <div className='pt-[5%] pb-[15%]'>
        <div className='flex items-center pl-[5%]'>
        <img src={img} alt="error" className='w-[7%]' />
        <h1 className='text-[120%] font-black pl-[5%]'>
            {h1}
        </h1>
        </div>
        <div>
            <img src={img2} alt="error" />
            <h3 className='text-[150%] font-bold pl-[5%] pt-[2%]'>
                {h3}
            </h3>
            <p className='pl-[4%] font-thin'>
                {p}
            </p>
            <div className='flex justify-between p-[5%]'>
                <h2 className='text-[150%] font-black'>
                    {h2}
                </h2>
                <Button size='small' variant="contained" sx={{background:"#E07153"}} >{btn}</Button>
            </div>
        </div>
    </div>
  )
}

export { Card2 }