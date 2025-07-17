import { Outlet } from "react-router-dom";
import HeadClient from "../../components/HeaderClient";

export default function ClientHome(){

    return(
        <>
            <HeadClient/>
            <Outlet/>
        </>

    )
}


