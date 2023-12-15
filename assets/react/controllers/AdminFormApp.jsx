import React from "react";
import MyHeader from "./Header";
import MyFooter from "./Footer";
import AdminForm from "./AdminForm";
import MessageModal from "./MessageModal";
import { SessionContext } from "./Context.js";

export default function AdminFormApp() {
    return (
        <>
        <SessionContext.Provider value={prop_object.session}>
            <MyHeader buscador_link={prop_object.buscador_link} administracion_link={prop_object.administracion_link} login_link={prop_object.login_link}/>
            <div className="m-auto">
                <MessageModal type={prop_object.type} message={prop_object.message}/>
            </div>
            <div className="m-auto h-fit mt-10">
                <div className="lg:w-full">
                    <AdminForm method={prop_object.method} action={prop_object.action} centros={prop_object.centros} concellos={prop_object.concellos} tipos_centro={prop_object.tiposCentro} action_delete={prop_object.actionDelete}/>
                </div>
            </div>
            <MyFooter />
        </SessionContext.Provider>
        </>  
    );
}