import React from 'react'
import {
  HiArrowUpRight,
} from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const Quote = () => {


    const navigate=useNavigate()


  return (
    <div>
       <section className="bg-[#F4F9E8] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-sm text-lime-700 bg-lime-100 px-4 py-1 rounded-full mb-6">
            New Energy For Our System
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#4A7C0F] mb-6">
            Get A Free Quote Today!
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Interested in switching to solar? Let’s work together to find
            the perfect solution for your home or business.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#1F3A2E] text-white px-8 py-4 rounded-full hover:bg-[#162C23] transition"
          onClick={()=>navigate('/contact')}>
            Request a Free Quote
            <span className="bg-white text-[#1F3A2E] w-6 h-6 rounded-full flex items-center justify-center">
              <HiArrowUpRight />
            </span>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Quote
