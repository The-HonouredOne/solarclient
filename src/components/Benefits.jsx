import React from "react";
import {
  HiCurrencyDollar,
  HiBolt,
  HiGlobeAlt,
  HiHome,
} from "react-icons/hi2";


const benefits = [
  {
    icon: <HiCurrencyDollar />,
    title: "Significant Cost Savings",
    desc: "Reduce your electricity bills by up to 70% with solar power.",
  },
  {
    icon: <HiBolt />,
    title: "Energy Independence",
    desc: "Break free from unpredictable utility rates and power outages.",
  },
  {
    icon: <HiGlobeAlt />,
    title: "Eco-Friendly Solution",
    desc: "Lower carbon emissions and promote a cleaner planet.",
  },
  {
    icon: <HiHome />,
    title: "Increased Property Value",
    desc: "Homes with solar panels sell faster and at higher prices.",
  },
];


const Benefits = () => {
  return (
    <section className="bg-[#1F3A2E] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        
        <div>
          {/* <p className="text-lime-400 text-sm font-semibold mb-4">
            // BENEFITS
          </p> */}

          <h2 className="text-4xl font-bold text-white leading-tight mb-6">
            The Benefits Of <br /> Going Solar With Solvix
          </h2>

          <p className="text-gray-300 max-w-md">
            Unlock the power of solar energy and enjoy long-term advantages.
          </p>
        </div>

        
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
            alt="Solar Panels"
            className="rounded-xl shadow-lg object-cover w-full max-w-md"
          />
        </div>

       
        <div className="space-y-6">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              
             
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-lime-400 text-[#1F3A2E] text-xl">
                {item.icon}
              </div>

              
              <div>
                <h4 className="text-white font-semibold text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm mt-1">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
