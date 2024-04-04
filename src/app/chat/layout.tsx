import { AppContext, AppProvidder } from "@/context/AppContext";
import { useContext } from "react";

export default function Chatlayout({
    children,
}:{
    children: React.ReactNode,
}){

    return(
        <AppProvidder>
            {children}
        </AppProvidder>
    );
}
export function useAppContext(){
    return useContext(AppContext)
}
