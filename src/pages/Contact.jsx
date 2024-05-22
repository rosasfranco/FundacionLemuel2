import React from 'react'
import Button from '../components/Button'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdContact, IoMdTime } from "react-icons/io";
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <section className='py-0'>
          <PageHeader title={"Contacto"} />
      <div class="container max-w-6xl mx-auto py-6" id="contact">
        <div class=" px-4 py-8 sm:px-6 lg:px-8 lg:py-8">
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="h-full pr-6">
                <p class="mt-3 mb-12 text-lg text-gray-600">
                  Estamos aquí para responder tus preguntas, resolver tus inquietudes y brindarte el mejor
                  servicio. No dudes en contactarnos para obtener asistencia personalizada y hacer que tu
                  experiencia de compra sea aún más satisfactoria.
                </p>
                <ul class="mb-6 md:mb-0">
                  <li class="flex">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded color__resources text-gray-50">
                      <FaLocationDot size={24} className='text-[#f58634]' />
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900">Dirección
                      </h3>
                      <p class="text-gray-600">1275 San Martin</p>
                      <p class="text-gray-600">Río Gallegos, Argentina</p>
                    </div>
                  </li>
                  <li class="flex">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded color__resources text-gray-50">
                      <IoMdContact size={24} className='text-[#f58634]' />
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900">Contacto
                      </h3>
                      <p class="text-gray-600">Telefono: +54 (2966) 6549-7890</p>
                      <p class="text-gray-600">Email: ecommerce@gmail.com</p>
                    </div>
                  </li>
                  <li class="flex">
                    <div
                      class="flex h-10 w-10 items-center justify-center rounded color__resources text-gray-50">
                      <IoMdTime size={24} className='text-[#f58634]' />
                    </div>
                    <div class="ml-4 mb-4">
                      <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900">Horario
                        de atención</h3>
                      <p class="text-gray-600">Lunes - Viernes: 08:00 - 17:00</p>
                      <p class="text-gray-600">Sabados &amp; Domingos: 08:00 - 12:00</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card h-fit max-w-6xl px-5 md:p-4" id="form">
                <div class="relative rounded-lg bg-white px-8 shadow-lg sm:p-12">
                 <ContactForm />
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white container max-w-6xl mx-auto pt-6">
        <div class=" px-6 py-12">
          <div class="text-center">
            <p class="font-medium color__sub">Ubicación</p>

            <h1 class="title__main pt-2">Nuestra Ubicación</h1>

            <p class="mt-3 text-gray-500 max-w-xl  mx-auto">Estamos ubicados en el corazón de Rio Gallegos.
              ¡Visítanos en nuestros horarios de atención o contáctanos para obtener direcciones precisas y horarios
              de operación! Estamos ansiosos por recibirte y brindarte la mejor experiencia.</p>
          </div>
          <div class="overflow-hidden mt-[2rem] rounded-lg lg:col-span-2 h-96 ">
            <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact