import React from "react";
import logoPath from '../../images/marcas/cons_cultura_eou-cor-neg.png';
import logoPath_sm from '../../images/marcas/marca-negativo.png';

export default function MyFooter() {
    return (
        <footer className="relative bottom-0 bg-xuntaGris-600 p-4 mt-8 text-slate-300 flex justify-between">
            <a href="https://www.edu.xunta.gal/" className="mr-4 md:mr-0">
                <img src={logoPath_sm} className="h-8 md:hidden"></img>
                <img src={logoPath} className="h-8 lg:h-14 hidden md:block"></img>
            </a>
            <ul className="flex space-x-2 md:space-x-6 items-center text-xs md:text-lg lg:text-xl">
                <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 md:hidden">
                        <path fillRule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hidden md:inline">
                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                    </svg>
				    Centroseducativos 2.7.0
			    </li>
                <li>
                    <a href="https://www.edu.xunta.gal/centroseducativos/VerContacto.do" className="flex hover:text-slate-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 md:hidden">
                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 hidden md:inline">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        Contacto
                    </a>
			    </li>
            </ul>
        </footer>
    )
}