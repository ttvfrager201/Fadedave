import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">
            Stop by or book your appointment today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                <MapPin className="w-7 h-7 text-blue-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Location
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  FADED AVE BARBERSHOP
                  <br />
                  Your Address Here
                  <br />
                  City, State ZIP
                </p>
                <a
                  href="https://share.google/np3nEJFpMv4JEsGxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                <Clock className="w-7 h-7 text-blue-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Hours
                </h3>
                <div className="text-gray-400 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
                <p className="mt-3 text-blue-400 font-semibold">
                  Walk-ins always welcome!
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                <Phone className="w-7 h-7 text-blue-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  (123) 456-7890
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="flex-shrink-0 w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                <Mail className="w-7 h-7 text-blue-400" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Email
                </h3>
                <a
                  href="mailto:info@fadedavebarbershop.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  info@fadedavebarbershop.com
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-blue-400 hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-blue-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-blue-500/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e2f4e9d%3A0x6e2e8a9e6e2e8a9e!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="http://barbermoon1.booksy.com/a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            <span>Book Your Appointment Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
