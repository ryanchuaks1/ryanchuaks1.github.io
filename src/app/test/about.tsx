"use client"

// About me component
import Image from 'next/image';
import React, { use, useEffect } from 'react';
import anime from 'animejs';

export default function About() {
    useEffect(() => {
        anime({
            targets: '.plane',
            translateX: 300,
            duration: 3000,
            delay: 1000,
        });
    }, []);
    return (
        <div className='p-48 overflow-x-hidden'>
            <div className=''>
                <Image src="/plane.svg"
                    width={100}
                    height={100}
                    alt="Plane"
                    className='plane'
                ></Image>

            </div>

        </div>
    );
}