"use client"
import { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"; 
import { db } from "../../../firebase";
import { useAppContext } from "@/app/chat/layout";
export default function Sidebar(){
    interface Room{
        id: string;
        name:string;
        createdAt:string;
    }
    const {user,userId} = useAppContext();
    useEffect(() =>{
        const fetchRooms = () =>{
        const roomCollectionRef = query(collection(db, "rooms"));
        const q = query(
            roomCollectionRef,
            where("userId", "==", "XYnEIGuk9OgUG1sAirppvpzQIZS2"), 
            orderBy("createdAt"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newrooms: Room[] = querySnapshot.docs.map((doc) =>({
                id: doc.id,
                name: doc.data().name,
                createdAt: doc.data().createdAt,
            }));
        setRooms(newrooms)
        console.log(newrooms)
        }); 
        //メモリリークを防ぐ
        return() =>{
            unsubscribe()
        }
            }
        fetchRooms();
    },[]);
    
    const [rooms,setRooms] = useState<Room[]>([]);
    return (
        <div className="h-full overflow-y-auto px-5 flex-col bg-gray-600 text-white">
            <div className="flex-grow">
                <div className="max-w-[200px] mx-auto cursor-pointer mt-2 flex items-center justify-center border border-white rounded-lg
                hover:opacity-50">
                    <span className="text-[30px]">+</span>
                    <h2>New Chat</h2>
                </div>
                <ul>
                    {rooms.map((room) =>(
                        
                    <li key = {room.id} className="cursor-pointer text-center border-b p-4 hover:opacity-50">
                     {room.name}
                     </li>
                    ))}
                </ul>
                <div className="h-20 flex items-center justify-center absolute bottom-0 hover:opacity-50 cursor-pointer">
                <CiLogout />
                <span className="ml-2">LogOut</span>
                </div>
            </div>
        </div>
    )
}

function fetchRooms() {
    throw new Error("Function not implemented.");
}
