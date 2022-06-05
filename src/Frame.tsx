import { Outlet } from "react-router-dom";
import Header from "./Frame/Header";
import { Badge } from "cogi-uikit";

export default function Frame() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Badge label="test"/>
        </>
    )
};