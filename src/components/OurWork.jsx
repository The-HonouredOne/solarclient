import React from "react";

const OurWork = () => {
  return (
    <section className="bg-[#1F3A2E] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        
        <div>
          {/* <p className="text-lime-400 text-sm font-semibold mb-4">
            // OUR WORK
          </p> */}

          <h2 className="text-4xl font-bold text-white leading-tight mb-16">
            Switching To Solar <br /> In 3 Easy Steps
          </h2>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

            
            <div className="relative">
              <p className="text-lime-400 font-semibold mb-3">
                01 Consultation
              </p>
              <p className="text-gray-300 text-sm">
                Get a free energy audit and custom solar solution.
              </p>

             
              <span className="hidden md:block absolute top-0 -right-6 h-full border-r border-dashed border-lime-400/40" />
            </div>

        
            <div className="relative">
              <p className="text-lime-400 font-semibold mb-3">
                02 Installation
              </p>
              <p className="text-gray-300 text-sm">
                Our expert team ensures a smooth and quick installation.
              </p>

           
              <span className="hidden md:block absolute top-0 -right-6 h-full border-r border-dashed border-lime-400/40" />
            </div>

            
            <div>
              <p className="text-lime-400 font-semibold mb-3">
                03 Savings Begin
              </p>
              <p className="text-gray-300 text-sm">
                Enjoy reduced energy bills and sustainable living.
              </p>
            </div>

          </div>
        </div>

       
        <div className="grid grid-cols-2 gap-4">

         
          <div className="row-span-2 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
              alt="Wind Energy"
              className="w-full h-full object-cover"
            />
          </div>

       
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://imgs.search.brave.com/FE_SoeouDGB6xDADKYzQKaTnrepSVlSGOPdKZO89Ork/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA3/Mzk5NTMzMi9waG90/by9zb2xhci1wYW5l/bC1vbi10aGUtcm9v/Zi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9RW8tdXNscWox/SlVTYmdvOG1Qa0tT/WkRDakRNalZKMGRz/bUZVUTJrLWhVcz0"
              alt="Solar Building"
              className="w-full h-full object-cover"
            />
          </div>

     
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
              alt="Green Energy"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurWork;
