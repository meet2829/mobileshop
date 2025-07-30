import React from 'react'
import {
  CheckCircle,
  Users,
  Award,
  Clock
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {

  const [ref1, inView1] = useInView({ triggerOnce: true });

  const stats = [
    { label: "Client Satisfaction", value: 98 },
    { label: "Project Success", value: 95 },
    { label: "Team Growth", value: 90 },
  ];

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
        {/* Section Title */}
        <motion.div
          className="max-w-5xl mx-auto text-center mt-30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">About Our Store</h2>
          <p className="text-gray-500 text-base md:text-lg">
            We're a forward-thinking company dedicated to creating innovative solutions that help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          {/* Why Choose Us */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div>
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
          </motion.div>

          {/* Features Section */}
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-5 rounded-xl shadow-md border flex items-start gap-4 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.5 }}
                viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 m-40"
        ref={ref1}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-2">
              <span className="text-2xl font-bold text-orange-600">
                {inView1 ? <CountUp end={stat.value} duration={2} suffix="%" /> : "0%"}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
              <div
                className="h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: inView1 ? `${stat.value}%` : "0%",
                  backgroundImage:
                    "linear-gradient(to right, #f97316, #fb923c, #facc15)",
                }}
              />
            </div>
            <span className="text-sm text-gray-600">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default About;
