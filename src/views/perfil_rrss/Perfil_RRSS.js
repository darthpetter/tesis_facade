import {Perfil} from './secciones/Perfil';
import {RRSS} from './secciones/RRSS';
import { Notificacion } from './Notificacion';
import { useState } from 'react';

export const Perfil_RRSS=()=>{
    
    const [listError,setListError] =useState({})
    const [launchHandler,setLaunchHandler]=useState(false)

    const notifyError=(errores)=>{
        console.log("🚀 ~ file: Perfil_RRSS.js ~ line 12 ~ notifyError ~ errores", errores)
        setListError(errores)
        setLaunchHandler(true)
    }
    const closeNotify=()=>{
        setLaunchHandler(false)
    }

    return (
        <div className="min-w-screen min-h-screen bg-guayaquil-500 flex items-center justify-center py-4 lg:py-20 lg:px-40">
            <div className="bg-white rounded-md w-3/4 p-10 shadow-lg">
                <div className='grid grid-cols-1 gap-y-10'>
                    <Perfil notifyError={notifyError}/>
                    <RRSS notifyError={notifyError}/>  
                </div>
            </div>
            {
                launchHandler &&
                <Notificacion errores={listError} closeNotify={closeNotify}/>
            }
        </div>
    )

}