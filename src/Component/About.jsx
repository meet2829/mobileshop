import React from 'react'
import { CheckCircle, Users, Award, Clock, ArrowRight, Tag, Zap } from "lucide-react";


const About = () => {
  const features = [
      {
        icon: <Users className="w-8 h-8 text-primary" color='green' />,
        title: "Expert Team",
        description: "Skilled professionals with years of industry experience"
      },
      {
        icon: <Award className="w-8 h-8 text-accent" color='blue' />,
        title: "Quality Assured",
        description: "Committed to delivering excellence in every project"
      },
      {
        icon: <Clock className="w-8 h-8 text-warning" color='yellow' />,
        title: "Fast Delivery",
        description: "Quick turnaround times without compromising quality"
      }
    ];
  return (
    <div>
         <section id="about" className="py-12 px-4 bg-white text-gray-800">
                 <div className="max-w-5xl mx-auto text-center mt-30">
                   <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
                   <p className="text-gray-500 text-base md:text-lg">
                     We're a forward-thinking company dedicated to creating innovative solutions that help businesses thrive in the digital landscape.
                   </p>
                 </div>
       
                 <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
                   {/* Left: Why Choose Us */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                     <div className="animate-fade-in-up">
                       <h3 className="text-2xl font-bold text-foreground mb-6">
                         Why Choose Us?
                       </h3>
                       <div className="space-y-4">
                         {[
                           "Cutting-edge technology solutions",
                           "Customer-centric approach",
                           "Proven track record of success",
                         ].map((item, index) => (
                           <div key={index} className="flex items-start space-x-3">
                             <CheckCircle className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" color="green" />
                             <span className="text-muted-foreground">{item}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                   </div>
       
                   <div className="grid grid-cols-1 gap-6 animate-fade-in">
                     {features.map((feature, index) => (
                       <div
                         key={index}
                         className="p-5 rounded-xl shadow-md border flex items-start gap-4 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105"
                       >
                         <div className="flex items-start space-x-4">
                           <div className="flex-shrink-0">{feature.icon}</div>
                           <div>
                             <h4 className="text-lg font-semibold text-foreground mb-2">
                               {feature.title}
                             </h4>
                             <p className="text-muted-foreground">{feature.description}</p>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </section>
      
    </div>
  )
}

export default About
