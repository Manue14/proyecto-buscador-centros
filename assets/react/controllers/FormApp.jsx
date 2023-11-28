import React from "react";
import MyHeader from "./Header";
import MyFooter from "./Footer";
import MyForm from "./Formulario";
import Map from "./Map";

export default function FormApp() {
    return (
        <>
            <MyHeader />
            <div className="m-auto h-fit mt-10 lg:flex">
                <div className="lg:w-1/2">
                    <MyForm />
                </div>
                <div className="h-[60vh] w-full mt-8 lg:m-auto lg:h-[90vh] lg:w-1/2">
                    <Map />
                </div>
            </div>
            <MyFooter />
        </>  
    );
}