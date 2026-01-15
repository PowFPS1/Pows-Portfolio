"use client";

import React, { useEffect, useState } from "react";

interface StarType {
    id: number;
    left: number;
    top: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
}

interface ShootingStarType {
    id: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
}

const StarBackground = () => {
    const [stars, setStars] = useState<StarType[]>([]);
    const [shootingStars, setShootingStars] = useState<ShootingStarType[]>([]);

    useEffect(() => {
        // Generate static stars
        const newStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 2 + 1,
            duration: Math.random() * 20 + 20, // 20-40s duration
            delay: Math.random() * 30,
            opacity: Math.random() * 0.4 + 0.3,
        }));
        setStars(newStars);

        // Generate shooting stars
        const newShootingStars = Array.from({ length: 3 }).map((_, i) => ({
            id: i,
            left: Math.random() * 70,
            top: Math.random() * 30,
            duration: Math.random() * 5 + 8,
            delay: Math.random() * 20,
        }));
        setShootingStars(newShootingStars);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        "--duration": `${star.duration}s`,
                        "--delay": `${star.delay}s`,
                    } as React.CSSProperties}
                />
            ))}
            {shootingStars.map((star) => (
                <div
                    key={star.id}
                    className="shooting-star"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        "--duration": `${star.duration}s`, /* though specific keyframes use 10s usually, we can override if needed */
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
};

export default StarBackground;
