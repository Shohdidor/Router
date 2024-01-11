import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar1 from "/img/navbar1.png"
import Navbar2 from "/img/navbar2.png"
import Navbar3 from "/img/navbar3.png"
import Navbar4 from "/img/navbar4.png"
import Navbar5 from "/img/navbar5.png"
import Navbar6 from "/img/navbar6.png"
import Navbar7 from "/img/navbar7.png"
import Navbar8 from "/img/navbar8.png"
import Navbar9 from "/img/navbar9.png"
import Navbar10 from "/img/navbar10.png"
import Logo from "/img/Logo.png"
import Profile from "/img/profilie.png"

import Phone from '@mui/icons-material/Phone';


function Layout() {
    let { pathname } = useLocation ()

  return (
    <div>
   <nav>
   <ul className='flex mb-[20px] text-[14px] justify-center pt-[10px] items-center gap-[5%] flex-wrap'>
            <Link to="/">
            <li className='mb-[5px]'>
            Главная
            </li>
            </Link>
            <Link to="/about">
            <li className='mb-[5px]'>
                О нас
            </li>
            </Link>

            <Link to="/contact">
            <li className='mb-[5px]'>
            Мои Заказы            
            </li>
            </Link>

            <li className='mb-[5px]'>
            Бонусы
            </li>

            <li className='mb-[5px]'>
            Вакансии
            </li>

            <li className='mb-[5px]'>
                <div className='flex items-center'>
                    <Phone />
                    <h1 className='text-[10px] font-black'>
                    +7 (495) 617-14-24
                    </h1>
                </div>
                    <p className='text-gray-600 pl-[15px]'>
                    c 10:00 до 23:00
                    </p>
            </li>
            <li>
                <img src={Profile} className='w-[70%]' alt="error" />
            </li>
        </ul>
        <div className='flex bg-slate-100'>
            <img src={Logo} alt="error"  className='w-[15%] h-[15%] mt-[-5%] md:w-[10%]'/> 
        <ul className='flex md:pt-[2%] md:flex-nowrap justify-around md:gap-[2%] md:ml-[6%] gap-[1%]'>
            <li className='w-[70%] md:w-[100%]'>
                <img src={Navbar1} alt="error" />
            </li>
            <li  className='w-[70%] md:w-[100%]'>
                <img src={Navbar2} alt="error" />
            </li>
            <li  className='w-[70%] md:w-[100%]'>
                <img src={Navbar3} alt="error" />
            </li>
            <li className='w-[70%] md:w-[100%]'>
                <img src={Navbar4} alt="error" />
            </li>
            <li className='w-[70%] md:w-[100%]'>
                <img src={Navbar5} alt="error" />
            </li>
            <li className='w-[70%] md:w-[100%]'>
                <img src={Navbar6} alt="error" />
            </li>
            <li className='w-[70%] md:w-[100%]'>
                <img src={Navbar7} alt="error" />
            </li>
            <li className='w-[70%] md:w-[100%]'>
                <img src={Navbar8} alt="error" />
            </li>
            <li className='w-[70%] md:w-[100%]'>
                <img src={Navbar9} alt="error" />
            </li>
            <li className='w-[70%] md:w-[100%]'>
                <img src={Navbar10} alt="error" />
            </li>
           
        </ul>
        
        </div></nav> 
<Outlet/>
        <div className='bg-[#1B1B1B] text-white flex'>
            <img src={Logo} alt="error" className='md:w-[10%] md:mt-[-5%] w-[20%] mt-[-10%] h-[20%]' />
            <ul className='flex text-[70%] md:text-[140%] md:w-[40%] md:pl-[5%] lg:pt-[4%] md:gap-[5%] font-black flex-wrap'>
                <li>О нас</li>
                <li>Доставка и оплата</li>
                <li>Контакты</li>
            </ul>
            <ul className='md:mt-[3%] flex text-[50%] md:text-[70%] lg:text-[100%] lg:pt-[4%] gap-[5%] pt-[2%] pl-[5%] pr-[5%] md:pt-[2%] md:flex-nowrap justify-around md:gap-[2%] md:ml-[6%] flex-wrap'>
            <Link to="/">
            <li className='w-[70%] md:w-[100%]'>
            Пицца
            </li>
            </Link>
            <Link to="/about">
            <li  className='w-[70%] md:w-[100%]'>
            Суши
            </li>
            </Link>
            <Link to="/contact">
            <li  className='w-[70%] md:w-[100%]'>
            Роллы   
            </li>
            </Link>
            <Link to="*">
            <li className='w-[70%] md:w-[100%]'>
            Сеты
            </li>
            </Link>
            <Link to="*">
            <li className='w-[70%] md:w-[100%]'>
            Wok
            </li>
            </Link>
            <Link to="*">
            <li className='w-[70%] md:w-[100%]'>
            Супы
            </li>
            </Link>
            <Link to="*">
            <li className='w-[70%] md:w-[100%]'>
            Салаты
            </li>
            </Link>
            <Link to="*">
            <li className='w-[70%] md:w-[100%]'>
            Десерты
            </li>
            </Link>
            <Link to="*">
            <li className='w-[70%] md:w-[100%]'>
            Напитки
            </li>
            </Link>
            <Link to="*">
            <li className='w-[70%] md:w-[100%]'>
            Акции
            </li>
            </Link>
        </ul>
        <div className='pb-[5%] md:pt-[4%] items-center lg:pt-[3%] pt-[2%] flex flex-wrap'>
        <h1 className='text-[65%] md:text-[90%] lg:text-[140%] lg:font-black'>
        +7 (495) 617-14-24
        </h1>
        <p className='text-[70%] text-gray-300 md:text-[80%] lg:text-[100%] pl-[7%]'>
        c 10:00 до 23:00    
        </p>
        </div>
        </div>
    </div>
  )
}

export default Layout
