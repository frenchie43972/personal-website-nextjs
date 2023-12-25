import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className='sticky top-0 w-full bg-slate-200 shadow-inner z-10'>
            <nav className='container flex justify-center mx-auto p-8'>
                <div className="space-x-8 relative flex flex-wrap items-center">
                    <a href="https://github.com/frenchie43972" target="_blank" rel="noopener noreferrer" >
                        <FaSquareGithub style={{fontSize: '64px'}}  />
                    </a>
                    <a href="https://www.linkedin.com/in/kristophertfrench/" target="_blank" rel="noopener noreferrer" >
                        <FaLinkedin style={{fontSize: '64px'}}  />
                    </a>
                </div>
            </nav>
        </div>
    );
}
