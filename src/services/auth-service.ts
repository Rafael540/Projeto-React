import QueryString from "qs";
import type { CrendetialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function loginRequest(loginData: CrendetialsDTO){

    const headers = {
        "Content-Type": "application/x-www-form-ulrencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
     }

     const requestBody = QueryString.stringify({...loginData, grant_type: "password"})

     console.log(requestBody);
}
