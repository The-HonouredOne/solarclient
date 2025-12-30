import React from "react";
import {
  HiCheckCircle,
  HiDocumentCheck,
  HiCurrencyRupee,
  HiBolt,
  HiShieldCheck,
} from "react-icons/hi2";

const schemes = [
  {
    title: "Rooftop Solar Subsidy Scheme",
    desc: "Central government subsidy for residential rooftop solar installations.",
    subsidy: "Up to 40%",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276",
  },
  {
    title: "PM Surya Ghar Yojana",
    desc: "A flagship government scheme to promote solar-powered homes across India.",
    subsidy: "Up to ₹78,000",
    image:
      "https://bluebirdsolar.com/cdn/shop/articles/pm-suryaghar-yojana_26c5f554-6ecb-46b4-a311-78c027dcf7dc.jpg?v=1754552090",
  },
  {
    title: "State Solar Subsidy Scheme",
    desc: "Additional benefits provided by respective state governments.",
    subsidy: "Varies by State",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d",
  },
];

const eligibility = [
  "Residential electricity connection",
  "Shadow-free rooftop space",
  "Grid-connected solar system",
  "Installation through government-approved vendor (that’s us)",
];

const Schemes = () => {
  return (
    <section className="bg-white">

    
      <div className="bg-[#1F3A2E] py-28 px-6 text-center">
        {/* <p className="text-lime-400 text-sm font-semibold mb-4">
          // GOVERNMENT SOLAR SCHEMES
        </p> */}

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Government Solar Subsidy <br /> With Zero Paperwork
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto mb-10">
          Switch to solar under official government schemes and save big.
          <br />
          <strong className="text-white">
            We handle 100% of the documentation, approvals, and subsidy process —
            you don’t have to worry about paperwork at all.
          </strong>
        </p>

        {/* <button className="bg-lime-500 text-[#1F3A2E] px-8 py-4 rounded-full font-semibold hover:bg-lime-400 transition">
          Check Eligibility for Free
        </button> */}
      </div>

      
      <div className="bg-[#F4F9E8] py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <HiShieldCheck className="text-lime-600 text-2xl" />
            <p className="font-medium">Government-Approved Vendor</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <HiDocumentCheck className="text-lime-600 text-2xl" />
            <p className="font-medium">100% Paperwork Managed by Us</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <HiCurrencyRupee className="text-lime-600 text-2xl" />
            <p className="font-medium">Subsidy Directly to Your Bank</p>
          </div>
        </div>
      </div>

      <div className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Available Government Solar Schemes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {schemes.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 hover:shadow-lg transition"
            >
            
              <div className="rounded-xl overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 object-cover"
                />
              </div>

              <HiBolt className="text-lime-600 text-3xl mb-4" />

              <h3 className="font-semibold text-lg mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {item.desc}
              </p>

              <p className="text-lime-600 font-semibold">
                Subsidy: {item.subsidy}
              </p>
            </div>
          ))}
        </div>
      </div>

   
      <div className="bg-[#F4F9E8] py-24 px-6 text-center">
        <HiCurrencyRupee className="text-lime-600 text-4xl mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-6">
          How Much Can You Save?
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Depending on system size and location, homeowners can save up to
          <strong> ₹78,000 </strong>
          through government subsidies — and we make sure you get every rupee
          you’re eligible for.
        </p>
      </div>

     
      <div className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Who Can Apply?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eligibility.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <HiCheckCircle className="text-lime-600 text-xl mt-1" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="bg-[#1F3A2E] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            How the Subsidy Process Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-lime-400 font-semibold mb-2">Step 01</p>
              <p>Free Site Survey & Eligibility Check</p>
            </div>
            <div>
              <p className="text-lime-400 font-semibold mb-2">Step 02</p>
              <p>Installation by Our Certified Team</p>
            </div>
            <div>
              <p className="text-lime-400 font-semibold mb-2">Step 03</p>
              <p>All Government Paperwork Done by Us</p>
            </div>
            <div>
              <p className="text-lime-400 font-semibold mb-2">Step 04</p>
              <p>Subsidy Credited to Your Bank Account</p>
            </div>
          </div>
        </div>
      </div>

   
      <div className="bg-[#F4F9E8] py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#4A7C0F] mb-6">
          Go Solar Without Paperwork Hassle
        </h2>
        <p className="text-gray-600 mb-8">
          From government approvals to subsidy credit — we take care of
          everything for you.
        </p>
        <button className="bg-[#1F3A2E] text-white px-8 py-4 rounded-full hover:bg-[#162C23] transition">
          Apply for Solar Subsidy
        </button>
      </div>

    </section>
  );
};

export default Schemes;
