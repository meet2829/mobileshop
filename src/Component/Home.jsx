import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/MainBg.jpg';
import Expert from '../assets/expert.jpg';
import Guarantee from '../assets/guarantee.jpg';
import Service from '../assets/service.jpg';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      
      <Navbar />

     <div className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen">

            <div className="custom-shape-divider-bottom-1753697948 absolute inset-0 z-0  bg-cover bg-center bg-no-repeat w-full h-full overflow-hidden"
                style={{backgroundImage: `url(${bgImage})`}}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>
            <div
                className="absolute inset-0 z-10 flex items-center justify-start text-left px-6 sm:px-12 md:px-24"
                data-aos="fade-up"
            >
                <div className="max-w-3xl text-black">
                    <p
                        className="uppercase tracking-widest text-xs md:text-sm text-black-900"
                        data-aos="fade-right"
                    >
                        Since 2015 • Trusted by 1000+ Customers
                    </p>

                    <h1
                        className="text-4xl md:text-6xl font-bold font-serif my-4 leading-tight"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        Your <span className="text-red-500 italic">One-Stop</span> Mobile Shop
                    </h1>

                    <p
                        className="text-black-100 max-w-xl mt-4 mb-6 text-sm sm:text-base"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        Explore the latest smartphones and accessories at unbeatable prices.
                        Visit our store in Surat for expert advice, reliable service, and the
                        newest tech. No online orders – we believe in real conversations and real deals.
                    </p>

                    <button
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full shadow-md uppercase text-sm tracking-wide transition-all duration-300"
                        data-aos="flip-up"
                        data-aos-delay="500"
                    >
                        Visit Store
                    </button>
                </div>
            </div>
            </div>


      
      <section className="py-12 px-6 md:px-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">📱 Featured Phones</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>iPhone 14 Pro Max</li>
              <li>Samsung Galaxy S24</li>
              <li>OnePlus 12</li>
            </ul>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">🔥 Offers Available</h3>
            <p>Up to <strong>20% OFF</strong> on selected models. Visit our shop to explore!</p>
          </div>
        </div>
      </section>


      
      <section className="py-12 px-6 md:px-16" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-center mb-6">Why Choose Us?</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white shadow rounded">
            <img src={Guarantee} alt="Warranty" className="w-70 h-70 mx-auto mb-4 rounded-2xl" />
            <h4 className="font-semibold">Brand Warranty</h4>
            <p className="text-sm mt-2 text-gray-600">Every phone is 100% genuine with official support.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <img src={Expert} alt="Expert Advice" className="w-70 h-70 mx-auto mb-4 rounded-2xl" />
            <h4 className="font-semibold">Expert Guidance</h4>
            <p className="text-sm mt-2 text-gray-600">We help you find the right phone as per your need.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <img src={Service} alt="Support" className="w-70 h-70 mx-auto mb-4 rounded-2xl" />
            <h4 className="font-semibold">After-Sales Service</h4>
            <p className="text-sm mt-2 text-gray-600">Quick support and repair facility at the store.</p>
          </div>
        </div>
      </section>

      
      <section className="py-12 px-6 md:px-16 bg-gray-50" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-center mb-8">Customer Testimonials</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Ravi P.", review: "Best phone shop in Surat! Friendly staff and great prices." },
            { name: "Neha S.", review: "Bought my iPhone here. Got genuine advice and accessories!" },
            { name: "Amit D.", review: "Support even after the sale. Highly recommended!" }
          ].map((t, idx) => (
            <div key={idx} className="bg-white p-4 shadow rounded text-sm">
              <p className="italic text-gray-600">“{t.review}”</p>
              <p className="mt-2 font-medium text-right text-gray-800">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>

  );
};

export default Home;
