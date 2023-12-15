import Link from "next/link";

export default function Header() {
    return (

        <div className='w-full bg-slate-200 shadow-md z-10'>
            <nav className='container relative flex flex-wrap items-center justify-between mx-auto p-8'>
                <Link href='/' className='font-bold text-3xl'>Home</Link>
                <div className='space-x-8 text-xl'>
                    <Link href='/about'>About Me</Link>
                    <Link href='/portfolio'>Portfolio</Link>
                    <Link href='/contact'>Contact Me</Link>
                </div>
            </nav>
        </div>
        
    );
};


{/* <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-start">
                    <div className="flex space-x-4">
                        <Link href='/'>Home</Link>
                    </div>
                </div>
            </div>

            
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-end">
                    <div className="flex space-x-4">
                        <Link href='/about'>About Me</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-end">
                    <div className="flex space-x-4">
                        <Link href='/portfolio'>Portfolio</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-end">
                    <div className="flex space-x-4">
                        <Link href='/contact'>Contact Me</Link>
                    </div>
                </div>
            </div> */}

        //     <nav className="flex items-center justify-between flex-wrap p-6 bg-slate-200 shadow-md">
        //     <div className="flex items-center flex-shrink-0 mr-6">
        //         <Link href="/" className="text-2xl tracking-tight">Home</Link>
        //     </div>
        //     <div className="w-full block flex-grow lg:items-end text-lg lg:w-auto">
        //         <div className="lg:flex-grow">
        //             <Link href="/about">About Me</Link>
        //         </div>
        //         <div className=" lg:flex-grow">
        //             <Link href="/portfolio">Portfolio</Link>
        //         </div>
        //         <div className="lg:flex-grow">
        //             <Link href="/contact">Contact Me</Link>
        //         </div>
        //     </div>
        // </nav>