import React from "react";
import MyHeader from "./Header";
import MyFooter from "./Footer";
import LoginForm from "./LoginForm";

export default function LoginApp() {
    return (
        <>
            <MyHeader />
            <LoginForm />
            <div className="absolute bottom-0 w-full">
                <MyFooter />
            </div>
        </>
    )
}