import React from 'react'
import Button from '@mui/material/Button';
import Error from "/img/Error.png"
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    
    <div className='pt-[5%] pb-[45%] md:pb-[2%] md:mt-[1%] mt-[16%] text-center'>
    <img src={Error } alt="error" className='md:m-auto' />
    <h1 className='font-black text-[150%] pt-[4%] pb-[1%]'>
    Страница не найдена
    </h1>
    <p className='font-mono mb-[5%]'>
    Извините, но страницу, которую Вы пытаетесь найти - не существует. Предлагаем Вам перейти на Главную страницу
    </p>
    <Link to="/">
    <Button sx={{background:"#E07153"}} variant="contained">На главную</Button>
    </Link>
    </div>
  )
}

export default NotFound