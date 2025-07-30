import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, CheckCircle, Users, Award, Clock, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Navbar from "./Navbar";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

import bgImage from "../assets/images/MainBg.jpg";
import AppleBG from "../assets/images/AppleBg.jpg";
import Apple from "../assets/images/Apple.png";
import Samsung from "../assets/images/Samsung.png";
import Google from "../assets/images/Google.png";
import SamsungBG from "../assets/images/SamsungBg.jpg";
import GoogleBG from "../assets/images/GoogleBg.jpg";
import About from "./About";
import Blog from "./Blog";
import Offers from "./Offers";
import ContectUs from "./ContectUs";

const Home = () => {
 


  const [activeSlide, setActiveSlide] = useState(0);

  const slideData = [
    {
      bg: AppleBG,
      img: Apple,
      title: <p className="text-gray-400">iPhone 16 Pro Max</p>,
    },
    {
      bg: SamsungBG,
      img: Samsung,
      title: "Samsung Galaxy S25 Ultra",
    },
    {
      bg: GoogleBG,
      img: Google,
      title: "Google Pixel 9 Pro XL",
    },
  ];

  const stats = [
    { label: "Client Satisfaction", value: 98 },
    { label: "Project Success", value: 95 },
    { label: "Team Growth", value: 90 },
  ];


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "about" },
      { label: "Our Team", href: "team" },
      { label: "Careers", href: "careers" },
      { label: "Contact", href: "contact" },
    ],
   
    resources: [
      { label: "Blog", href: "blog" },
      { label: "Documentation", href: "documentation" },
      { label: "Privacy Policy", href: "privacy" },
      { label: "Terms of Service", href: "terms" },
    ],
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  return (
    <div id="home" className="text-gray-800 font-sans pt-16"> {/* Added id="home" and pt-16 for navbar offset */}
      <Navbar />

      <div className=" bg-[#f9fafb]">
        {/* Carousel */}
        <Carousel
          autoplay
          autoplaySpeed={2000}
          afterChange={(current) => setActiveSlide(current)}
          className="h-screen"
          dots={false}
        >
          {slideData.map((slide, index) => (
            <div
              key={index}
              className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.bg})` }} // Fixed syntax
              />

              {/* Content with Motion Animation */}
              <div className="absolute inset-0 flex items-center justify-center gap-10 px-6 sm:px-12 md:px-24 z-10">
                {activeSlide === index && (
                  <>
                    <motion.img
                      src={slide.img}
                      alt=""
                      className="w-[250px] sm:w-[300px] md:w-[400px] object-contain drop-shadow-xl"
                      initial={{ x: -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                    <motion.div
                      initial={{ x: 200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                      className="text-white text-center md:text-left"
                    >
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-600">
                        Experience the next-gen innovation
                      </p>
                    </motion.div>
                  </>
                )}
              </div>

              {/* SVG Wave Divider */}
              {activeSlide === index && (
                <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none rotate-180">
                  <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-20 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                      opacity=".25"
                      className="fill-white"
                    />
                    <path
                      d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                      opacity=".5"
                      className="fill-white"
                    />
                    <path
                      d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                      className="fill-white"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </Carousel>

        <About />
        <Blog />
        <Offers />
        <ContectUs />

        {/* Footer */}
        <footer className="bg-gray-600 text-white relative">
          <button
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 shadow-strong animate-bounce-subtle z-10 bg-white text-gray-800 p-2 rounded-full"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text ">
                  KrishnaMobile
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Transforming businesses through innovative digital solutions. We help companies thrive in the modern digital landscape.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <ScrollLink
                        to={link.href}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block cursor-pointer"
                      >
                        {link.label}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>

              

              <div>
                <h4 className="text-lg font-semibold mb-6">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <ScrollLink
                        to={link.href}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block cursor-pointer"
                      >
                        {link.label}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-gray-400 text-sm">
                  © 2024 BrandName. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm text-gray-400">
                  <ScrollLink
                    to="privacy"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Privacy Policy
                  </ScrollLink>
                  <ScrollLink
                    to="terms"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    Terms of Service
                  </ScrollLink>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;