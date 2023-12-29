'use client'

import { useState, useEffect, ReactNode } from "react";

// Defining the Collapsible component with title and children as props
// and setting the state as false meaning the component is collapsed
// by default

type CollapsibleProp = {
    title: string,
    children: ReactNode,
};

export default function Collapsible({title, children}: CollapsibleProp) {
    const [open, setOpen] = useState(false);

    const toggelOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="mb-4">
            {/* the button element will toggle open/close when the title prop input is clicked */}
            <button 
                className="text-left w-full font-bold py-2 text-xl"
                onClick={toggelOpen}
                aria-expanded={open}
            >
                {title}
            </button>
            {/* A container to hold the content that will be shown/hidden */}
            <div 
                className={
                    `
                    transition-height ease-in-out duration-500 overflow-hidden
                    ${open ? 'max-h-[1000px]' : 'max-h-0'}`}
            >
                {/* A container holds the information that will be in the children prop 
                    The content is conditionally rendered based on the isOpen state*/}
                    {open && <div>{children}</div> }
            </div>
        </div>
    );
}

// transition-height  ease-in-out duration-500 overflow-hidden