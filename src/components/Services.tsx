import { Scissors, Sparkles, Users, Award } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    name: 'Signature Fade',
    description: 'Precision fade with crisp line work and styling. Our specialty cut that defines modern barbering.',
    price: 'From $35',
  },
  {
    icon: Sparkles,
    name: 'Classic Cut',
    description: 'Timeless haircut tailored to your style. Perfect for professional and casual looks.',
    price: 'From $30',
  },
  {
    icon: Award,
    name: 'Beard Trim & Shape',
    description: 'Professional beard sculpting with hot towel treatment and premium oils for the perfect finish.',
    price: 'From $20',
  },
  {
    icon: Users,
    name: 'Kids Cut',
    description: 'Patient, friendly service for the young ones. Making haircuts fun and stress-free.',
    price: 'From $25',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium barbering services crafted with 8 years of experience and dedication to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-800/50 border border-blue-500/20 rounded-xl p-8 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all duration-300"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-lg mb-6 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.name}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="text-2xl font-bold text-blue-400">
                    {service.price}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="http://barbermoon1.booksy.com/a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>Book Your Service</span>
          </a>
        </div>
      </div>
    </section>
  );
}
