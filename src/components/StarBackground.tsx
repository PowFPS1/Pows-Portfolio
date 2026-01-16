"use client";

import React, { useEffect, useState, useCallback } from "react";

interface StarType {
    id: number;
    left: number;
    top: number;
    size: number;
    twinkleDuration: number;
    twinkleDelay: number;
    moveDuration: number;
    moveDelay: number;
    moveX: number;
    moveY: number;
}

interface ShootingStarType {
    id: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
    angle: number;
    length: number;
    key: number; // Used to reset animation
}

const StarBackground = () => {
    const [stars, setStars] = useState<StarType[]>([]);
    const [shootingStars, setShootingStars] = useState<ShootingStarType[]>([]);

    useEffect(() => {
        // Generate static stars
        const newStars = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 3 + 1,
            twinkleDuration: Math.random() * 5 + 3,
            twinkleDelay: Math.random() * 5,
            moveDuration: Math.random() * 20 + 20,
            moveDelay: Math.random() * 10,
            moveX: Math.random() * 100 - 50,
            moveY: Math.random() * 100 - 50,
        }));
        setStars(newStars);

        // Initial shooting stars setup
        const initialShootingStars = Array.from({ length: 4 }).map((_, i) => createShootingStar(i));
        setShootingStars(initialShootingStars);
    }, []);

    const createShootingStar = (id: number): ShootingStarType => {
        return {
            id,
            left: Math.random() * 100,
            top: Math.random() * 50, // Keep them in upper half mostly
            duration: Math.random() * 3 + 2, // 2-5s duration for faster checks (CSS handles display time)
            delay: Math.random() * 10 + 2,     // Random start delay
            angle: Math.random() * 120 + 30, // 30 to 150 degrees (Down-Right to Down-Left)
            // 0 is Right, 90 is Down, 180 is Left. 
            // So 30-150 ensures they always go down (y+) with variance in x.
            length: Math.random() * 100 + 150, // 150-250px length
            key: Math.random(),
        };
    };

    // We want to periodically "respawn" shooting stars to make them smarter/random
    useEffect(() => {
        const interval = setInterval(() => {
            setShootingStars(prev => prev.map(star => {
                // Random chance to respawn a star if it's likely finished
                if (Math.random() > 0.7) {
                    return createShootingStar(star.id);
                }
                return star;
            }));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animation: `floating ${star.moveDuration}s infinite ease-in-out alternate`,
                        animationDelay: `${star.moveDelay}s`,
                        "--move-x": `${star.moveX}px`,
                        "--move-y": `${star.moveY}px`,
                    } as React.CSSProperties}
                >
                    <div
                        className="w-full h-full bg-white rounded-full opacity-60"
                        style={{
                            animation: `twinkle ${star.twinkleDuration}s infinite ease-in-out`,
                            animationDelay: `${star.twinkleDelay}s`,
                        }}
                    />
                </div>
            ))}
            {shootingStars.map((star) => (
                <div
                    key={`${star.id}-${star.key}`} // Key change resets animation
                    className="shooting-star"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        "--duration": `${star.duration}s`,
                        "--length": `${star.length}px`,
                        "--angle": `${star.angle}deg`, // We'll need to use this in CSS
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
};

export default StarBackground;
