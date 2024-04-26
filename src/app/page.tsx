import "./globals.css";

export default function Home() {
  return (
    <main className="">
      <div className="text-white bg-center bg-cover bg-magic relative min-h-screen z-[-20]">
        <div className="absolute inset-0 bg-gradient-to-t
        from-black to-transparent z-[-10]"></div>
        <div className="flex justify-center fadeIn flex-col text-center">
          <h1 className="mx-auto bg-clip-text text-[100px] font-bold mt-20">Hello World!</h1>
          <p className="mt-20 font-semibold text-[30px] text-wrap bg-clip-text">I am Masaki Hirabayashi majoring in Computer Science,</p>
          <p className="mt-10 font-semibold text-[30px] text-wrap bg-clip-text">interested in Front-end and Back-end development!</p>
        </div>
        <div className="flex flex-col justify-center mx-auto pb-20 md:pb-10">
          <h2 className="text-[80px] font-semibold mx-auto mt-20">About me</h2>
          <p className="mt-10 font-semibold text-xl text-wrap mx-20 md:mx-8 leading-8">2000年生まれ．高校卒業後2020年までApexLegendsというゲームでプロゲーマーをしていました．→2021年に中央大学経済学部→単位移行をして2023年からUniversity Of the People コンピューターサイエンス専攻
          に在学中の学生です．変な経歴をしていますが，より良いソフトウェアエンジニアになるため，広くコンピュータについて学ぼうと今に至る次第です.
        webフロントエンドを中心にバックエンドも勉強しています.</p>
        </div>
      </div>
    </main>
  );
}
