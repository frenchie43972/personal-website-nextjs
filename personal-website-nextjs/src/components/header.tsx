import Link from "next/link";
import Image from "next/image";
import brandLogo from '/public/k_f_logo.png';

export default function Header() {
    return (

        <div className='w-full bg-slate-200 shadow-md z-10'>
            <nav className='w-full relative flex flex-wrap items-center justify-between p-2'>
                <Link href='/' className='font-bold flex flex-wrap items-center justify-between text-3xl'>
                    <div className="w-28 h-28 m-0">
                    <Image 
                            src={brandLogo}
                            alt="Photo of a very handsome gentlemen"
                        /> 
                    </div>
                </Link>
              
                <div className='space-x-8 text-xl mr-4'>
                    <Link href='/about'>About</Link>
                    <Link href='/portfolio'>Portfolio</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
            </nav>
        </div>
        
    );
};


