import React, { useState } from "react";
import {
    HiHome,
    HiBuildingOffice2,
    HiBattery100,
    HiBolt, HiChevronDown
} from "react-icons/hi2";
// import { HiChevronDown } from "react-icons/hi2";


const services = [
    {
        icon: <HiHome />,
        title: "Residential Solar",
        desc: "Power your home with clean energy and save on utility costs.",
    },
    {
        icon: <HiBuildingOffice2 />,
        title: "Commercial Solar",
        desc: "Optimize energy efficiency and reduce operational expenses.",
    },
    {
        icon: <HiBattery100 />,
        title: "Solar Battery Storage",
        desc: "Store energy for uninterrupted power supply.",
    },
    {
        icon: <HiBolt />,
        title: "EV Charging Stations",
        desc: "Smart solutions for electric vehicle owners.",
    },
];

const projects = [
    {
        id: "01",
        title: "Sustainable Living For A Community",
        location: "Green Haven Residences – Los Angeles, CA",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
        id: "02",
        title: "Solar-Powered Retail",
        location: "BellaMart Superstore – Houston, TX",
        image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    },
    {
        id: "03",
        title: "Off-Grid Solar Farm",
        location: "Harmony Eco Lodge – Los Angeles, CA",
        image:
            "https://images.unsplash.com/photo-1584277261846-c6a1672ed979",
    },
    {
        id: "04",
        title: "Smart Solar For Urban Infrastructure",
        location: "City Transit Hub – Los Angeles, CA",
        image:
            "https://images.unsplash.com/photo-1611365892117-00d6d5a5b40c",
    },
];

const Solutions = () => {
    const [active, setActive] = useState(null);


    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">

                {/* SECTION TITLE */}
                <div className="text-center mb-16">
                    {/* <p className="text-lime-600 text-sm font-semibold mb-3">
            // SERVICES
                    </p> */}
                    <h2 className="text-4xl font-bold text-gray-900">
                        Our Solar Solutions
                    </h2>
                </div>

    
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {services.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-lg border border-lime-500 text-lime-600 text-xl mb-4">
                                {item.icon}
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                                {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>


                <div className=" gap-14 items-start">


                <div className="space-y-6">
  {projects.map((item, index) => (
    <div
      key={item.id}
      className="border-b pb-6 cursor-pointer"
      onClick={() =>
        setActive(active === index ? null : index)
      }
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <span className="text-lime-600 mr-3">
            {item.id}
          </span>
          {item.title}
        </h3>

       
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 hidden md:block">
            {item.location}
          </span>

      
          <HiChevronDown
            className={`text-xl text-gray-600 transition-transform duration-300 ${
              active === index ? "rotate-180 text-lime-600" : ""
            }`}
          />
        </div>
      </div>

      
      {active === index && (
        <div className="mt-6 rounded-xl overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-72 object-cover"
          />
        </div>
      )}
    </div>
  ))}
</div>




                </div>
            </div>
        </section>
    );
};

export default Solutions;
