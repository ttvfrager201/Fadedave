import { Award, Clock, Heart, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Licensed Professional',
    description: 'Fully licensed barber with 8 years of hands-on experience in the industry',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Book appointments online or walk in anytime during business hours',
  },
  {
    icon: Heart,
    title: 'Passion for Craft',
    description: 'Dedicated to delivering exceptional cuts and unforgettable experiences',
  },
  {
    icon: Users,
    title: 'Walk-Ins Welcome',
    description: 'Multiple barbers available for walk-in services throughout the day',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Master of the Craft
            </h2>
            <div className="w-24 h-1 bg-blue-500 mb-8"></div>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With 8 years of experience as a licensed barber, I've dedicated my career to mastering the art of barbering.
              Every cut is more than just a service—it's a craft perfected through thousands of hours of practice and passion.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              At FADED AVE BARBERSHOP, we combine traditional barbering techniques with modern styles to create looks
              that not only meet but exceed expectations. Whether you're looking for a classic cut or something more contemporary,
              we've got you covered.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-400" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl transform rotate-3"></div>
            <div className="relative bg-slate-800 rounded-2xl p-8 border border-blue-500/20">
              <img
                src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/542444/biz_photo/977e8c3bfff64670bedd680831d289-barber-moon-biz-photo-d22f15c4b8864821bf55b9e44870ae-booksy.jpeg?size=640x427"
                alt="Barbershop"
                className="w-full h-96 object-cover rounded-lg mb-6"
              />

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-900 rounded-lg border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-1">8+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
                <div className="text-center p-4 bg-slate-900 rounded-lg border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Clients</div>
                </div>
                <div className="text-center p-4 bg-slate-900 rounded-lg border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-400 mb-1">5★</div>
                  <div className="text-sm text-gray-400">Rated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
