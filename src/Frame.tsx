import { Outlet } from "react-router-dom";
import Header from "./Frame/Header";

export default function Frame() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
};