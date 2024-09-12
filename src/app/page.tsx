"use client";

import React, { useEffect, useState } from "react";
import Rellax from "rellax";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

export default function Home() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        const rellax = new Rellax(".rellax", {
            speed: -2,
            center: false,
            round: true,
            vertical: true,
            horizontal: false,
        });
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
        return () => {
            rellax.destroy();
        };
    }, []);

    // Background star options
    const options = {
        background: {
            color: {
                value: "#000000", // Black background
            },
        },
        fpsLimit: 60, // Lower FPS for smoother animation
        particles: {
            color: {
                value: "#ffffff", // White stars
            },
            move: {
                direction: "none" as const, // Set to 'none' to allow random directions
                enable: true,
                outModes: {
                    default: "out" as const, // Particles go out of the screen instead of bouncing
                },
                random: true,
                speed: 1, // Slow movement
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 200, // More particles for a denser star field
            },
            opacity: {
                value: 0.5, // Semi-transparent stars
            },
            shape: {
                type: "star", // Change to star shape
                stroke: {
                    width: 0,
                    color: "#ffffff",
                },
            },
            size: {
                value: { min: 0.5, max: 1 }, // Smaller size for a more subtle effect
            },
            outModes: {
                default: "out" as const,
            },
        },
        detectRetina: true,
    };

    return (
        <div className="min-h-screen bg-no-repeat bg-cover">
            <Particles className="min-h-screen" options={options} />
            <div className="rellax h-64">
                Default speed
            </div>
            <div className="rellax h-64" data-rellax-speed="7">
                Super Fast!
            </div>
            <div className="rellax h-64" data-rellax-speed="-4">
                Slowww
            </div>
        </div>
    );
}
