import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
const textBackgroundClass = "bg-black bg-opacity-50 inline-block py-2";
const projectContainerClass = "w-30 h-30 border border-white rounded-lg mx-auto mt-10 text-center"
export default function Projects() {

  return (
    <main className="bg-black h-screen mt-10 text-white">
        <div className="bg-galaxy bg-repeat bg-left z-10 h-screen">
      <h1 className="text-[50px] text-center font-semibold fadeIn">Projects</h1>
     <div>
      <div id ="projectContainer" className="flex flex-row md:flex-col text-white text-background font-bold">
      <div className={projectContainerClass}>
        <Image src={"/chatbot.png"} alt="chatbotImage" className="mx-auto"
        width={500} height={500}/>
        <h2 className={textBackgroundClass}>チャットボット</h2><br/>
        <p className={textBackgroundClass}>使用技術:OpenAI api,Next.js,firebase</p><br/>
        <p className={twMerge(textBackgroundClass,"text-wrap")}>chatGptを意識したチャットボットを作ってみました．</p><br/>
        <p className={textBackgroundClass}>OpenAI apiに可能性を感じたのでファインチューニングなどもっと深堀していきたい．</p><br/>
        <Link className={textBackgroundClass} href = {"https://github.com/peektyer305/portfolio"}>ソースコードはこちらです(Githubに遷移します)</Link>
      </div>
      </div>
     </div>
      </div>
    </main>
  );
}