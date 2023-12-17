import Link from "next/link";

export default function Header() {
    return (

        <div className='w-full bg-slate-200 shadow-md z-10'>
            <nav className='container relative flex flex-wrap items-center justify-between mx-auto p-8'>
                <Link href='/' className='font-bold text-3xl'>Home</Link>
                <div className='space-x-8 text-xl'>
                    <Link href='/about'>About</Link>
                    <Link href='/portfolio'>Portfolio</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
            </nav>
        </div>
        
    );
};


