import { BsSendFill } from "react-icons/bs";
export default function Chat(){
  
    return (
        <div className="text-white p-4 flex flex-col">
            <h1>ROOM1</h1>
            <div className="flex-grow overflow-y-auto mb-4">
                <div className="text-right">
                    <div className="bg-blue-500 inline-block rounded px-4 py-2 mb-2">
                        Hello
                    </div>
                </div>
                <div className="text-left">
                <div className="bg-green-500 inline-block rounded px-4 py-2 mb-2">
                        Hello
                    </div>
                </div>
                <div className="flex-shrink-0 absolute bottom-20 w-2/3">
                    <textarea  id="chat" placeholder="Send a message" 
                    className="py-2 px-2 bg-transparent border-2 rounded w-full focus:outline-none h-auto">
                           
                    </textarea>
                 <button className="absolute inset-y-0 flex items-center right-4">
                    <BsSendFill />
                 </button>
                </div>
            </div>
        </div>
    )
}