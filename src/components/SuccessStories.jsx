import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const stories = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    title: "A Game-Changer For My Home!",
    text: `Switching to Solar was one of the best decisions for my family.
    Our electricity bills have dropped by nearly 70%, and we feel great knowing
    we're contributing to a cleaner planet. The team was incredibly professional,
    and the installation process was seamless. Highly recommended!`,
    name: "John Darell",
    location: "Los Angeles, CA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    title: "Reliable & Cost-Effective Solar Solution",
    text: `The entire process was smooth from consultation to installation.
    My energy costs are significantly lower now, and the system works flawlessly.`,
    name: "Michael Scott",
    location: "San Diego, CA",
  },
];

const SuccessStories = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(index === 0 ? stories.length - 1 : index - 1);
  };

  const next = () => {
    setIndex(index === stories.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

      
        <div className="text-center mb-16">
          {/* <p className="text-lime-600 text-sm font-semibold mb-3">
            // TESTIMONIALS
          </p> */}
          <h2 className="text-4xl font-bold text-gray-900">
            Success Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          
          <div className="rounded-2xl overflow-hidden">
            <img
              src={stories[index].image}
              alt="Customer"
              className="w-full h-[420px] object-cover"
            />
          </div>

          
          <div className="bg-[#F1F8E8] p-10 rounded-2xl relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {stories[index].title}
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              {stories[index].text}
            </p>

            <p className="font-semibold text-gray-900">
              {stories[index].name}
              <span className="text-gray-600 font-normal">
                {" "}
                – {stories[index].location}
              </span>
            </p>

           
            <div className="flex gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-lime-600 text-lime-600 hover:bg-lime-600 hover:text-white transition"
              >
                <HiArrowLeft />
              </button>

              <button
                onClick={next}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-lime-600 text-white hover:bg-lime-700 transition"
              >
                <HiArrowRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
