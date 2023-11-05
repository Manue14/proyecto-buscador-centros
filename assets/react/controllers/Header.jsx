import React from 'react';
import logoPath from '../../images/marcas/marca-positivo.png';

export default function MyHeader() {
    return (
        <header className="bg-xuntaGris">
            <nav className="flex w-full items-center justify-between p-6">
                <div className="flex lg:flex-1">
                    <a href="https://www.edu.xunta.gal/" class="-m-1.5 p-1.5">
                        <img src={logoPath} className="h-8 w-28" alt="Logo Xunta de Galicia" />
                    </a>
                </div>
                <div className="flex flex-1 space-x-5">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Inicio</a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Registro</a>
                </div>
                <div className="flex space-x-5 items-center h-full">
                    <p>Hola usuario: user</p>
                    <button className="bg-xuntaNaranja hover:bg-xuntaAzulClaro text-white py-2 px-4 rounded-full">Cerrar sesión</button>
                </div>
            </nav>
        </header>
    );
}
