import React from 'react'

export const Heading = ({title}) => {
    return (
        <div className="w-full flex items-center justify-between md:text-xl text-zinc-100 font-bold leading-6 tracking-wide">
            <p>{title}</p>
            <p>sigRTC</p>
          </div>
    )
}
