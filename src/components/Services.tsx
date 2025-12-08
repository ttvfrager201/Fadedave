import { Scissors, Sparkles, Users, Award, Clock, DollarSign } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Scissors,
    name: 'Hair Only',
    description: 'Any haircut of your choice - precision cuts tailored to your personal style and preferences.',
    price: '$40',
    duration: '30 min',
    popular: true,
  },
  {
    icon: Award,
    name: 'Hair and Beard',
    description: 'Complete haircut with beard lineup - the perfect combination for a polished, complete look.',
    price: '$50',
    duration: '45 min',
    popular: false,
  },
  {
    icon: Sparkles,
    name: 'Full Service',
    description: 'Hair and beard cut, relaxing session includes face mask, eyebrows, ear and nose wax for the ultimate grooming experience.',
    price: '$65',
    duration: '60 min',
    popular: false,
  },
  {
    icon: Users,
    name: 'Beard Line Up',
    description: 'Professional beard shaping and clean line work to keep your facial hair looking sharp.',
    price: '$25',
    duration: '20 min',
    popular: false,
  },
  {
    icon: Sparkles,
    name: 'Eyebrows',
    description: 'Wax or blade eyebrow shaping for a clean, polished look that frames your face perfectly.',
    price: '$20',
    duration: '10 min',
    popular: false,
  },
  {
    icon: Users,
    name: 'House Calls',
    description: 'Depends where to. Call me for details. Premium mobile barbering service at your location.',
    price: '$200',
    duration: '1h',
    popular: false,
  },
];

export default function Services() {
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
    <section ref={sectionRef} id="services" className="py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.08),_transparent_70%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <DollarSign className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Premium Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Our <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Services</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Premium barbering services crafted with 8 years of experience and dedication to excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/10 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}

                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full -mr-20 -mt-20 group-hover:bg-blue-500/15 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/5 rounded-full -ml-16 -mb-16 group-hover:bg-blue-600/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-2xl mb-6 group-hover:from-blue-600/30 group-hover:to-blue-500/20 transition-all duration-500 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text">
                      {service.price}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="http://barbermoon1.booksy.com/a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span>Book Your Service</span>
          </a>
        </div>
      </div>
    </section>
  );
}