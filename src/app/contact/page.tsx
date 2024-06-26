'use client'

import{useForm,SubmitHandler} from "react-hook-form"

interface Inputs {
    name: string;
    email: string;
    message: string;

}

export default function Contact(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    return (
        <main className="mt-10 bg-black min-h-screen h-auto">
            <div className="bg-contactBack z-10 bg-no-repeat bg-center text-white text-center">
               <div className="fadeIn"> <h1 className="text-[50px] font-semibold">Contact</h1>
                <p className="text-base mt-10 font-bold">お問い合わせ、連絡ございましたら以下のフォームにご入力・送信お願いいたします。</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center mt-10 font-semibold">
                        <label htmlFor="name" className="fadeIn">
                            お名前
                        </label>
                        <input type="text" id="name" className="w-[50vw] md:w-[80vw] fadeIn mx-2 my-5 p-2 text-center bg-transparent border border-white rounded-lg" {...register("name", { required: "お名前を入力してください。" })} />
                        {errors.name && <p className="text-white font-semibold mb-2 text-sm opacity-80">{errors.name.message}</p>}
                        <label htmlFor="email"className="fadeIn">
                            メールアドレス
                        </label>
                        <input type="email" id="email" className="fadeIn w-[50vw] md:w-[80vw] mx-2 my-5 p-2 text-center bg-transparent border border-white rounded-lg" {...register("email", { required: "メールアドレスを入力してください。" })} />
                        {errors.name && <p className="text-white font-semibold mb-2 text-sm opacity-80">{errors.name.message}</p>}
                        <label htmlFor="message" className="fadeIn">
                            お問い合わせ内容
                        </label>
                        <textarea id="message" className="fadeIn w-[50vw] h-[20vh] md:w-[80vw] md:h-[30vh] mx-2 my-5 p-2 text-left bg-transparent border border-white rounded-lg" {...register("message", { required: "メッセージを入力してください。" })} />
                        {errors.name && <p className="text-white font-semibold mb-2 text-sm opacity-80">{errors.name.message}</p>}
                        <button type="submit" className="w-[150px] fadeIn bg-transparent border border-white text-white font-semibold rounded-lg p-2 mt-5 hover:opacity-60 mb-2">送信</button>
                    </form>
                </div>
            </div>
        </main>
    )
}