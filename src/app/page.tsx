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
        <div className="flex flex-col justify-center">
          <h2 className="text-[80px] font-semibold mx-auto mt-20">About me</h2>
        </div>
      </div>
    </main>
  );
}
