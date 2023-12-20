import Image from "next/image";
import krisPic from '/public/profile_pic.jpg';
import HorizontalRule from "@/components/horizontalRule";

export default function About() {
    return (
        <div className="container w-2/4 mx-auto p-8 flex flex-col items-center">
            <div className="w-64 h-64 my-4 relative rounded-full overflow-hidden ">
                <Image 
                alt="An image of Kris French Web Developer; such a handome guy" 
                src={krisPic}
                objectFit="cover"
                layout="fill"
                />
            </div>
            <p className="p-4 my-4">
                Starting my career as an F-14 aircraft mechanic, I have always been fascinated by 
                how things work and how to make them work better. This curiosity led me from fine-tuning
                fighter jets to diving into the details of quality assurance and then on to fighter maintenance management. 
                After a rewarding stint in aviation, I shifted gears to IT, embracing the challenges of change and project 
                management in the ship repai field. My journey did not stop there; I pursued a Bachelors in Software Development and soon landed
                a role where I am now exploring the exciting world of application and SharePoint development. 
                Every step of my path has been about learning, adapting, and applying - it has been a wild ride, 
                and I love bringing this eclectic mix of experiences to solve new puzzles in the tech world.
            </p>
            <HorizontalRule/>
        </div>
    );
};