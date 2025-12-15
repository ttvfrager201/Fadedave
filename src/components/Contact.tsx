import { MapPin, Phone, Clock, Mail, Instagram, Facebook, Navigation, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-28 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(37,99,235,0.1),_transparent_60%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Visit Us Today</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Get In <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400">
            Stop by or book your appointment today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Location Card */}
            <div className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-blue-500/20 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-blue-400" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400 leading-relaxed mb-3">
                    FADED AVE BARBERSHOP<br />
                    4710 Horger St<br />
                    <span className="text-blue-400 text-sm">Park in back, door is on the side corner!</span><br />
                    Dearborn, MI 48126
                  </p>
                  <a
                    href="https://www.google.com/maps/dir//FADED+AVE+BARBERSHOP,+4710+Horger+St,+Dearborn,+MI+48126/@42.309997,-83.177545,12z/data=!4m16!1m7!3m6!1s0x883b358314eedc7d:0x779d9d5507961476!2sFADED+AVE+BARBERSHOP!8m2!3d42.3215056!4d-83.1792616!16s%2Fg%2F11vr5l1w71!4m7!1m0!1m5!1m1!1s0x883b358314eedc7d:0x779d9d5507961476!2m2!1d-83.1792656!2d42.3216345?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

        {/* Hours Card */}
<div className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500">
  <div className="flex gap-5 items-start">
    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-blue-500/20 transition-all duration-300">
      <Clock className="w-7 h-7 text-blue-400" strokeWidth={1.5} />
    </div>

    <div className="flex-1">
      <h3 className="text-xl font-bold text-white mb-3">Hours</h3>

      <div className="space-y-2">
        <div className="flex justify-between text-gray-400">
          <span>Sunday</span>
          <span className="text-white">11:00 AM – 8:00 PM</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Monday</span>
          <span className="text-white">11:00 AM – 8:00 PM</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Tuesday</span>
          <span className="text-white">11:00 AM – 8:00 PM</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Wednesday</span>
          <span className="text-white">11:00 AM – 8:00 PM</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Thursday</span>
          <span className="text-white">11:00 AM – 8:30 PM</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Friday</span>
          <span className="text-white">11:00 AM – 8:30 PM</span>
        </div>

        <div className="flex justify-between text-gray-400">
          <span>Saturday</span>
          <span className="text-white">11:00 AM – 8:00 PM</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-green-400 font-semibold">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        Walk-ins always welcome!
      </div>
    </div>
  </div>
</div>

            {/* Phone & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Phone</h3>
                    <a
                      href="tel:+13133204054"
                      className="text-lg font-bold text-white hover:text-blue-400 transition-colors duration-300"
                    >
                      (313) 320-4054
                    </a>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500">
                <div className="flex gap-4 items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Email</h3>
                    <a
                      href="mailto:info@fadedavebarbershop.com"
                      className="text-lg font-bold text-white hover:text-blue-400 transition-colors duration-300 truncate block"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/faded_ave/"
                  target="_blank"
  rel="noopener noreferrer"
                  className="group w-14 h-14 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-xl flex items-center justify-center hover:from-pink-600 hover:to-purple-600 transition-all duration-300 border border-pink-500/20 hover:border-pink-500"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7 text-pink-400 group-hover:text-white transition-colors duration-300" />
                </a>
               
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/10">
              {/* Map Header */}
              <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-slate-900/90 to-transparent p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">FADED AVE BARBERSHOP</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span>5.0</span>
                      <span>•</span>
                      <span>Barbershop</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94444.03693051697!2d-83.24513531497995!3d42.291838545425314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b358314eedc7d%3A0x779d9d5507961476!2sFADED%20AVE%20BARBERSHOP!5e0!3m2!1sen!2sus!4v1765141648132!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="http://barbermoon1.booksy.com/a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xl font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span>Book Your Appointment Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
