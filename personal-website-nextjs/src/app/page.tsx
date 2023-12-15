import Image from "next/image"
import profilePic from '/public/profile_pic.jpg';

export default function Home() {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center justify-center">
      <div className="w-64 h-64 relative rounded-full overflow-hidden mb-10">
        <Image 
          alt="Picture of a very handsome dude" 
          src={profilePic}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div>
        <p className="text-4xl mb-4"> Hello, my name is Kris French.</p>
        <p className="text-2xl">Welcome, everything is fine!</p>
      </div>
    </div>
    
    
  )
}
