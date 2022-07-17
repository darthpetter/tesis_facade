import { useState } from "react"

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
                        http://
                    </span>
                    <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                        placeholder="www.ejemplo.com"
                    />
                </div>
                <div className="mt-1 flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                        http://
                    </span>
                    <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="p-2 focus:ring-guayaquil-500 focus:ring-1 focus:ring-opacity-40 focus:border-guayaquil-500 focus:outline-none block w-full shadow-sm border border-gray-400 rounded-md"
                        placeholder="www.ejemplo.com"
                    />
                </div>
            </div>
        </div>
    )
}