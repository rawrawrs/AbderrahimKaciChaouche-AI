import { useState, useEffect } from "react";

interface AnimatedTextProps {
  phrases: string[];
  className?: string;
}

const AnimatedText = ({ phrases, className = "" }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <span 
      className={`inline-block transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ color: '#264653' }}
    >
      {phrases[currentIndex]}
    </span>
  );
};

export default AnimatedText;