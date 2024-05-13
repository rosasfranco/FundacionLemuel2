import React from 'react'
import ngo2 from '../assets/ngo2.jpg'
import ngo3 from '../assets/ngo3.jpg'
import CardMision from '../components/CardMision';
import Button from '../components/Button';
import imgdonate from '../assets/imgDonate.jpg';

const Home = () => {
  return (
    <>
      {/* ============== Hero section ============== */}
      <>
        <section className="hero__section pt-[40px] 2xl:h-[calc(100vh-88px)]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[70px] md:gap-[90px] items-center justify-between">
              {/* ============== Hero content ============== */}
              <div>
                <div className="flex flex-col items-center justify-center md:justify-start md:items-start lg:w-[570px]">
                  <h1 className="text-center md:text-start text-[36px] leading-[46px] font-[800] md:text-[60px] text-[#181A1E] md:leading-[60px]">
                    Brindando <span className="text-[#f58634]">esperanza y apoyo</span> a la comunidad
                  </h1>

                  <p className="text__para text-center md:text-start">
                    Una organización comprometida a extender ayuda a niños y adultos en momentos difíciles.
                    Una organización comprometida a extender ayuda
                  </p>
                  <Button className={'text-white bg-[#f58634] mt-[24px]'} text="Ver más" />
                </div>
              </div>

              {/* ============== Hero content ============== */}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img className="w-full" src={ngo2} alt="" />
                </div>

                <div className="mt-[30px]">
                  <img src={ngo3} className="w-full mb-[30px]" alt="" />
                  <img src={ngo3} className="w-full" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* ============== Mision content ============== */}

      <section class=" text-black">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
          <div class="mx-auto max-w-[36rem] text-center">
            <h2 class="text-3xl font-bold sm:text-4xl text-black">Estamos En Una Misión De Ayudar</h2>
            <p class="mt-4 text-gray-600">
              Fundación Lemuel es una entidad de bien público, sin fines de lucro, creada por la iniciativa de la Pastora Viviana Safita de Villarreal, con la misión de extender ayuda en sentido social, en especial a niños y ancianos en situación de riesgo.
            </p>
          </div>
          <div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <CardMision
              title="Atención Integral a Niños"
              text="Brindamos cuidado y apoyo integral a niños en situación de riesgo, asegurando su bienestar físico, emocional y espiritual."
            />
            <CardMision
              title="Asistencia a Ancianos"
              text="Ofrecemos acompañamiento y asistencia a ancianos que se encuentran en situaciones de vulnerabilidad, proporcionando atención y cuidado personalizado."
            />
            <CardMision
              title="Desarrollo Comunitario"
              text="Trabajamos en proyectos de desarrollo comunitario para mejorar la calidad de vida de las personas en nuestras comunidades, promoviendo el bienestar y la inclusión social."
            />
          </div>
        </div>
      </section>

      {/* ============== 3er content ============== */}


      <div className="container px-6 py-8 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-bold sm:text-4xl text-black">Best place to choose <br /> your <span className="text-orange-500 ">clothes</span></h1>

              <p className="mt-3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

              <Button text={"Ver más"} className={"text-white bg-orange-500 mt-4"} />
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img className="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" />
          </div>
        </div>
      </div>

      {/* ============== 4to content ============== */}

      <section class="bg-white ">
        <div class="container px-6 py-10 mx-auto">
          <div class="text-center">
            <h1 class="text-3xl font-bold sm:text-4xl text-headingColor">Actividades Recientes</h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
              Salami mustard spice tea fridge authentic Chinese food dish salt tasty liquor. Sweet savory foodtruck
              pie.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <div class="relative">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
              </div>

              <h1 class="mt-6 text-xl font-semibold text-gray-800 ">
                What do you want to know about UI
              </h1>

              <hr class="w-32 my-3 text-orange-500" />

              <p class="text-sm text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                praesentium, alias nam? Tempore
              </p>

              <a href="#" class="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Read more</a>
            </div>

            <div>
              <div class="relative">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
              </div>

              <h1 class="mt-6 text-xl font-semibold text-gray-800 ">
                All the features you want to know
              </h1>

              <hr class="w-32 my-3 text-orange-500" />

              <p class="text-sm text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                praesentium, alias nam? Tempore
              </p>

              <a href="#" class="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Read more</a>
            </div>

            <div>
              <div class="relative">
                <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
              </div>

              <h1 class="mt-6 text-xl font-semibold text-gray-800 ">
                Which services you get from Meraki UI
              </h1>

              <hr class="w-32 my-3 text-orange-500" />

              <p class="text-sm text-gray-500 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fugit dolorum amet dolores
                praesentium, alias nam? Tempore
              </p>

              <a href="#" class="inline-block mt-4 text-orange-500 underline hover:text-orange-400">Read more</a>
            </div>
          </div>
          <div className="relative mt-8 md:mt-16 min-h-[24rem] rounded-lg bg-gradient-to-b from-black to-orange-900">
            <img className="absolute h-full w-full object-cover rounded-lg opacity-30" src={imgdonate} alt="" />
            <div className='absolute w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <p className="font-bold text-sm sm:text-xl lg:text-xl xl:text-2xl text-white my-2">¿Querés contribuir con nosotros?</p>
              <p className="text-3xl text-center lg:text-5xl sm:text-left text-white font-bold my-2">Sumate a Nuestra Causa</p>
              <p className="text-sm text-center sm:text-lg sm:text-justify text-white leading-none my-3 z-0">Tu apoyo es fundamental para continuar extendiendo nuestras manos de ayuda a quienes más lo necesitan y sustentar nuestras actividades. Cada contribución cuenta, puedes hacer la diferencia a través de Mercado Pago o contactarnos en nuestras redes sociales. También estamos disponibles en nuestra dirección.</p>
              <Button className={'text-white bg-orange-500 my-4'} text="COLABORAR" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home