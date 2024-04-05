"use client"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../../../../../firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface UserInput {
    email: string;
    password: string;
}
export default function Register(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<UserInput>();
      const router = useRouter();
      const onSubmit: SubmitHandler<UserInput> = async(data) => {
        const {email,password} = data;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         const user = userCredential.user;
         console.log(user)
         if(user){
                router.push("/chat/auth/login")
                alert("登録に成功しました！")
         }
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
           alert(errorCode+":"+errorMessage)
    });
      };
    return(
        <div className="bg-gray-800 h-screen flex justify-center items-center">
             <form onSubmit={handleSubmit(onSubmit)} className="h-auto text-white font-semibold flex flex-col justify-start items-start rounded-lg px-4">
                        <p className="mt-5 text-[30px]">新規登録</p>
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
                        <button type="submit" className="focus:opacity-50 w-[150px] border border-white font-semibold rounded-lg p-2 mt-5 hover:opacity-60 mb-2">新規登録</button>
                        <p className="text-base font-normal mb-2">既にアカウントをお持ちですか？</p>
                        <Link href={"/chat/auth/login"}>ログインページへ</Link>
                    </form>
                    
        </div>
    )
}