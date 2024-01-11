import React from 'react'
import IMG from "/img/IMG.png"
import Card from '../../components/Card'
import { Card2 } from '../../components/Card'
import Ic from "/img/ic.png"
import Ic2 from "/img/ic2.png"
import Ic3 from "/img/ic3.png"
import Ic4 from "/img/ic4.png"
import Group from "/img/Group.png"
import Group2 from "/img/Group2.png"
import Photo from "/img/Photo1.png"
import Photo2 from "/img/Photo2.png"
import Photo3 from "/img/Photo3.png"
function Home() {
  return (
    <div>

    <div className='flex pb-[5%]'>
        <div className='lg:pl-[10%]'>
            <h1 className='text-[150%] pl-[5%] pt-[5%] font-black md:pb-[2%] md:text-[250%]'>
            Калифорния в подарок  при первом заказе
            </h1>
            <p className='pl-[5%] text-gray-600 md:text-[150%]'>
            от 1500 ₽ 
            </p>
            <h2 className='bg-[#E07153] mt-[5%] md:w-[25%] ml-[2%] w-[30%] text-center py-[10%] text-white rounded-[50%]'>
            Подробнее
            </h2>
        </div>
        <div className='w-[80%] md:w-[50%]'>
            <img src={IMG} alt="error" />
        </div>
    </div>
     <div className='flex flex-wrap justify-around'>
        <Card  h1={"Бесплатная"} h3={"доставка"} p={"при заказе от 600 ₽ "} img={Ic}/>
        <Card  h1={"Доставим"} h3={"за 60 мин"} p={"или проморол за опоздание"} img={Ic2}/>
        <Card  h1={"Подарим"} h3={"бонусы"} p={"бонусная система 1 ₽ = 1 бонус"} img={Ic3}/>
        <Card  h1={"Свежие"} h3={"продукты"} p={"Никаких заготовок!"} img={Ic4}/>
     </div>
     <div className='md:flex md:pl-[10%] md:items-center md:gap-[5%]'>
     <Card2 img={Group} img2={Photo} h1={"Топ позиции"} h2={"219 ₽ "} btn={"Заказать"} h3={"Ролл 'Филадельфия'"} p={"Лосось, сыр 'Филадельфия', огурец, авокадо   "}/>
     <Card2 img={Group2} img2={Photo2} h1={"Топ позиции"} h2={"200 ₽ "} btn={"Заказать"} h3={"Ролл 'Сливочная креветка'"} p={"Лосось, сыр 'Филадельфия', огурец, авокадо   "}/>
     <Card2 img={Group2} img2={Photo} h1={"Топ позиции"} h2={"200 ₽ "} btn={"Заказать"} h3={"Ролл 'Сливочная креветка'"} p={"Лосось, сыр 'Филадельфия', огурец, авокадо   "}/>
     </div>

    </div>
    
  )
}

export default Home