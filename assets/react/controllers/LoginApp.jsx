import React from "react";
import MyHeader from "./Header";
import MyFooter from "./Footer";
import LoginForm from "./LoginForm";

export default function LoginApp({ prop_object }) {
    return (
        <>
            <MyHeader buscador_link={prop_object.buscador_link} administracion_link={prop_object.administracion_link} login_link={prop_object.login_link}/>
            <LoginForm />
            <div className="absolute bottom-0 w-full">
                <MyFooter />
            </div>
        </>
    )
}