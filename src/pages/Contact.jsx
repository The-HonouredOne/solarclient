import React from "react";
import {
  HiPhone,
  HiEnvelope,
  HiMapPin,
  HiCheckCircle,
} from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="bg-white">

      
      <div className="bg-[#1F3A2E] py-28 px-6 text-center">
        <p className="text-lime-400 text-sm font-semibold mb-4">
       
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch With Us
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto">
          Have questions about solar installation or government subsidy?
          <br />
          <strong className="text-white">
            Contact us — we’ll guide you and handle all paperwork for you.
          </strong>
        </p>
      </div>

     
      <div className="bg-[#F4F9E8] py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          <div className="flex items-center justify-center gap-3">
            <HiPhone className="text-lime-600 text-2xl" />
            <p className="font-medium">+91 1234567890</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <HiEnvelope className="text-lime-600 text-2xl" />
            <p className="font-medium">info@yourcompany.com</p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <HiMapPin className="text-lime-600 text-2xl" />
            <p className="font-medium">Serving Across India</p>
          </div>

        </div>
      </div>

      {/* ================= FORM + INFO ================= */}
      <div className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT – FORM */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Request a Free Consultation
          </h2>

          <p className="text-gray-600 mb-10">
            Fill out the form below and our solar experts will contact you.
            <br />
            <strong>No paperwork required from your side.</strong>
          </p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-lime-600"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-lime-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-lime-600"
            />

            <input
              type="text"
              placeholder="City / Location"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-lime-600"
            />

            <textarea
              rows="4"
              placeholder="Your Message (Optional)"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-lime-600"
            />

            <button
              type="submit"
              className="bg-[#1F3A2E] text-white px-8 py-4 rounded-full hover:bg-[#162C23] transition"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* RIGHT – TRUST + PROCESS */}
        <div>
          <h3 className="text-2xl font-bold mb-6">
            Why Contact Us?
          </h3>

          <div className="space-y-5 mb-10">
            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-lime-600 text-xl mt-1" />
              <p>Government-approved solar installations</p>
            </div>

            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-lime-600 text-xl mt-1" />
              <p>100% subsidy documentation handled by us</p>
            </div>

            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-lime-600 text-xl mt-1" />
              <p>Free site survey & eligibility check</p>
            </div>

            <div className="flex items-start gap-4">
              <HiCheckCircle className="text-lime-600 text-xl mt-1" />
              <p>Transparent pricing & expert guidance</p>
            </div>
          </div>

          {/* PROCESS CARD */}
          <div className="bg-[#F4F9E8] p-8 rounded-2xl">
            <h4 className="font-semibold mb-4">
              What Happens After You Contact Us?
            </h4>

            <ol className="space-y-3 text-sm text-gray-700">
              <li>1. Our team contacts you within 24 hours</li>
              <li>2. Free consultation & site survey</li>
              <li>3. Solar installation & government paperwork</li>
              <li>4. Subsidy credited to your bank</li>
            </ol>
          </div>
        </div>

      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="bg-[#1F3A2E] py-24 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Switch to Solar?
        </h2>

        <p className="text-gray-300 mb-8">
          Contact us today and let us handle everything — from installation
          to subsidy approval.
        </p>

        <button className="bg-lime-500 text-[#1F3A2E] px-8 py-4 rounded-full font-semibold hover:bg-lime-400 transition">
          Call Now for Free Consultation
        </button>
      </div>

    </section>
  );
};

export default Contact;
