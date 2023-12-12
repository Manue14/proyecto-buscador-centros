import React from "react";
import MyHeader from "./Header";
import MyFooter from "./Footer";
import LoginForm from "./LoginForm";
import MessageModal from "./MessageModal";
import { SessionContext } from "./Context.js";

export default function LoginApp() {
    return (
        <>
        <SessionContext.Provider value={prop_object.session}>
            <MyHeader buscador_link={prop_object.buscador_link} administracion_link={prop_object.administracion_link} login_link={prop_object.login_link}/>
            <div className="m-auto">
                <MessageModal type={prop_object.type} message={prop_object.message}/>
            </div>
            <LoginForm method={prop_object.method} action={prop_object.action}/>
            <div className="absolute bottom-0 w-full">
                <MyFooter />
            </div>
        </SessionContext.Provider>
        </>
    )
}