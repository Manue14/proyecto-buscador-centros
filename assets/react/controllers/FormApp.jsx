import React from "react";
import MyHeader from "./Header";
import MyFooter from "./Footer";
import MyForm from "./Formulario";
import Map from "./Map";
import MyTable from "./TableResults";
import MessageModal from "./MessageModal";

export default function FormApp({ prop_object }) {
    return (
        <>
            <MyHeader buscador_link={prop_object.buscador_link} administracion_link={prop_object.administracion_link} login_link={prop_object.login_link}/>
            <div className="m-auto">
                <MessageModal type={prop_object.type} message={prop_object.message}/>
            </div>
            <div className="m-auto h-fit mt-10 lg:flex">
                <div className="lg:w-1/2">
                    <MyForm action={prop_object.action}/>
                </div>
                <div className="h-[60vh] w-full mt-8 lg:m-auto lg:h-[90vh] lg:w-1/2">
                    <Map />
                </div>
            </div>
            <div className="mt-10">
                <MyTable />
            </div>
            <MyFooter />
        </>  
    );
}