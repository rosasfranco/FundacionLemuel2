import React from 'react'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import foto from '../assets/imagen_0.jpg'
import foto1 from '../assets/imagen_1.jpg'

const Activities = () => {
  return (
    <div className='container mx-auto my-10'>
      <div className='my-5 sm:text-center sm:max-w-md sm:mx-auto'>
        <h1 className="my-2 text-[#52658d] text-3xl font-extrabold sm:text-4xl">Latest blog posts</h1>
        <p className="my-2 text-gray-600">Blogs that are loved by the community. Updated every hour.</p>
      </div>  
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
        <div className='max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-white p-2'>
          <div className='relative'>
            <img class="object-cover object-center w-full h-52 rounded-lg" src={foto1} alt="" />
          </div>

          <h1 className='mt-6 text-xl font-semibold text-[#52658d] text-justify'>
            All the features you want to know
          </h1>
          <hr className='w-32 my-3 text-orange-500'/>
          <p className='text-sm text-[#52658d] text-justify'>
            Fundación Lemuel trabajando desde sus 4 areas, en esta oportunidad desde el área cultural,
            hemos firmado un convenio con educación para poder realizar terminalidad educativa nivel primario EPJA n° 16.
          </p>

          <a href="#" className='inline-block mt-4 text-orange-500 underline hover:text-orange-400'>Leer Más</a>
        </div>
      </div>
      <Pagination></Pagination>
    </div>
  )
}

export default Activities