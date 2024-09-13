"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const wordList = ["Developer", "Sofware Architect", "Student", "Joker"];
    const [wordIndex, setWordIndex] = useState(0);

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
        <div>
            < div className=" text-5xl font-pacifico text-center" >
                Hi, I'm <Link href="https://www.linkedin.com/in/ryanchuaks/" className="text-blue-500">Ryan Chua</Link>
            </div >
            <div className="text-4xl mt-8 font-poppins text-center">
                <div className="word w-fit mx-auto">{wordList[wordIndex]}</div>
            </div>
        </div >
    );
}
