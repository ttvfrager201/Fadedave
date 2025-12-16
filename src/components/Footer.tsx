import { Scissors, Instagram, Facebook, MapPin, Phone, Mail, Clock, Star, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(37,99,235,0.05),_transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
             
              <div>
                <span className="text-3xl font-black text-white block">FADED AVE</span>
                <span className="text-xs text-blue-400 tracking-[0.2em]">BARBERSHOP</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Where tradition meets modern style. Experience premium barbering with 8 years of professional expertise.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">5.0 on Google</span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/faded_ave/"
                target="_blank"
  rel="noopener noreferrer"
                className="group w-11 h-11 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-xl flex items-center justify-center hover:from-pink-600 hover:to-purple-600 transition-all duration-300 border border-pink-500/20 hover:border-pink-500"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-pink-400 group-hover:text-white transition-colors duration-300" />
              </a>
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="http://barbermoon1.booksy.com/a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 font-medium"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
        <div>
  <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
    <Clock className="w-5 h-5 text-blue-400" />
    Hours
  </h3>

  <ul className="space-y-2 text-sm">
    <li className="flex justify-between text-gray-400">
      <span>Monday</span>
      <span className="text-white">11AM - 8PM</span>
    </li>
    <li className="flex justify-between text-gray-400">
      <span>Tuesday</span>
      <span className="text-white">11AM - 8PM</span>
    </li>
    <li className="flex justify-between text-gray-400">
      <span>Wednesday</span>
      <span className="text-white">11AM - 8PM</span>
    </li>
    <li className="flex justify-between text-gray-400">
      <span>Thursday</span>
      <span className="text-white">11AM - 8:30PM</span>
    </li>
    <li className="flex justify-between text-gray-400">
      <span>Friday</span>
      <span className="text-white">11AM - 8:30PM</span>
    </li>
    <li className="flex justify-between text-gray-400">
      <span>Saturday</span>
      <span className="text-white">11AM - 8PM</span>
    </li>
    <li className="flex justify-between text-gray-400">
      <span>Sunday</span>
      <span className="text-white">11AM - 8PM</span>
    </li>
  </ul>
</div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" strokeWidth={1.5} />
                <div>
                  <span className="text-sm block">4710 Horger St</span>
                  <span className="text-sm block">Dearborn, MI 48126</span>
                  <span className="text-xs text-blue-400 block mt-1">Park in back, door on side corner</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" strokeWidth={1.5} />
                <a href="tel:+13133204054" className="text-sm hover:text-blue-400 transition-colors duration-300 font-medium">
                  (313) 320-4054
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" strokeWidth={1.5} />
                <a href="mailto:info@fadedavebarbershop.com" className="text-sm hover:text-blue-400 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-500/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FADED AVE BARBERSHOP. All rights reserved.
          </p>
          <a
            href="http://barbermoon1.booksy.com/a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-bold rounded-xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
