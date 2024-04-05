"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { UserInput } from "../register/page";
import Link from "next/link";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<UserInput>();
    const router = useRouter();
    const onSubmit: SubmitHandler<UserInput> = async(data) =>{
        const auth = getAuth();
        const {email,password} = data;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        //console.log(user)
            router.push("/chat")
            alert("ログインに成功しました！")
                         })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage+errorCode);
        });
      }
    return(
        <div className="bg-gray-800 h-screen flex justify-center items-center">
             <form onSubmit={handleSubmit(onSubmit)} className="h-auto text-white font-semibold flex flex-col justify-start items-start rounded-lg px-4">
                        <p className="mt-5 text-[30px]">ログイン</p>
                        <label htmlFor="email"className="mt-5">
                            メールアドレス
                        </label>
                        <input type="text" id="email" autoComplete="email"
                        className="w-[50vw] bg-transparent md:w-[80vw] mr-2 my-5 p-2 border border-white rounded-lg"
                        {...register("email", { 
                        required: "メールアドレスを設定してください。" ,
                        pattern:{
                            value:
                            /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
                            message:
                            "不適切なメールアドレスです．"
                        },
                    })} />
                        {errors.email && <p className="text-red-400 font-bold mb-2 text-sm opacity-80">{errors.email.message}</p>}
                        <label htmlFor="password"className="mt-2">
                            パスワード
                        </label>
                        <input type="password" id="password" autoComplete="password" className="w-[50vw] md:w-[80vw] mr-2 my-5 p-2 bg-transparent border border-white rounded-lg" {...register("password", { required: "パスワードを設定してください。" ,
                        minLength:{
                            value:6,
                            message:"パスワードは6文字以上で設定してください．"
                        }
                    })} />
                    {errors.password && <p className="text-red-400 font-bold mb-2 text-sm opacity-80">{errors.password.message}</p>}
                        <button type="submit" className="w-[150px] border border-white font-semibold rounded-lg p-2 mt-5 hover:opacity-60 mb-2 focus:opacity-50">ログイン</button>
                        <p className="text-base font-normal mb-2">アカウントをお持ちでないですか？</p>
                        <Link href={"/chat/auth/register"}>新規登録ページへ</Link>
                    </form>
                    
        </div>
    )
}