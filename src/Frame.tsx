import { Outlet } from "react-router-dom";
import Header from "./Frame/Header";
import SnackNotification from "./Frame/SnackNotification";

export default function Frame() {
    return (
        <>
            <Header/>
            <Outlet/>
            <SnackNotification/>
        </>
    )
};