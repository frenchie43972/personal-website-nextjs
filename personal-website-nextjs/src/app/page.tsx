import Image from "next/image"
import brandLogo from '/public/k_f_logo.png';

export default function Home() {
  return (
    <div className="container w-2/4 mx-auto p-8 flex flex-col items-center ">
      <div className="w-96 h-96 relative rounded-full overflow-hidden -mb-16">
        <Image 
          alt="A logo for Kris french Web Developer" 
          src={brandLogo}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div>
        <p className="text-3xl mt-8 mb-4 text-center"> Hello, My Name is Kris French.</p>
        <p className="text-l">
          Transforming visions into reality, I develop solutions that marry beauty with efficiency.  My approach centers on sleek, user-friendly designs underpinned by robust functionality. Each project is a chance for me to explore new horizons in modern, accessible digital solutions, ensuring that your online and interactive presence stands out as truly exceptional.
        </p>
      </div>
    </div>
    
    
  )
}
