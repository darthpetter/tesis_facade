import { BehaviorSubject } from "rxjs";
import {BASE_URL} from './URL.service';

import { HandleResponse ,AuthHeader} from "../_helpers";
// localhost:8000/api/auth/forgotPassword
const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

//devuelve las funciones 
export const AuthenticationService = {
  login,
  refresh_token,
  recuperar_clave,
  cambiar_clave,
  logout,
  validar_uuid,
  getDatabase,
  getPerfilDataBase,
  impersonate_login_bap,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  },
};


function login(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}auth/login`, requestOptions)
    .then(HandleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("currentUser", JSON.stringify(user.text));
      currentUserSubject.next(user.text);
      return user.text;
    });
}

function impersonate_login_bap(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(`${BASE_URL}auth/impersonate_login_bap`, requestOptions)
    .then(HandleResponse)
    .then((user) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("currentUser", JSON.stringify(user.text));
      currentUserSubject.next(user.text);
      return user.text;
    });
}


function refresh_token(token) {
  const requestOptions = {
    method: "POST",
    headers: AuthHeader(),
    body: JSON.stringify({ token }),
  };

  return fetch(`${BASE_URL}admin/refresh`, requestOptions)
    .then(HandleResponse)
    .then((response) => {
      var user = JSON.parse(localStorage.getItem("currentUser"));
      user.user.token = response.text.access_token;
      localStorage.removeItem("currentUser");
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);
      return response.text.expires_in;
    });
}


function logout() {
  // remove user from local storage to log user out
  localStorage.clear('persist:persistedStore');
  localStorage.clear('persist:root');
  localStorage.clear();
  window.location.reload(true);
  currentUserSubject.next(null);
}


function recuperar_clave(correo) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo }),
  };

  return fetch(`${BASE_URL}auth/forgotPassword`, requestOptions)
    .then(HandleResponse)
    .then((response) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      return response;
    });
}

function validar_uuid(token) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  };

  return fetch(`${BASE_URL}auth/confirmToken`, requestOptions)
    .then(HandleResponse)
    .then((response) => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      return response;
    });
}


function cambiar_clave( token, clave ) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, clave }),
  };

  return fetch(`${BASE_URL}auth/resetPassword`, requestOptions)
    .then(HandleResponse)
    .then((response) => {
     return response;
    });
  }

    function getDatabase(correo,clave) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({correo,clave}),
      };
    
      return fetch(`${BASE_URL}auth/getDatabase`, requestOptions)
        .then(HandleResponse)
        .then((response) => {
         return response.text;
        });
}

function getPerfilDataBase(correo, dataBase) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({correo, dataBase}),
  };

  return fetch(`${BASE_URL}auth/getPerfilDataBase`, requestOptions)
    .then(HandleResponse)
    .then((response) => {
     return response.text;
    });
}



