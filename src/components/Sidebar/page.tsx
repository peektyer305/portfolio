"use client"
import { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore"; 
import { db } from "../../../firebase";
import { useAppContext } from "@/app/chat/layout";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation"; 

export interface Room{
        id: string;
        name:string;
        createdAt:string;
    }
export default function Sidebar(){
   
    const { setSelectedRoom,setSelectedRoomName } = useAppContext()
    const selectRoom = (room: Room) =>{
        setSelectedRoom(room.id);
        setSelectedRoomName(room.name)
        //console.log(room.id);
    }
    const router = useRouter();
    const {user,userId} = useAppContext();
    const logOut = () =>{
        const auth = getAuth();
        signOut(auth)
        .then(() => {
        router.push("/chat/auth/login") 
        alert("ログアウトが成功しました．")
        })
        .catch((error) => {
        alert("ログアウト中にエラーが発生しました．もう一度お試しください．") 
        });
    
    
        }
    const addNewRoom = async() =>{
        const roomName = prompt("ルーム名を入力して下さい")
        if(roomName){
            const roomNameRef = collection(db,"rooms")
            await addDoc(roomNameRef,{
                name: roomName,
                userId: userId,
                createdAt: serverTimestamp(),
            })
        }
    }
    useEffect(() =>{
        if(user){
        const fetchRooms = () =>{
        const roomCollectionRef = query(collection(db, "rooms"));

        const q = query(
            roomCollectionRef,
            where("userId", "==", userId), 
            orderBy("createdAt"))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const newrooms: Room[] = querySnapshot.docs.map((doc) =>({
                id: doc.id,
                name: doc.data().name,
                createdAt: doc.data().createdAt,
            }));
        setRooms(newrooms)
        //console.log(newrooms)
        }); 
        //メモリリークを防ぐ
        return() =>{
            unsubscribe()
        }
            }
        fetchRooms();
    }
    },[userId]);
    
    const [rooms,setRooms] = useState<Room[]>([]);
    return (
        <div className="h-full overflow-y-auto px-5 flex-col bg-gray-600 text-white">
            <div className="flex-grow">
                <div onClick={addNewRoom} className="max-w-[200px] mx-auto cursor-pointer mt-2 flex items-center justify-center border border-white rounded-lg
                hover:opacity-50">
                    <span className="text-[30px]">+</span>
                    <h2>New Chat</h2>
                </div>
                <ul>
                    {rooms.map((room) =>(
                        
                    <li key = {room.id} onClick={() => selectRoom(room)} className="cursor-pointer text-center border-b p-4 hover:opacity-50">
                     {room.name}
                     </li>
                    ))}
                </ul>
                <div className="h-20 flex items-center justify-center absolute bottom-0 hover:opacity-50 cursor-pointer">
                <CiLogout />
                <button className="ml-2" onClick={logOut}>LogOut</button>
                </div>
            </div>
        </div>
    )
}
