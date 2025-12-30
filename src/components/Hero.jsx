import heroImg from "../assets/hero.jpg";     
import videoImg from "../assets/hero.jpg"; 

const Hero = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        
        <div>
       
          <span className="inline-block mb-6 rounded-full bg-[#f5ffe8] px-4 py-2 text-sm font-medium text-black">
            New Energy For Our System
          </span>

          
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
           <span className="text-[#518151]">Clean</span>   Renewable <br />
            Limitless <span className="text-[#518151]">Energy</span>
          </h1>

         
          <p className="mt-6 text-gray-500 max-w-lg">
            Switch to solar with Solvix and experience cost savings, energy
            independence, and a greener future.
          </p>

          
          <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#033803] px-6 py-4 text-white font-medium hover:bg-green-800 transition">
            Get Free Consultation
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-700">
              ↗
            </span>
          </button>

        
          <div className="mt-12 grid grid-cols-3 gap-6 rounded-2xl bg-[#f5ffe8] px-8 py-6">
            <div>
              <h3 className="text-2xl font-bold text-green-700">10k+</h3>
              <p className="text-sm text-gray-500">Solar Installations</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-700">100k</h3>
              <p className="text-sm text-gray-500">Tons of CO₂ Reduced</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-700">70%</h3>
              <p className="text-sm text-gray-500">Up to Savings</p>
            </div>
          </div>
        </div>

        
        <div className="relative">
          
          <img
            src={heroImg}
            alt="Renewable Energy"
            className="w-full rounded-xl object-cover"
          />

          
          <div className="absolute bottom-5 right-5 w-64 rounded-2xl bg-white shadow-lg p-3">
            <div className="relative">
              <img
                src={videoImg}
                alt="Solar Video"
                className="rounded-xl"
              />

              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-white text-lg cursor-pointer">
                  ▶
                </div>
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-600">
              Unlock the power of solar energy and enjoy long-term benefits.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
