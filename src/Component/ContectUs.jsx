import React from 'react'

const ContectUs = () => {
  return (
    <div>
        <section id="contact" className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ready to start your project? Contact us today and let's discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6">
              {/* Top Contact Cards */}
              <div className="bg-white rounded-xl shadow p-4 flex items-start space-x-3">
                <span className="text-blue-500 text-xl">📞</span>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-4 flex items-start space-x-3">
                <span className="text-green-500 text-xl">💬</span>
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-4 flex items-start space-x-3">
                <span className="text-yellow-500 text-xl">✉️</span>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-sm text-gray-600">hello@company.com</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow p-4 flex items-start space-x-3">
                <span className="text-red-500 text-xl">📍</span>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-sm text-gray-600">
                    Yash Plaza, A-201, Varachha Main Rd, Ramdarshan Society, Varachha, Surat, Gujarat 395006
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="col-span-2 flex flex-col gap-3 mt-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-blue-700 transition">
                  <span>📞</span>
                  <span>Call Now</span>
                </button>
                <button className="w-full bg-green-500 text-white py-2 rounded-md flex items-center justify-center space-x-2 hover:bg-green-600 transition">
                  <span>💬</span>
                  <span>WhatsApp Us</span>
                </button>
              </div>

              {/* Map Card */}
              <div className="col-span-2 mt-4 bg-gradient-to-br from-blue-50 to-green-100 rounded-xl shadow p-6 text-center">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6056461568337!2d72.84342537503673!3d21.20781918048661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ff9c3a4578d%3A0xc04d1f7807e63da5!2sKrishna%20Mobile!5e0!3m2!1sen!2sin!4v1753786642229!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default ContectUs
