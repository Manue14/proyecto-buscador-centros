import React from "react";
import { useState } from 'react';

export default function MyTable({ centros }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfCentros, setNumberOfCentros] = useState(5);
    let paginas = 0;

    window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
            setWindowWidth(window.innerWidth);
        } else if (windowWidth < 768 && window.innerWidth >= 768){
            setWindowWidth(window.innerWidth);
        }
    })

    function returnPage() {
        if (currentPage >= 2) {
            setCurrentPage(currentPage - 1);
        }
    }

    function advancePage() {
        setCurrentPage(currentPage + 1);
    }

    function handleSelectNumCentros() {
        let numberOfCentrosDropdown = document.getElementById("numberSelect");
        setNumberOfCentros(parseInt(numberOfCentrosDropdown.value));
        setCurrentPage(1);
    }

    let centrosTr = <></>;
    if (Array.isArray(centros)) {
        paginas = Math.ceil(centros.length / numberOfCentros);
        centrosTr = centros.map((centro) => {
            return(
                <tr key={centro.id} className="bg-slate-200 [&:nth-child(2n)]:bg-white hover:bg-slate-300 [&:nth-child(2n)]:hover:bg-slate-300">
                    <td className="p-6">{centro.id}</td>
                    <td>{centro.nombre}</td>
                    <td>{centro.direccion}</td>
                    <td>{centro.concello}</td>
                    <td>{centro.provincia}</td>
                    <td>{centro.cod_postal}</td>
                    <td>{centro.tlf}</td>
                </tr>
            );
        })
    }

    let centrosTbody = <></>;
    if (Array.isArray(centros)) {
        centrosTbody = centros.map((centro) => {
            return(
                <tbody key={centro.id} className="bg-white [&:nth-child(2n)]:bg-slate-200 border-b-2 border-black">
                    <tr className="border-b border-black hover:bg-slate-300">
                        <th className="p-4">Código</th>
                        <td>{centro.id}</td>
                    </tr>
                    <tr className="border-b border-black hover:bg-slate-300">
                        <th className="p-4">Nome</th>
                        <td>{centro.nombre}</td>
                    </tr>
                    <tr className="border-b border-black hover:bg-slate-300">
                        <th className="p-4">Enderezo</th>
                        <td>{centro.direccion}</td>
                    </tr>
                    <tr className="border-b border-black hover:bg-slate-300">
                        <th className="p-4">Concello</th>
                        <td>{centro.concello}</td>
                    </tr>
                    <tr className="border-b border-black hover:bg-slate-300">
                        <th className="p-4">Provincia</th>
                        <td>{centro.provincia}</td>
                    </tr>
                    <tr className="border-b border-black hover:bg-slate-300">
                        <th className="p-4">Cód. postal</th>
                        <td>{centro.cod_postal}</td>
                    </tr>
                    <tr className="border-b border-black hover:bg-slate-300">
                        <th className="p-4">Teléfono</th>
                        <td>{centro.tlf}</td>
                    </tr>
                </tbody>
            );
        })
    }

    let counterArray = Array.from(Array(numberOfCentros).keys());

    const body = counterArray.map((num) => {
        return(centrosTr[num + numberOfCentros * (currentPage - 1)]);
    })

    const bodyMobile = counterArray.map((num) => {
        return(centrosTbody[num + numberOfCentros * (currentPage - 1)]);
    })

    if (typeof centros === "undefined") {
        return(
            <></>
        )
    }

    if (windowWidth < 768) {
        return (
            <>
                <table className="text-center w-full overflow-auto text-base">
                    <caption>Centros atopados</caption>
                    {bodyMobile}
                </table>
                <div className="border border-black flex justify-around w-full text-lg m-auto">
                    {currentPage !== 1 ?
                        <button onClick={returnPage}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 hover:text-gray-200">
                                <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                            </svg>
                        </button>
                    : <div></div>}
                    <div className="text-center">
                        Página {currentPage} de {paginas}
                    </div>
                    {currentPage !== paginas ?
                        <button onClick={advancePage}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 hover:text-gray-200">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </button>
                    : <div></div>}
                </div>
                <div className="flex justify-center space-x-6 mt-8">
                    Número de centros por página:
                    <select id="numberSelect" className="border border-black rounded-md" onChange={handleSelectNumCentros}>
                        <option value="5" defaultValue>5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </>
        );
    }
    return (
        <>
            <table className="text-center w-fit overflow-auto text-sm md:w-11/12 md:m-auto md:text-base lg:text-lg">
                <caption>Centros atopados</caption>
                <thead className="border-b-2 border-black">
                <tr>
                    <th className="border-b-2 border-blue-400">Código</th>
                    <th>Nome</th>
                    <th>Enderezo</th>
                    <th>Concello</th>
                    <th>Provincia</th>
                    <th>Cód. postal</th>
                    <th>Teléfono</th>
                </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
            <div className="border border-black flex justify-around w-11/12 text-lg m-auto">
                {currentPage !== 1 ?
                    <button onClick={returnPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 hover:text-gray-200">
                            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                : <div></div>}
                <div className="text-center">
                    Página {currentPage} de {paginas}
                </div>
                {currentPage !== paginas ?
                    <button onClick={advancePage}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 hover:text-gray-200">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                : <div></div>}
            </div>
            <div className="flex justify-center space-x-6 mt-8">
                Número de centros por página:
                <select id="numberSelect" className="border border-black rounded-md" onChange={handleSelectNumCentros}>
                    <option value="5" defaultValue>5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </>
    );
}