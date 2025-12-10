import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

/**
 * CardCarousel Component
 * 
 * Props:
 * @param {Array} data - Array of objects with { image, name, occupation }
 * @param {number} autoPlayInterval - Time in ms between auto slides (default: 3000)
 * @param {boolean} autoPlay - Enable/disable auto-play (default: true)
 * 
 * Usage:
 * <CardCarousel data={yourJsonData} autoPlayInterval={3000} autoPlay={true} />
 */

const CardCarousel = ({ 
  data = [], 
  autoPlayInterval = 3000,  // EDIT: Change auto-play speed (in milliseconds)
  autoPlay = true           // EDIT: Set to false to disable auto-play
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const intervalRef = useRef(null);

  const totalCards = data.length;

  // Go to next slide
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  // Go to previous slide
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isHovered && totalCards > 0) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isHovered, autoPlayInterval, totalCards, currentIndex]);

  // Get visible cards (previous, current, next)
  const getVisibleCards = () => {
    if (totalCards === 0) return [];
    
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + totalCards) % totalCards;
      cards.push({
        ...data[index],
        position: i,
        originalIndex: index
      });
    }
    return cards;
  };

  const visibleCards = getVisibleCards();

  if (totalCards === 0) {
    return (
      <div className="flex items-center justify-center h-96 text-gray-400">
        No data provided
      </div>
    );
  }

  // EDIT: Animation variants for cards
  const cardVariants = {
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    },
    left: {
      x: -320, // EDIT: Adjust horizontal spacing
      scale: 0.85,
      opacity: 0.6,
      zIndex: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    },
    right: {
      x: 320, // EDIT: Adjust horizontal spacing
      scale: 0.85,
      opacity: 0.6,
      zIndex: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    }
  };

  const getVariant = (position) => {
    if (position === 0) return "center";
    if (position === -1) return "left";
    return "right";
  };

  return (
    // EDIT: Change the overall container background here
    <div 
      className="relative w-full py-15 px-4 overflow-hidden my-5"
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cards container */}
      <div className="relative flex items-center justify-center h-96 max-w-5xl mx-auto">
        {/* Previous button */}
        <motion.button
          onClick={prevSlide}
          className="absolute left-4 z-20 p-2 text-cyan-400 hover:text-cyan-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={48} strokeWidth={3} />
        </motion.button>

        {/* Cards with Framer Motion */}
        <div className="relative flex items-center justify-center w-full h-full">
          {visibleCards.map((card) => (
            <motion.div
              key={`card-${card.originalIndex}-pos-${card.position}`}
              className="absolute"
              initial={false}
              animate={{
                x: card.position === 0 ? 0 : card.position === -1 ? -280 : 280,
                scale: card.position === 0 ? 1 : 0.85,
                opacity: card.position === 0 ? 1 : 0.6,
                zIndex: card.position === 0 ? 10 : 5,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                mass: 0.8,
              }}
            >
              {/* Card - EDIT: Change card styles here */}
              <motion.div 
                className="w-64 rounded-xl overflow-hidden"
                style={{
                  background: 'linear-gradient(to bottom, #1e3a5f, #0f2847)', // EDIT: Card gradient
                }}
                whileHover={{ y: -5 }}
                animate={{
                  boxShadow: card.position === 0 
                    ? '0 25px 50px -12px rgba(0, 100, 255, 0.4)' 
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                }}
              >
                {/* Image container */}
                <div className="h-72 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.src = '/placeholder.svg';
                    }}
                  />
                </div>
                
                {/* Card info */}
                <div className="p-4 text-center">
                  <p className="text-gray-300 text-sm mb-1">{card.occupation}</p>
                  <h3 className="text-white text-xl font-semibold">{card.name}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Next button */}
        <motion.button
          onClick={nextSlide}
          className="absolute right-4 z-20 p-2 text-cyan-400 hover:text-cyan-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
        >
          <ChevronRight size={48} strokeWidth={3} />
        </motion.button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {data.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className="h-2 rounded-full"
            animate={{
              width: currentIndex === index ? 24 : 8,
              backgroundColor: currentIndex === index ? '#22d3ee' : '#6b7280',
            }}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
