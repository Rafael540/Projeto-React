import type { CrendetialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function loginRequest(loginData: CrendetialsDTO){

    const headers = {
        "Content-Type": "application/x-www-form-ulrencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
     }

     console.log(headers);
}
