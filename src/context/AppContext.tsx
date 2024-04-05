"use client"
import { onAuthStateChanged, User } from "firebase/auth";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../../firebase";

type AppProviderProps = {
    children: ReactNode
}

type AppContexttype ={
    user: User | null;
    userId: string | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    selectedRoom: string | null;
    setSelectedRoom: React.Dispatch<React.SetStateAction<string | null>>;
    setSelectedRoomName:React.Dispatch<React.SetStateAction<string | null>>;
    selectedRoomName: string | null;
}

const defaultContextdata = {
    user: null,
    userId: null,
    setUser: ()=>{},
    selectedRoom:null,
    setSelectedRoom:()=>{},
    selectedRoomName:null,
    setSelectedRoomName:() =>{},
};

export const AppContext = createContext<AppContexttype>(defaultContextdata);

export function AppProvidder({children}: AppProviderProps){
        const [user,setUser] = useState<User|null>(null)
        const [userId,setUserId] = useState<string|null>(null)
        const [selectedRoom,setSelectedRoom] = useState< string | null>(null)
        const [selectedRoomName,setSelectedRoomName] = useState<string | null>(null)
        useEffect(() =>{
            const unsubscribe =  onAuthStateChanged(auth, (newUser) =>{
                setUser(newUser);
                setUserId(newUser ? newUser.uid : null);
            })
            return () =>{
                unsubscribe();
            }
        },[]);
        return <AppContext.Provider value={{user,userId,setUser,selectedRoom,setSelectedRoom,setSelectedRoomName,selectedRoomName}}>{children}</AppContext.Provider>
}                   