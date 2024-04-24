import React from 'react'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import foto from '../assets/imagen_0.jpg'
import foto1 from '../assets/imagen_1.jpg'

const Activities = () => {
  return (
    <div className='container mx-auto my-10'>
      <div className='grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Card img={foto1} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1" texto="Fundación Lemuel trabajando desde sus 4 areas, en esta oportunidad desde el área cultural, hemos firmado un convenio con educación para poder realizar terminalidad educativa nivel primario EPJA n° 16."></Card>
        <Card img={foto} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
        <Card img={foto1} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
        <Card img={foto} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
        <Card img={foto} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
        <Card img={foto} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
        <Card img={foto} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
        <Card img={foto} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
        <Card img={foto} link="https://www.instagram.com/p/C4ZGSaXuKUV/?img_index=1"></Card>
      </div>
      <Pagination></Pagination>
    </div>
  )
}

export default Activities