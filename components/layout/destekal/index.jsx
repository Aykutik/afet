/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export default function Header({
    heading
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-14 w-14"
                    src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            <Link href="#" className="font-medium text-red-600 hover:text-red-500">
                {/* {linkName} */}
            </Link>
            </p>
        </div>
    )
}