import { Calendar, Scissors, Star, MapPin, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
   <div className="
  absolute inset-0 
  bg-[url('https://lh3.googleusercontent.com/p/AF1QipO0n9b03UIovH32g2Gk3CoFrBX-qkBTv9v-ZVmR=s1360-w1360-h1020-rw')] 
  bg-cover 
  bg-center 
  md:bg-[center_-450px] 
  lg:bg-[center_-470px]
"></div>



      {/* Premium Overlay Layers - More Transparent, Gradient from Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.25),_transparent_50%)]"></div>
      
      {/* Animated Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300/40 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-500/20 rounded-full animate-float-fast"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-float-slow"></div>
      </div>

      {/* Glowing Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          {/* Animated Logo */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
            </div>
          </div>

          {/* Main Title with Animation */}
          <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">FADED AVE</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mt-3 tracking-[0.3em]">BARBERSHOP</span>
          </h1>

          {/* Tagline */}
          <p className={`text-xl sm:text-2xl text-gray-300 mb-3 font-light transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Where Tradition Meets Modern Style
          </p>

          {/* Rating Badge */}
          <div className={`flex items-center gap-2 mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-300 font-medium">4.9</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400">Google Reviews</span>
          </div>

          {/* Description */}
          <p className={`text-lg text-gray-400 mb-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Premium cuts by an 8-year experienced licensed barber. Appointments available online, walk-ins always welcome.
          </p>

          {/* Walk-in Pricing Note */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg mb-10 transition-all duration-1000 delay-550 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-green-400 font-semibold text-sm">💰 Walk-in prices are cheaper!</span>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="http://barbermoon1.booksy.com/a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Calendar className="w-6 h-6" />
              <span className="text-lg">Book Appointment</span>
            </a>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 font-bold rounded-xl transition-all duration-300"
            >
              <span className="text-lg">View Services</span>
            </a>
          </div>

          {/* Quick Info Cards */}
          <div className={`flex flex-wrap gap-4 mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-2 text-gray-400 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm">4710 Horger St, Dearborn</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <Clock className="w-4 h-4 text-blue-400" />
              <span className="text-sm">Tue-Sun Open</span>
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
}