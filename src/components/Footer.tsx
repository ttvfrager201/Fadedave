import { Scissors, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Scissors className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
              <span className="text-2xl font-bold text-white">FADED AVE</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Where tradition meets modern style. Experience premium barbering with 8 years of professional expertise.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-blue-400 hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-400 hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-blue-400" strokeWidth={1.5} />
                <span className="text-sm">Your Address, City, State</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-blue-400" strokeWidth={1.5} />
                <a href="tel:+1234567890" className="text-sm hover:text-blue-400 transition-colors duration-300">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-blue-400" strokeWidth={1.5} />
                <a href="mailto:info@fadedavebarbershop.com" className="text-sm hover:text-blue-400 transition-colors duration-300">
                  info@fadedave.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-500/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FADED AVE BARBERSHOP. All rights reserved.
          </p>
          <a
            href="http://barbermoon1.booksy.com/a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </footer>
  );
}
