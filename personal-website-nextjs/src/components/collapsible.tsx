'use client'

import { useState } from "react";

// Defining the Collapsible component with title and children as props
// and setting the state as false meaning the component is collapsed
// by default
export default function Collapsible({title, children}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            {/* the button element will toggle open/close when the title prop input is clicked */}
            <button 
                className="text-left w-full font-bold py-2 text-xl"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {title}
            </button>
            {/* A container to hold the content that will be shown/hidden */}
            <div 
                className={`transition-height duration-500 ease-in-out
                            ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                aria-hidden={!isOpen}
            >
                {/* A container holds the information that will be in the children prop 
                    The content is conditionally rendered based on the isOpen state*/}
                <div className="overflow-hidden">
                    {isOpen && children}
                </div>
            </div>
        </div>
    );
}