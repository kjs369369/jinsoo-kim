
import React, { useRef, useEffect, useState } from 'react';

interface ScrollAnimatorProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimator: React.FC<ScrollAnimatorProps> = ({ children, className }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '0px 0px -50px 0px',
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`${className || ''} fade-in-up ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default ScrollAnimator;
