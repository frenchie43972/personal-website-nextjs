import Image from "next/image"
import brandLogo from '/public/k_f_logo.png';

export default function Home() {
  return (
    <div className="container h-screen w-2/4 mx-auto p-8 flex flex-col items-center">
      <div className="w-96 h-96 relative rounded-full overflow-hidden -mb-16">
        <Image 
          alt="A logo for Kris French Web Developer" 
          src={brandLogo}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div>
        <p className="text-3xl mt-8 mb-4 text-center"> Hello, My Name is Kris French.</p>
        <p className="text-l text-center">
          I love turning ideas into reality, creating solutions that are as beautiful as they are functional. 
          My goal is simple: to build user-friendly designs that work flawlessly. For me, every project is a 
          new adventure to make your online presence uniquely outstanding.
        </p>
      </div>
    </div>
    
    
  )
}
