"use client";

import React, { useEffect, useState } from "react";
import Rellax from "rellax";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import Header from "./components/header";

export default function Home() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        const rellax = new Rellax(".rellax", {
            speed: 0,
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
                value: "#0C0726", // Background color
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
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
            <Particles options={options} />

            {/* Heading */}
            <div className="py-24 rellax snap-start">
                <Header />
            </div>

            <div className="rellax h-screen border-red-400 border-2 snap-center" data-rellax-speed="0">
                Container 1
            </div>
            <div className="rellax h-screen border-red-400 border-2 snap-center" data-rellax-speed="0">
                Container 2
            </div>
            <div className="rellax h-screen border-red-400 border-2 snap-center" data-rellax-speed="0">
                Container 3
            </div>
        </div>
    );
}
