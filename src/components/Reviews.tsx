import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
}

const sampleReviews: Review[] = [
  {
    name: 'Michael Rodriguez',
    rating: 5,
    text: 'Best barbershop in town! The attention to detail is incredible. Always leave feeling fresh and confident. Highly recommend booking with them!',
    date: '2 weeks ago',
  },
  {
    name: 'James Thompson',
    rating: 5,
    text: 'Been coming here for over a year now. Consistently great cuts every single time. The atmosphere is professional and welcoming. Worth every penny!',
    date: '1 month ago',
  },
  {
    name: 'David Chen',
    rating: 5,
    text: 'Amazing experience! Very skilled barber who really knows how to work with different hair types. The fade was absolutely perfect. Will be back for sure!',
    date: '3 weeks ago',
  },
  {
    name: 'Marcus Williams',
    rating: 5,
    text: 'Hands down the best fade I have ever gotten. Professional, clean, and the customer service is top notch. This is my go-to spot now!',
    date: '1 week ago',
  },
  {
    name: 'Robert Anderson',
    rating: 5,
    text: 'Exceptional service and craftsmanship. Takes time to understand what you want and delivers exactly that. Very happy with my haircut!',
    date: '2 months ago',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
            className={`w-5 h-5 ${
              i < rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-600'
            }`}
            strokeWidth={1.5}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Client Reviews
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400">
            See what our clients are saying about their experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-800/50 border border-blue-500/20 rounded-2xl p-8 sm:p-12">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-500/20" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <StarRating rating={currentReview.rating} />
              </div>

              <p className="text-xl sm:text-2xl text-gray-200 text-center mb-8 leading-relaxed italic">
                "{currentReview.text}"
              </p>

              <div className="text-center">
                <div className="text-lg font-semibold text-white mb-1">
                  {currentReview.name}
                </div>
                <div className="text-gray-400">{currentReview.date}</div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-12">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-slate-700 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {sampleReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-500 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-slate-700 hover:bg-blue-600 text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/search?q=faded+ave+barbershop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <span className="text-lg">View all reviews on Google</span>
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
