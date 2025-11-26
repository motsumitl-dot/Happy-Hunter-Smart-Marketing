
import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
    beforeImage, 
    afterImage, 
    beforeLabel = 'Before', 
    afterLabel = 'After' 
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseDown = () => { isDragging.current = true; };
    const handleMouseUp = () => { isDragging.current = false; };
    
    // Mouse events for desktop
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        handleMove(e.clientX);
    };

    // Touch events for mobile
    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        window.addEventListener('mouseup', handleMouseUp);
        return () => window.removeEventListener('mouseup', handleMouseUp);
    }, []);

    return (
        <div 
            ref={containerRef}
            className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden cursor-ew-resize select-none border border-gray-200 shadow-inner group"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            onTouchStart={() => isDragging.current = true}
            onTouchEnd={() => isDragging.current = false}
        >
            {/* Background (After Image) */}
            <img 
                src={afterImage} 
                alt="After" 
                className="absolute top-0 left-0 w-full h-full object-cover" 
            />
            <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10">{afterLabel}</span>

            {/* Foreground (Before Image) - Clipped */}
            <div 
                className="absolute top-0 left-0 w-full h-full overflow-hidden border-r-2 border-white"
                style={{ width: `${sliderPosition}%` }}
            >
                <img 
                    src={beforeImage} 
                    alt="Before" 
                    className="absolute top-0 left-0 max-w-none h-full object-cover"
                    style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
                />
                 <span className="absolute top-4 left-4 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10">{beforeLabel}</span>
            </div>

            {/* Slider Handle */}
            <div 
                className="absolute top-0 bottom-0 w-1 bg-yellow-400 cursor-ew-resize z-20 flex items-center justify-center shadow-lg"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l-3 3 3 3m8-6l3 3-3 3" /></svg>
                </div>
            </div>
        </div>
    );
};
