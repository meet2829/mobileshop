import React,{useEffect,useState} from 'react'
import { Phone, Mail, MapPin, CheckCircle, Users, Award, Clock, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Offers = () => {
  const [timeLeft, setTimeLeft] = useState({
      days: 2,
      hours: 14,
      minutes: 23,
      seconds: 45,
    });
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
          } else if (prev.minutes > 0) {
            return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
          } else if (prev.hours > 0) {
            return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
          } else if (prev.days > 0) {
            return {
              ...prev,
              days: prev.days - 1,
              hours: 23,
              minutes: 59,
              seconds: 59,
            };
          }
          return prev;
        });
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
  return (
    <div>
          <section id="offers" className="py-20 bg-warning-soft">
                   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-16 animate-fade-in">
                       <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                         🔥 Limited Time Offers
                       </h2>
                       <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                         Don't miss out on these incredible deals! Grab them before they're gone.
                       </p>
                     </div>
         
                     {/* Countdown Timer */}
                     <section className="py-20 bg-gray-100">
                       <div className="max-w-3xl mx-auto px-4">
                         <div className="bg-white rounded-2xl shadow-md p-6 mb-12 text-center">
                           <div className="flex items-center justify-center space-x-2 mb-4">
                             <Clock className="w-6 h-6 text-gray-500" />
                             <h3 className="text-2xl font-bold">Offer Ends In:</h3>
                           </div>
                           <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                             {Object.entries(timeLeft).map(([unit, value]) => (
                               <div
                                 key={unit}
                                 className="bg-gradient-to-br from-orange-400 to-gray-300 rounded-lg p-4 text-white"
                               >
                                 <div className="text-2xl font-bold">
                                   {value.toString().padStart(2, "0")}
                                 </div>
                                 <div className="text-sm uppercase tracking-wide">{unit}</div>
                               </div>
                             ))}
                           </div>
                         </div>
                       </div>
                     </section>
         
                     <div className="text-center mt-12">
                       <div className="bg-white rounded-xl shadow-medium p-6 inline-block animate-pulse-glow">
                         <p className="text-lg font-semibold text-foreground mb-2">
                           🎉 Join 50,000+ Happy Customers
                         </p>
                         <p className="text-muted-foreground">
                           Who have already saved with our exclusive offers!
                         </p>
                       </div>
                     </div>
                   </div>
                 </section>
    </div>
  )
}

export default Offers
