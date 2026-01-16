"use client";

import React, { useEffect, useState } from "react";

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
}

const StarBackground = () => {
    const [stars, setStars] = useState<StarType[]>([]);
    const [shootingStars, setShootingStars] = useState<ShootingStarType[]>([]);

    useEffect(() => {
        // Generate static stars with movement
        const newStars = Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 3 + 1, // 1px to 4px
            twinkleDuration: Math.random() * 5 + 3, // 3-8s
            twinkleDelay: Math.random() * 5,
            moveDuration: Math.random() * 20 + 20, // 20-40s
            moveDelay: Math.random() * 10,
            moveX: Math.random() * 100 - 50, // -50 to 50px
            moveY: Math.random() * 100 - 50,
        }));
        setStars(newStars);

        // Generate shooting stars
        const newShootingStars = Array.from({ length: 3 }).map((_, i) => ({
            id: i,
            left: Math.random() * 80,
            top: Math.random() * 50,
            duration: Math.random() * 5 + 5,
            delay: Math.random() * 15,
        }));
        setShootingStars(newShootingStars);
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
                    key={star.id}
                    className="shooting-star"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        "--duration": `${star.duration}s`,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                    } as React.CSSProperties}
                />
            ))}
        </div>
    );
};

export default StarBackground;
