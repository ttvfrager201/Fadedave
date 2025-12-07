import { Calendar, Scissors } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/50 to-slate-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-block mb-6">
          <Scissors className="w-16 h-16 text-blue-400 mx-auto animate-pulse" strokeWidth={1.5} />
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          FADED AVE
          <span className="block text-blue-400 mt-2">BARBERSHOP</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Where Tradition Meets Modern Style
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Premium cuts by an 8-year experienced licensed barber. Appointments available online, walk-ins always welcome.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="http://barbermoon1.booksy.com/a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Appointment</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
          >
            <span>View Services</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">Licensed</div>
            <div className="text-gray-300">Professional Barber</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">Walk-Ins</div>
            <div className="text-gray-300">Always Welcome</div>
          </div>
        </div>
      </div>
    </section>
  );
}
