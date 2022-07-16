export const NetworkService = {
    errorRed,
    };

function errorRed (){
        const error = "El servicio no esta disponible, comuniquese con el Administrador";
        return Promise.reject(error);
}