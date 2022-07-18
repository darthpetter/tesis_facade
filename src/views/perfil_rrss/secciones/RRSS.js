import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import { Icons } from "../../assets/icons/Icons"
import { PerfilRRSS } from "../../../jwt/_services";
import { async } from "rxjs";

export const RRSS = () => {

    const initialState = {
        facebook_profile: '',
        instagram_profile: '',
        twitter_profile: '',
        url_personal: '',
    }

    const [rrss, setRRSS] = useState(initialState)

    useEffect(()=>{
        get_info()
    },[])

    const handleRRSS = (e) => {
        setRRSS({
            ...rrss,
            [e.target.name]: e.target.value,
        })
    }

    const get_info = async () => {
        await PerfilRRSS.get_data_rrss()
            .then(data => {
                setRRSS(data.rrss);
            })
    }

    const guardar_rrss = async () => {
        await PerfilRRSS.guardar_rrss(rrss)
            .then(data => {
                if (data.status === 200) {
                    Swal.fire(
                        'Redes Sociales Actualizadas',
                        '',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            <div>
                <h4 className="header-title text-2xl text-guayaquil-700 font-medium">Redes Sociales</h4>
            </div>

            <div className="p-4 border border-gray-300 rounded-md grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-neutral-500 text-sm">
                        {Icons.facebook_icon()}
                    </span>
                    <input
                        type="text"
                        name="facebook_profile"
                        id="facebook_profile"
                        onChange={(e) => handleRRSS(e)}
                        value={rrss.facebook_profile}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                        placeholder="@usuario"
                    />
                </div>

                <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-neutral-500 text-sm">
                        {Icons.instagram_icon()}
                    </span>
                    <input
                        type="text"
                        name="instagram_profile"
                        id="instagram_profile"
                        onChange={(e) => handleRRSS(e)}
                        value={rrss.instagram_profile}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                        placeholder="@usuario"
                    />
                </div>

                <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-neutral-500 text-sm">
                        {Icons.twitter_icon()}
                    </span>
                    <input
                        type="text"
                        name="twitter_profile"
                        id="twitter_profile"
                        onChange={(e) => handleRRSS(e)}
                        value={rrss.twitter_profile}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                        placeholder="@usuario"
                    />
                </div>

                <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-neutral-500 text-sm">
                        {Icons.www_icon()}
                    </span>
                    <input
                        type="text"
                        name="url_personal"
                        id="url_personal"
                        onChange={(e) => handleRRSS(e)}
                        value={rrss.url_personal}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                        placeholder="www.ejemplo.com"
                    />
                </div>

                <div className="col-span-2 flex items-center justify-end">
                    <button
                        id="btn_guardar-perfil"
                        onClick={(e) => guardar_rrss()}
                        className="py-2 px-4 bg-guayaquil-600 text-white rounded-md hover:bg-guayaquil-700 focus:bg-guayaquil-400"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    )
}