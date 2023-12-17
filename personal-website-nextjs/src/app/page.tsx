import Image from "next/image"
import profilePic from '/public/profile_pic.jpg';

export default function Home() {
  return (
    <div className="container w-2/4 mx-auto p-8 flex flex-col items-center justify-center">
      <div className="w-64 h-64 relative rounded-full overflow-hidden mb-8">
        <Image 
          alt="Picture of a very handsome dude" 
          src={profilePic}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div>
        <p className="text-4xl mt-8 mb-4 text-center"> Hello, My Name is Kris French.</p>
        <p className="text-xl">
          Transforming visions into reality, I develop solutions that marry beauty with efficiency.  My approach centers on sleek, user-friendly designs underpinned by robust functionality. Every project is an opportunity for me to push the boundaries of modern, accessible web design, ensuring that your online presence is nothing short of exceptional.
        </p>
      </div>
    </div>
    
    
  )
}
