import React from "react";
import {
  HiShieldCheck,
  HiDocumentCheck,
  HiBolt,
  HiUserGroup,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate=useNavigate()


  return (
    <section className="bg-white">

      <div className="bg-[#1F3A2E] py-28 px-6 text-center">
        {/* <p className="text-lime-400 text-sm font-semibold mb-4">
          // ABOUT US
        </p> */}

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Powering Homes With <br /> Clean & Affordable Solar Energy
        </h1>

        <p className="text-gray-300 max-w-3xl mx-auto">
          We help homeowners and businesses switch to solar energy under
          official government schemes — with complete subsidy support and
          zero paperwork hassle.
        </p>
      </div>

      
      <div className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Our Story
        </h2>

        <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          Our journey began with a simple belief — clean energy should be
          accessible, affordable, and stress-free for everyone. As solar
          adoption grew, we noticed that many customers were confused and
          discouraged by complex government procedures and subsidy paperwork.
          <br /><br />
          That’s when we decided to build a solar company that not only installs
          high-quality systems but also handles the entire government process
          on behalf of customers — from approvals to subsidy disbursement.
        </p>
      </div>

      
      <div className="bg-[#F4F9E8] py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To make solar energy simple, affordable, and accessible by
              delivering high-quality installations while managing all
              government approvals and subsidies for our customers.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become a trusted leader in solar energy solutions by empowering
              communities to adopt renewable energy without paperwork stress
              or hidden costs.
            </p>
          </div>

        </div>
      </div>


      <div className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          
          <div>
            <HiShieldCheck className="text-lime-600 text-4xl mx-auto mb-4" />
            <h4 className="font-semibold mb-2">
              Government-Approved Vendor
            </h4>
            <p className="text-gray-600 text-sm">
              We work under official central and state solar subsidy schemes.
            </p>
          </div>

          <div>
            <HiDocumentCheck className="text-lime-600 text-4xl mx-auto mb-4" />
            <h4 className="font-semibold mb-2">
              Zero Paperwork for You
            </h4>
            <p className="text-gray-600 text-sm">
              From applications to approvals, we handle everything.
            </p>
          </div>

          <div>
            <HiBolt className="text-lime-600 text-4xl mx-auto mb-4" />
            <h4 className="font-semibold mb-2">
              Quality Solar Systems
            </h4>
            <p className="text-gray-600 text-sm">
              High-efficiency panels with long-term warranties.
            </p>
          </div>

          <div>
            <HiUserGroup className="text-lime-600 text-4xl mx-auto mb-4" />
            <h4 className="font-semibold mb-2">
              Dedicated Support
            </h4>
            <p className="text-gray-600 text-sm">
              Expert guidance before, during, and after installation.
            </p>
          </div>

        </div>
      </div>


      <div className="bg-[#1F3A2E] py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Our Simple, Hassle-Free Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-lime-400 font-semibold mb-2">01</p>
              <p>Free Consultation & Site Survey</p>
            </div>
            <div>
              <p className="text-lime-400 font-semibold mb-2">02</p>
              <p>Solar System Design & Installation</p>
            </div>
            <div>
              <p className="text-lime-400 font-semibold mb-2">03</p>
              <p>All Government Paperwork Handled by Us</p>
            </div>
            <div>
              <p className="text-lime-400 font-semibold mb-2">04</p>
              <p>Subsidy Credited to Your Bank</p>
            </div>
          </div>
        </div>
      </div>

     
      <div className="bg-[#F4F9E8] py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-[#4A7C0F] mb-6">
          Join the Solar Energy Movement
        </h2>
        <p className="text-gray-600 mb-8">
          Switch to solar with confidence — we take care of everything.
        </p>
        <button className="bg-[#1F3A2E] text-white px-8 py-4 rounded-full hover:bg-[#162C23] transition"
        onClick={()=>navigate('/contact')}>
          Get a Free Consultation
        </button>
      </div>

    </section>
  );
};

export default About;
