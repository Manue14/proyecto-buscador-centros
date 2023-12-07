import React from "react";
import { useState } from 'react';

export default function MyTable({ centros }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
            setWindowWidth(window.innerWidth);
        } else if (windowWidth < 768 && window.innerWidth >= 768){
            setWindowWidth(window.innerWidth);
        }
    })

    let centrosTr = <></>;
    if (Array.isArray(centros)) {
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

    if (windowWidth < 768) {
        return (
            <table className="text-center w-full overflow-auto text-base">
                <caption>Centros atopados</caption>
                <tbody className="bg-white [&:nth-child(2n)]:bg-slate-200 border-b-2 border-black">
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Código</th>
                    <td>15001033</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Nome</th>
                    <td>CFEA de Guísamo</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Enderezo</th>
                    <td>Lugar de Bos 14</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Concello</th>
                    <td>Bergondo</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Provincia</th>
                    <td>A Coruña</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Cód. postal</th>
                    <td>15640</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Teléfono</th>
                    <td>881881055</td>
                </tr>
                </tbody>
                <tbody className="bg-white [&:nth-child(2n)]:bg-slate-200 border-b-2 border-black">
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Código</th>
                    <td>15004204</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Nome</th>
                    <td>IES Rosalía Mera</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Enderezo</th>
                    <td>Rúa Archer M. Huntington 24</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Concello</th>
                    <td>A Coruña</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Provincia</th>
                    <td>A Coruña</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Cód. postal</th>
                    <td>15011</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Teléfono</th>
                    <td>981252600</td>
                </tr>
                </tbody>
                <tbody className="bg-white [&:nth-child(2n)]:bg-slate-200 border-b-2 border-black">
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Código</th>
                    <td>15005300</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Nome</th>
                    <td>IES Rafael Puga Ramón</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Enderezo</th>
                    <td>Rúa Leopoldo Alas Clarín 4</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Concello</th>
                    <td>A Coruña</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Provincia</th>
                    <td>A Coruña</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Cód. postal</th>
                    <td>15008</td>
                </tr>
                <tr className="border-b border-black hover:bg-slate-300">
                    <th className="p-4">Teléfono</th>
                    <td>981080188</td>
                </tr>
                </tbody>
            </table>
        );
    }
    return (
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
                {centrosTr}
            </tbody>
        </table>
    );
}