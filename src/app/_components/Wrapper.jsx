import React from 'react'

export default function Wrapper({ children, className = "" }) {
    return (
        <div className={`max-w-screen-lg md:max-w-screen-xl mx-auto py-16 px-8 lg:px-0 ${className}`} >{children}</div>
    )
}
