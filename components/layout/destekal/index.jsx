/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export default function Header({
    heading
}){
    return(
        <div className="mb-0 mt-12">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-50 w-50"
                    src="/images/geoderlogo.png"/>
            </div>
            <h2 className="mt-5 text-center text-2xl font-extrabold text-black">
                {heading}
            </h2>
            <p className="mt-0 text-center text-sm text-gray-600">
            <Link href="#" className="font-medium text-red-600 hover:text-red-500">
                {/* {linkName} */}
            </Link>
            </p>
        </div>
    )
}