import { useState } from "react"
import { Icons } from "../../assets/icons/Icons"


export const RRSS = () => {

    /*
    'facebook_profile','instagram_profile','twitter_profile','url_personal
    */

    const initialState = {
        facebook_profile: '',
        instagram_profile: '',
        twitter_profile: '',
        url_personal: '',
    }

    const [rrss, setRRSS] = useState(initialState)

    const handleRRSS = (e) => {
        setRRSS({
            ...rrss,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="grid grid-cols-1 gap-4">
            <div>
                <h4 className="header-title text-2xl text-guayaquil-700 font-medium">Redes Sociales</h4>
            </div>
            
            <div className="p-4 border border-gray-600 rounded-md grid grid-cols-2 gap-5">
                <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        {Icons.facebook_icon()}
                    </span>
                    <input
                        type="text"
                        name="facebook_profile"
                        id="facebook_profile"
                        onChange={(e)=> handleRRSS(e)}
                        value={rrss.facebook_profile}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                        placeholder="@usuario"
                    />
                </div>
                <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        {Icons.instagram_icon()}
                    </span>
                    <input
                        type="text"
                        name="instagram_profile"
                        id="instagram_profile"
                        onChange={(e)=> handleRRSS(e)}
                        value={rrss.instagram_profile}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                        placeholder="@usuario"
                    />
                </div>
                <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    </span>
                    <input
                        type="text"
                        name="twitter_profile"
                        id="twitter_profile"
                        onChange={(e)=> handleRRSS(e)}
                        value={rrss.twitter_profile}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                        placeholder="@usuario"
                    />
                </div>
                <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        http://
                    </span>
                    <input
                        type="text"
                        name="url_personal"
                        id="url_personal"
                        onChange={(e)=> handleRRSS(e)}
                        value={rrss.url_personal}
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                        placeholder="www.ejemplo.com"
                    />
                </div>
            </div>
        </div>
    )
}