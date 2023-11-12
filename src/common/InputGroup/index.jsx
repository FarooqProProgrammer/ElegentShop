import React from 'react'

export default function InputGroup({ icon, placeholder,containerCss, ...rest }) {
    return (
        <div className={`relative ${containerCss}`}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                {icon}
            </span>
            <input
                className="w-full py-2 pl-8 pr-2 border rounded-md outline-none"
                placeholder={placeholder}
                {...rest}
            />
        </div>
    )
}
