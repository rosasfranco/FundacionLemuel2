import React from 'react'
import { FaRobot } from "react-icons/fa";

const CardMision = ({text, title}) => {
  return (
    <div
        class="block rounded-xl border border-orange-100 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-500/10"
      >
        <FaRobot size={44} className=' text-orange-500'/>
        <h2 class="mt-4 text-xl font-bold text-black">{title}</h2>
        <p class="mt-1 text-sm text-gray-600">
          {text}
        </p>
      </div>
  )
}

export default CardMision