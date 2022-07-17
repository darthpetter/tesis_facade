import { useEffect, useState } from "react";
import { Icons } from "../assets/icons/Icons";

export const Notificacion=(props)=>{

    const [messages,setMessages]=useState(props.errores);

    const close=props.closeNotify

    setTimeout(()=>{
        close()
    },4000)
    
    return(
        <div className="bg-danger-500 backdrop-blur-sm bg-opacity-80 rounded-md fixed z-99 bottom-0 left-0 m-10 p-4">
            <div className="flex items-center justify-between my-2 text-lg  text-neutral-900">            
                <span className="header-title font-medium">Error:</span>
                <button
                    className="hover:text-neutral-600"
                    onClick={(e)=>close()}
                >
                    {Icons.close_icon()}
                </button>
            </div>
            <div className="grid grid-cols-1 text-md text-neutral-900">
                {
                    Object.keys(messages).map( (key) => {
                        return (
                            <span 
                                key={messages[key]}
                                className="py-2"
                            >
                                {messages[key]}
                            </span>
                        );
                    })
                }
            </div>
        </div>
    )
}