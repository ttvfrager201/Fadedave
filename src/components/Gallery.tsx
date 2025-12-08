import { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';

const galleryImages = [
  'https://res.cloudinary.com/dhiat2lxy/image/upload/v1765223792/Img1_myiolx.jpg',
  'https://res.cloudinary.com/dhiat2lxy/image/upload/v1765223792/Img2_wfbkun.jpg',
  'https://res.cloudinary.com/dhiat2lxy/image/upload/v1765223792/Img3_a2f2u0.jpg',
  'https://res.cloudinary.com/dhiat2lxy/image/upload/v1765223792/Img4_pihyoe.jpg',
  'https://res.cloudinary.com/dhiat2lxy/image/upload/v1765223792/Img5_yxhc4q.jpg',
  'https://res.cloudinary.com/dhiat2lxy/image/upload/v1765223792/Img6_xaswum.jpg',
  'https://res.cloudinary.com/dhiat2lxy/image/upload/v1765223792/Img7_nwop89.jpg',
  'https://res.cloudinary.com/dhiat2lxy/image/upload/v1765223792/Img8_g4igml.jpg',
  'https://res.cloudinary.com/dhiat2lxy/image/upload/v1765223792/Img9_upgrxm.jpg',
];

export default function Gallery() {
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
    <section ref={sectionRef} id="gallery" className="py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.08),_transparent_70%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Camera className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Gallery <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Showcase</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Check out our latest cuts and styles
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-square overflow-hidden rounded-2xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:scale-110 hover:z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-blue-400">
                  
                    <span className="font-semibold"></span>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
