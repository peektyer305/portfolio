"use client"
import { useEffect, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { db } from "../../../firebase";
import { addDoc, collection, doc, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from "firebase/firestore";
import { useAppContext } from "@/app/chat/layout";
import OpenAI from "openai";

interface Message {
    text:string;
    sender: string;
    createdAt: Timestamp;
}
export default function Chat(){
   
    const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
        dangerouslyAllowBrowser:true,
    })
    const {selectedRoom,selectedRoomName} = useAppContext();
    const [messages,setMessages] = useState<Message[]>([])
    useEffect(() =>{
        if(selectedRoom){
            const fetchMessages = () =>{
            const roomDocRef =  doc(db,"rooms",selectedRoom);
            const messagesCollectionRef = collection(roomDocRef,"messages")
            const q = query(
                messagesCollectionRef, 
                orderBy("createdAt"))
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const newMessages = snapshot.docs.map((doc) =>doc.data() as Message)
                setMessages(newMessages);
            }); 
            //メモリリークを防ぐ
            return() =>{
                unsubscribe()
            }
                }
            fetchMessages();
        }
    },[selectedRoom])
    const [inputMessage,setInputMessage] = useState<string>("");
    const sendMessage = async() =>{
        if(!inputMessage.trim()) return;

        const messageData = {
            text:inputMessage,
            sender: "user",
            createdAt: serverTimestamp(),
        }
        const roomDocRef = doc(db,"rooms",selectedRoom!);
        const messageCollectionRef = collection(roomDocRef,"messages");
        await addDoc(messageCollectionRef,messageData)
        const textarea= document.getElementById("chat") as HTMLTextAreaElement;
        if(textarea!==null)textarea.value = "";
        
        const gptResponse= await openai.chat.completions.create({
            messages:[{role:"user", content:inputMessage}],
            model:"babbage-002",
        });
        //console.log(gptResponse);

    }
    return (
        <div className="text-white p-4 flex flex-col">
            <h1>{selectedRoomName}</h1>
            <div className="flex-grow overflow-y-auto mb-4">
                {messages.map((message,index) =>(
                    <div key = {index} className="overflow-y-auto">
                    {(message.sender === "user") && (  
                    <div className="text-right">
                     <div className="bg-blue-500 inline-block rounded px-4 py-2 mb-2">
                         {message.text}
                     </div>
                    </div>)}
                    {(message.sender == "bot") && (
                    <div className="text-left">
                    <div className="bg-green-500 inline-block rounded px-4 py-2 mb-2">
                         {message.text}
                     </div>
                    </div>
                    )}
                
                    </div>
                ))}
                <div className="flex-shrink-0 fixed bottom-10 w-2/3">
                    <textarea  id="chat" placeholder="Send a message" 
                    onChange={(e) => setInputMessage(e.target.value)}
                    className="py-2 px-2 bg-transparent border-2 rounded w-full focus:outline-none h-auto">
                           
                    </textarea>
                 <button className="absolute bottom-10 inset-y-0 flex items-center right-4 h-auto"
                 onClick={sendMessage}>
                    <BsSendFill  className="absolute top-7 right-5"/>
                 </button>
                </div>
            </div>
        </div>
    )
}