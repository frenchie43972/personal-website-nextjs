import Image from "next/image";
import krisPic from '/public/profile_pic.jpg';
import HorizontalRule from "@/components/horizontalRule";
import Collapsible from "@/components/collapsible";

export default function About() {
    return (
        <div className="container max-h-full w-2/4 mx-auto p-8 flex flex-col items-center">
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
                management in the ship repair field. My journey did not stop there; I pursued a Bachelors in Software Development and soon landed
                a role where I am now exploring the exciting world of application and SharePoint development. 
                Every step of my path has been about learning, adapting, and applying - it has been a wild ride, 
                and I love bringing this eclectic mix of experiences to solve new puzzles in the tech world.
            </p>
            <HorizontalRule/>
            <p className="text-3xl mt-8 mb-4 text-center">Work Experience</p>
            <Collapsible title="2023 - Present">
                Application Developer | Change Control Manager | Scrum Master<br/><br/>
                I blend creativity with technology as an Application Developer and SharePoint Expert. My daily routine involves translating complex project requirements into user-friendly applications, a challenge that involves meticulous coding, debugging, and problem-solving. Designing and maintaining SharePoint solutions is where I shine, creating sites and workflows that enhance organizational efficiency and user experience.<br/><br/>

                Wearing the hat of a Scrum Master and Change Control Manager, I guide and inspire teams through the ebbs and flows of software development. My role is not just about keeping projects on track; it’s about mentoring a team towards excellence and streamlining processes for maximum efficiency. Each day presents new opportunities to lead, innovate, and drive impactful change.

            </Collapsible>
            <Collapsible title="2021 - 2023">
                Change Control Manager | Software Licensing Manager <br/><br/>
                In my role overseeing Change Management, I provided strategic and operational direction to the five divisions that made up the IT department. My focus was on crafting and enforcing policies that streamlined configuration and change management procedures, ensuring smooth and efficient workflows. I was proud to lead projects that required meticulous planning and coordination, like assessing the Google Workspace platform for our organization. My goal was always to determine its applicability and feasibility, ensuring it aligned perfectly with our operational needs.

                I also played a key role in improving management ability to plan for the future and track progress effectively. By streamlining key processes, I helped the team meet and often surpass our set goals, reflecting a blend of strategy and practical execution.<br/><br/>

                In the realm of Software Licensing, I took charge of making enterprise license usage transparent and manageable. This was achieved through the development and implementation of effective software licensing management procedures. It was a balancing act of oversight and innovation. This resulted in the successful recovery of $28K in overused licenses in a very short time. This accomplishment not only demonstrated the effectiveness of the licensing management system I put in place but also underscored my commitment to optimizing resource use and reducing unnecessary expenditures.
            </Collapsible>
            <Collapsible title="2018 - 2021">
                Computer Specialist | Project Manager<br/><br/>
                In my early IT career, I undertook the challenge of building a test network that provided a crucial development environment for eight application developers. This project was not only about technical proficiency but also about creating a collaborative space for innovation. Additionally, I managed the installation and maintenance of software across 32 platform IT and systems, ensuring each met our specific customer needs. A notable aspect of this role was resolving complex software issues with shipyard industrial equipment, blending technical know-how with practical problem-solving.<br/><br/>

                Moving into project management, my efforts were instrumental in establishing the project management office. Here, I led 11 IT projects, focusing keenly on delivering each within its time and budget constraints, and meeting or exceeding project goals. This role was a blend of strategic planning and effective execution, marking a significant phase in my professional development.
            </Collapsible>
        </div>
    );
};