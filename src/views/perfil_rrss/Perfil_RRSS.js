import {Perfil} from './secciones/Perfil';
import {RRSS} from './secciones/RRSS';

export const Perfil_RRSS=()=>{
    
    return (
        <div className="min-w-screen min-h-screen bg-guayaquil-500 flex items-center justify-center">
            <div className="bg-white rounded-md w-3/4 p-6 shadow-lg">
                <div className='grid grid-cols-1 gap-6'>
                    <Perfil/>
                    <RRSS/>
                </div>
            </div>
        </div>
    )

}