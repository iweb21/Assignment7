"use client";

import React from 'react'
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();
    return (
        <div>
            <div className='text-center py-8'>
                <h2 className='font-bold text-3xl'>(Client side) (server side)</h2>
                <p className='font-medium text-lg my-8 '>

                    The client-side component is called the browser and if we use the client,<br /> we will see the results in the browser console, while the server-side component <br /> is the one that shows the results in the CMD.This is a great way to test your components <br /> on the client-side before deploying them to production.
                </p> 
                <div className='space-x-8 py-6'>
                <button
                    onClick={() => router.push("/client")}
                    className="bg-gray-800 text-white font-semibold px-4 py-3 rounded hover:bg-gray-400 hover:text-black"
                >
                    Client-Side Render
                </button>
                <button
                    onClick={() => router.push("/server")}
                    className="bg-gray-800 text-white font-semibold px-4 py-3 rounded hover:bg-gray-400 hover:text-black"
                >
                    Server-Side Render
                </button>
                </div>
              </div>
        </div>

    )
}

export default Hero;

