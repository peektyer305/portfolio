"use client"
import Sidebar from "@/components/Sidebar/page";
import Chat from "@/components/Chat/page";
import { useAppContext } from "./layout";
import { redirect } from "next/navigation";
export default function ChatPage(){
    const {user} = useAppContext()
    if(!user){
        redirect("/chat/auth/login")
    }
    return(
        <div className="mt-10 flex h-screen justify-start items-center">
            <div className="h-full flex w-screen">
                <div className="w-1/5">
                    <Sidebar />
                </div>
                <div className="w-4/5 bg-gray-800">
                    <Chat />
                </div>
            </div>
        </div>
    )
}