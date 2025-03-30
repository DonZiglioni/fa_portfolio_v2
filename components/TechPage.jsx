"use client"
import React, { useState } from 'react'
import { Vortex } from './ui/vortex'
import { getCommand } from '@/app/technology'
import Response from './Response'
const TechPage = () => {
    const [blinking, setBlinking] = useState(true)
    const [command, setCommand] = useState('')
    const [response, setResponse] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("FROM CLIENT: ", command);
        const response = await getCommand(command)
        setResponse(response)
        setCommand('')
    }

    return (
        <div className="w-[calc(100%)] mx-auto h-screen flex flex-col px-4 py-4 bg-black overflow-hidden">

            <div className='border-2 flex flex-col justify-between border-green-900 px-2 py-2 h-full'>

                <div className='flex flex-col gap-1 border-b-2 border-b-green-400'>
                    <p className='text-green-400 text-xl'>WELCOME!</p>
                    <p className='text-green-400'>Type: /help for a list of commands</p>
                    <p className='text-green-400 mb-4'>Example: show certifications</p>
                </div>
                <div className=' flex flex-col px-2 py-2 justify-end mt-2 h-full ' >
                    <div className='border-2 h-full mb-2 border-green-900 flex flex-col justify-end '>
                        {response && (
                            <Response response={response} />
                        )}
                    </div>


                    <div className='border-2 border-green-900 h-20 px-2 flex items-center '>
                        <p className='text-green-400 '>{`F:\\ >`}</p>

                        <span className='text-green-400 animate-blink text-lg ml-2 '>
                            {blinking ? "|" : null}
                        </span>
                        <form onSubmit={(e) => handleSubmit(e)} >
                            <input type='text' onChange={(e) => setCommand(e.target.value)} value={command} onClick={() => setBlinking(false)} className=' h-full ml-0 text-green-400 caret-green-400 focus:outline-none' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechPage