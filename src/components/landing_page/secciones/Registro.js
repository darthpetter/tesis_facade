const Registro=()=>{
    return(
        <div id="registro" className="min-h-screen w-full bg-wall-pattern flex items-center justify-center">
            <div className="bg-guayaquil-50 rounded-lg p-20 w-1/3 shadow-lg shadow-black/40">
                <div className="grid grid-cols-1 gap-8 justify-items-stretch">
                    <h2 className="header-title text-2xl font-medium text-center">Camella Ya</h2>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-guayaquil-500 focus:border-guayaquil-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            />
                        </div>
                        <div>
                            <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-guayaquil-500 focus:border-guayaquil-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            />
                        </div>
                    </div>
                    <button className="header-title text-sm text-white bg-guayaquil-600 hover:bg-guayaquil-700 focus:bg-guayaquil-400 rounded-full px-4 py-2">Registrarse</button>
                </div>
            </div>
        </div>
    );
}


export default Registro;
