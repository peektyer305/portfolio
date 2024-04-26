import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
const textBackgroundClass = "bg-black bg-opacity-50 inline-block py-2";
const projectContainerClass = "w-30 h-30 border border-white rounded-lg mx-auto mt-10 text-center"
export default function Projects() {

  return (
    <main className="bg-black h-auto min-h-screen mt-10 text-white">
        <div className="bg-galaxy bg-repeat min-h-screen bg-center z-10 h-auto">
      <h1 className="text-[50px] text-center font-semibold fadeIn">Projects</h1>
      <div id ="projectContainer" className="flex flex-row md:flex-col text-white text-background font-bold">
      <div className={projectContainerClass}>
        <Image src={"/chatbot.png"} alt="chatbotImage" className="mx-auto"
        width={500} height={500}/>
        <h2 className={textBackgroundClass}>チャットボット</h2><br/>
        <p className={textBackgroundClass}>使用技術:OpenAI api,Next.js,firebase</p><br/>
        <p className={twMerge(textBackgroundClass,"text-wrap")}>chatGptを意識したチャットボットを作ってみました．</p><br/>
        <p className={textBackgroundClass}>OpenAI apiに可能性を感じたのでファインチューニングなどもっと深堀していきたい．</p><br/>
        <Link className={textBackgroundClass} href = {"https://github.com/peektyer305/portfolio"}>ソースコード(Githubに遷移します)</Link>
      </div>
      <div className={projectContainerClass}>
        <Image src={"/blod.png"} alt="blogImage" className="mx-auto"
        width={500} height={500}/>
        <h2 className={textBackgroundClass}>掲示板SNSアプリ</h2><br/>
        <p className={textBackgroundClass}>使用技術:React.js,firebase</p><br/>
        <p className={twMerge(textBackgroundClass,"text-wrap")}>Twitterのようなアプリを作ってみました</p><br/>
        <Link className={textBackgroundClass} href = {"https://github.com/peektyer305/Note-app"}>ソースコード(Githubに遷移します)</Link>
      </div>
      <div className={projectContainerClass}>
      <Image src={"/todo.jpg"} alt="blogImage" className="mx-auto"
        width={500} height={500}/>
      <h2 className={textBackgroundClass}>Todo API</h2><br/>
        <p className={textBackgroundClass}>使用技術:NestJS,prisma</p><br/>
        <p className={twMerge(textBackgroundClass,"text-wrap")}>チュートリアル的な意味でtodoアプリのAPI部分を実装してみました</p><br/>
        <p className={twMerge(textBackgroundClass,"text-wrap")}>現在マネジメントアプリなど，プロジェクトベースでバックエンドを勉強中です.</p><br/>
        <Link className={textBackgroundClass} href = {"https://github.com/peektyer305/todo"}>ソースコード(Githubに遷移します)</Link>
      </div>
      </div>
     </div>
    </main>
  );
}