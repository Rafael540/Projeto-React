import QueryString from "qs";
import type { CrendetialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as acessTokenRepository from "../localStorage/acess-token-repository";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function loginRequest(loginData: CrendetialsDTO){

    const headers = {
        "Content-Type": "application/x-www-form-ulrencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
     }

     const requestBody = QueryString.stringify({...loginData, grant_type: "password"});

     const config : AxiosRequestConfig ={
        method: "POST",
        url: "/oauth/token",
        data: requestBody,
        headers
     }


    return requestBackend(config);
}

export function logout(){
    acessTokenRepository.remove();
}

export function saveAcessToken(token: string){
    acessTokenRepository.save(token);
}

export function getAcessToken(){
    return acessTokenRepository.get();
}