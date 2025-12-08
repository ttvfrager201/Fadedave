import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
  image?: string;
}

const sampleReviews: Review[] = [
  {
    name: 'Lucia Barragan',
    rating: 5,
    text: 'Went here for a last minute haircut for my son and i have to say is a Nice,Clean & Very welcoming barbershop as soon as i walked in they greeted me and my son and informed us how many people were ahead of us. The barbers were quick and they pay attention to detail they all amazing cutting hair 🔥 definitely coming back 😊Haircut by : Nino',
    date: '2 weeks ago',
    avatar: 'L',
    image: 'https://lh3.googleusercontent.com/geougc-cs/AMBA38veZ71tJpDv4PLsH5DElen2dJpwWEMkMgs4Scx9ND-rzPEbwOfv54TqWodbDldtGRYpNje4eXGgsT4MaDBUjfHXMI6CvqOr_w3KshwcERT8aKcEp88n74mwAgHWDh8W0BlhsGhW=s125-p-k-rw',
  },
  {
    name: 'Kayden Ashby',
    rating: 5,
    text: 'Very welcoming low-key the first cut Ive ever had were Ive actually had no regrets',
    date: '3 month ago',
    avatar: 'K',
  },
  {
    name: 'Ghaleb Alwasim',
    rating: 5,
    text: 'Absolutely the best barber shop in town! From the moment you walk in, you feel welcomed and at home. The attention to detail is second to none, and the barbers are true professionals who really care about getting your cut just right. Ive been coming here for a while now, and Ive never left disappointed. Whether its a fade, a beard trim, or just a fresh style, they nail it every time. The shop is clean, comfortable, and always has a great vibe. Highly recommend to anyone looking for a top-tier haircut!',
    date: '1 year ago',
    avatar: 'G',
  },
  {
    name: 'Hatem Gelan',
    rating: 5,
    text: 'Clean shop, amazing barbers. Cant go wrong with Barber Moon, the best in town',
    date: '1 week ago',
    avatar: 'H',
    image: 'https://lh3.googleusercontent.com/geougc-cs/AMBA38tGkIZbyOchKXIMCTQ5MTi78mVzt834MA2-8EXIVqIczjYGvkPwsKvovEpG7xVKRAgkjr-KjYdL2kOgGeQ25KS5ftjAM2ZaApKZuU7f5RFqlx-vnuCE95GxkhLaoHBVPJ7uKH7UiA=s125-p-k-rw',
  },
  {
    name: 'Robert Anderson',
    rating: 5,
    text: '6 Years And I Still Keep Coming Back Amazing Barber With Amazing Services For Anyone Around The East Dearborn Location!',
    date: '2 months ago',
    avatar: 'R',
  },
  {
    name: 'Hoss YK',
    rating: 5,
    text: 'Best haircut and beard trim Ive ever had—hands down, no BS. Im pretty skeptical about people touching my beard after a bad experience in the past, but I was extremely happy with how it turned out. The place was lively, the conversation was good, and the price was very affordable ($30) for todays economy. That included the whole nine yards: haircut, beard trim, and even my eyebrows. Ill definitely be back regularly. My barbers name was Ali. Thanks again!',
    date: '1 day ago',
    avatar: 'H',
    image: 'https://lh3.googleusercontent.com/geougc-cs/AMBA38uoM2cE6izop9kQNjnIknc_LcxlvOWQuG6e1S4UQ0AvBBb0m6qw7DoQt3fC-1JLfPC1HgK2EuLzk6hVYnpq_BLjWz7Q5Xd-fd6GCQfsrLbk2MkMfh-7UleP5jHFPLewVB1GqT8=s125-p-k-rw',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sampleReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? sampleReviews.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % sampleReviews.length);
  };

  const currentReview = sampleReviews[currentIndex];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-6 h-6 ${
              i < rating
                ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                : 'text-gray-600'
            }`}
            strokeWidth={1.5}
          />
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="reviews" className="py-28 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.15),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(30,58,138,0.1),_transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">4.9 Rating on Google</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Client <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">Reviews</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-500 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-400">
            See what our clients are saying about their experience
          </p>
        </div>

        {/* Main Review Card */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-10 sm:p-14 shadow-2xl shadow-blue-500/5">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8">
              <Quote className="w-16 h-16 text-blue-500/10" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/5 rounded-full -ml-16 -mb-16"></div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-8">
                <StarRating rating={currentReview.rating} />
              </div>

              {/* Review Image */}
              {currentReview.image && (
                <div className="mb-8 flex justify-center">
                  <img 
                    src={currentReview.image} 
                    alt={`Review by ${currentReview.name}`}
                    className="rounded-2xl shadow-xl max-w-full h-auto max-h-96 object-cover border border-blue-500/20"
                  />
                </div>
              )}

              {/* Review Text */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 text-center mb-10 leading-relaxed font-light italic">
                "{currentReview.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg shadow-blue-500/30">
                  {currentReview.avatar}
                </div>
                <div className="text-xl font-bold text-white mb-1">
                  {currentReview.name}
                </div>
                <div className="text-gray-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Verified Customer • {currentReview.date}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12">
              <button
                onClick={goToPrevious}
                className="p-4 rounded-full bg-slate-700/50 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-110 border border-blue-500/20 hover:border-blue-500"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-3">
                {sampleReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? 'bg-blue-500 w-10 shadow-lg shadow-blue-500/50'
                        : 'bg-gray-600 w-2 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-4 rounded-full bg-slate-700/50 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-110 border border-blue-500/20 hover:border-blue-500"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Google Reviews Link */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a
              href="https://www.google.com/search?q=faded+ave+barbershop&sca_esv=f85673565f5b1f98&sxsrf=AE3TifNFkX-0xndvQfl1uVldevGsDGPQtA%3A1765149871955&source=hp&ei=rww2adCiOMb8p84P3-aZoQI&iflsig=AOw8s4IAAAAAaTYav2_UR16N8ShqbQijzLRgc2Tmwxks&gs_ssp=eJzj4tVP1zc0LCsyzTEsNzc0YLRSNaiwsDBOMja1MDY0SU1NSTZPsTKoMDe3TLFMMTU1MLc0MzQxN_MSSUtMSU1RSCxLVUhKLEpKLSrOyC8AABgyFgs&oq=faded+a&gs_lp=Egdnd3Mtd2l6IgdmYWRlZCBhKgIIADITEC4YgAQYQxjHARiKBRiOBRivATIFEAAYgAQyCxAuGIAEGLEDGIMBMgUQABiABDIFEAAYgAQyCxAuGIAEGMcBGK8BMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjBDVAAWK4HcAB4AJABAJgBoAGgAbEGqgEDMy40uAEDyAEA-AEBmAIHoALgBsICBBAjGCfCAgoQABiABBhDGIoFwgIKEC4YgAQYQxiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIIEAAYgAQYsQPCAg4QLhiABBixAxiDARiKBcICDRAuGIAEGEMY5QQYigXCAhAQLhiABBhDGMcBGIoFGK8BwgIMEAAYgAQYQxiKBRgKwgINEAAYgAQYsQMYQxiKBcICFBAuGIAEGLEDGMcBGIoFGI4FGK8BwgIQEC4YgAQYsQMYQxjlBBiKBcICERAuGIAEGLEDGMcBGI4FGK8BwgIOEC4YgAQYxwEYjgUYrwGYAwCSBwMxLjagB_FtsgcDMS42uAfgBsIHBTItNi4xyAckgAgA&sclient=gws-wiz&zx=1765149872846&no_sw_cr=1#lrd=0x883b358314eedc7d:0x779d9d5507961476,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 rounded-xl text-gray-300 hover:text-white transition-all duration-300"
            >
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
              <span className="text-lg font-medium">View all reviews on Google</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}