import React from "react";
import logoPath from '../../images/marcas/marca-positivo.png';
import PrimaryButton from './PrimaryButton';

export default function LoginForm() {
    return(
        <div className="bg-xuntaGris-50 md:flex mx-10 mt-12 md:mt-24 border border-black rounded-md overflow-hidden md:h-[50vh] lg:h-[50vh] lg:w-1/2 lg:mx-auto">
            <div className="md:w-1/2 mx-2 mt-4 mb-6 md:flex md:flex-col md:place-content-center">
                <h1 className="hidden md:block text-center text-xl pb-4 font-bold">Inicio de sesión</h1>
                <div className="flex text-center align-middle flex-col py-9 px-5 md:hidden">
                    <img src={logoPath} className="h-20 m-auto mb-8"/>
                    <p className="mx-1 text-xl">Inicie sesión coa súa conta de administración proporcionada pola Xunta</p>
                </div>
                <form className="flex flex-col">
                    <input type="text" placeholder="Correo de xunta" className="mb-7 p-3 mx-3 border-b border-xuntaGris-100 bg-slate-50 focus:outline-none focus:bg-xuntaAzul-50 focus:border-xuntaAzul-200"></input>
                    <input type="password" placeholder="Contrasinal" className="mb-7 p-3 mx-3 border-b border-xuntaGris-100 bg-slate-50 focus:outline-none focus:bg-xuntaAzul-50 focus:border-xuntaAzul-200"></input>
                    <PrimaryButton color="xuntaAzul" handleOnClick={(e) => {
                        e.preventDefault();
                        console.log("Iniciar sesión");
                    }}>Iniciar sesión</PrimaryButton>
                </form>
            </div>
            <div className="hidden md:flex md:place-content-center bg-blue-50 md:w-1/2 text-center flex-col px-5">
                <img src={logoPath} className="h-18 mb-10"/>
                <p className="mx-6 mb-5 text-xl">Inicie sesión coa súa conta de administración proporcionada pola Xunta</p>
            </div>
        </div>
    );
}