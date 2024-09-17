"use client";

import anime from "animejs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const wordList = ["Developer", "Software Architect", "Student", "Joker"];
    const [wordIndex, setWordIndex] = useState(0);
    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // If the user scrolls down, hide the arrow
            if (window.scrollY > 100) {
                setShowArrow(false);
            } else {
                setShowArrow(true);
            }
        };
        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const animatedWord = document.querySelector(".word");
        if (animatedWord) {
            // Apply fade-in class initially
            animatedWord.classList.add("animate-fade-in-left");

            // Remove fade-in class after 2 seconds
            setTimeout(() => {
                animatedWord.classList.remove("animate-fade-in-left");
                animatedWord.classList.add("animate-fade-out-right");
            }, 2500); // Set this slightly less than interval duration for a smooth transition
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prevIndex) => (prevIndex + 1) % wordList.length);

            // Handle animation
            const animatedWord = document.querySelector(".word");
            if (animatedWord) {
                // Apply fade-in class initially
                animatedWord.classList.add("animate-fade-in-left");
                animatedWord.classList.remove("animate-fade-out-right");
                animatedWord.classList.remove("animate-delay-3");

                // Remove fade-in class after 2 seconds and add fade-out class
                setTimeout(() => {
                    animatedWord.classList.remove("animate-fade-in-left");
                    animatedWord.classList.add("animate-fade-out-right");
                }, 2500); // Set this slightly less than interval duration for a smooth transition
            }
        }, 3000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [wordList.length]);

    return (
        <div className="h-screen flex flex-col justify-center">
            <div className=" text-5xl font-pacifico text-center">
                Hi, I&apos;m <Link href="https://www.linkedin.com/in/ryanchuaks/" className="text-blue-500">Ryan Chua</Link>
            </div>
            <div className="text-4xl mt-6 font-poppins text-center">
                <div className="word w-fit mx-auto animate-delay-3">{wordList[wordIndex]}</div>
            </div>
            <div className={`rellax absolute bottom-0 flex justify-center w-full transition-opacity duration-500 ${showArrow ? 'opacity-100' : 'opacity-0'}`} data-rellax-speed="6">
                <Image src="./down-arrow.svg" height={80} width={100} className="filter invert animate-bounce animate-duration-2" alt="down arrow" />
            </div>
        </div>
    );
}
