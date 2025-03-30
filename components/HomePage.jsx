"use client"
import React, { useState, useEffect } from 'react'
import { Vortex } from "@/components/ui/vortex";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from 'next/link';

const HomePage = () => {
    const [timer, setTimer] = useState(false)
    const words = `I'm a Software Engineer, Developer, Audio Engineer, and Creator who is passionate about Cybersecurity, Computer Science, and Technology`
    const words2 = `I'm determined to utilize my knowledge and expertise in business, science, and engineering to play a vital role in evolving our future`
    useEffect(() => {
        setTimeout(() => {
            setTimer(true)
        }, 2500);
    }, [])
    return (
        <div className="w-[calc(100%)] mx-auto h-screen overflow-hidden">
            <Vortex
                backgroundColor="black"
                rangeY={800}
                particleCount={100}
                baseHue={200}
                className="flex items-center flex-col justify-center py-10 w-full h-full"
            >
                <img src={'/logo-white.png'} className='h-65 w-65 md:h-75 md:w-75 mb-4 mt-6 sm:mt-12 shadow-[rgba(55,0,255,.2)] shadow-xl border-b-1 rounded-2xl p-8 border-[rgba(255,255,255,.15)]' />
                <div className="flex flex-col w-[80%] md:w-[70%] lg:w-[50%] items-center mt-8 text-center">
                    <TextGenerateEffect words={words} />
                </div>
                <div className="flex flex-col w-[70%] md:w-[50%] h-[80%] items-center mt-6 text-center">
                    {timer && (
                        <TextGenerateEffect words={words2} />
                    )}
                </div>
                <div className='h-full flex gap-10 mt-12 lg:mt-0 xl:-mt-8 justify-center w-full'>
                    <Link href={'https://github.com/DonZiglioni'} target='_blank' rel='noopener noreferrer'>
                        <img src={'./github-icon-2.svg'} className='h-15 w-15 hover:scale-150 transition duration-300 ease-in-out shadow-[rgba(55,0,255,.2)] hover:shadow-[rgba(155,0,255,.4)] shadow-xl border-b-1  rounded-full border-[rgba(255,255,255,.15)] ' />
                    </Link>
                    <Link href={'mailto:${shift2bass@gmail.com}'} target='_blank' rel='noopener noreferrer'>
                        <img src={'./mail2.svg'} className='h-15 w-15 hover:scale-150 transition duration-300 ease-in-out shadow-[rgba(55,0,255,.2)] hover:shadow-[rgba(155,0,255,.4)] shadow-xl border-b-1  rounded-md border-[rgba(255,255,255,.15)]' />
                    </Link>
                    <Link href={'https://www.youtube.com/@DonZiglioni'} target='_blank' rel='noopener noreferrer'>
                        <img src={'./youtube2.svg'} className='h-15 w-15 hover:scale-150 transition duration-300 ease-in-out shadow-[rgba(55,0,255,.2)] hover:shadow-[rgba(155,0,255,.4)] shadow-xl border-b-1  rounded-xl border-[rgba(255,255,255,.15)]' />
                    </Link>
                    <Link href={'https://www.linkedin.com/in/frankazzaro/'} target='_blank' rel='noopener noreferrer'>
                        <img src={'./logo-linkedin2.svg'} className='h-15 w-15 hover:scale-150 transition duration-300 ease-in-out shadow-[rgba(55,0,255,.2)] hover:shadow-[rgba(155,0,255,.4)] shadow-xl border-b-1  rounded-lg border-[rgba(255,255,255,.15)]' />
                    </Link>
                </div>
            </Vortex>
        </div>
    )
}

export default HomePage

