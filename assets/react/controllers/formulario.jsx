import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondatyButton';
import Tooltip from './Tooltip';
import MyModal from './Modal';

export default function MyForm() {
    function showModal(e) {
        e.preventDefault();
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }

    return (
        <form className="lg:text-xl xl:text-2xl w-full">
            <fieldset className="w-4/5 m-auto p-4 bg-xuntaGris-50 rounded-md">
            <legend>Filtros para a busca</legend>
            <p><i>Indique polo menos un filtro e prema o botón Buscar</i></p>
            <fieldset className="p-4 bg-xuntaGris-100 rounded-md">
                <legend>Centro</legend>
                <div className="flex flex-col mb-5">
                <label>Centro</label>
                <input className="rounded-md lg:w-3/4"></input>
                </div>
                <div className="flex flex-col mb-5">
                <label>Tipos de Centro</label>
                <input className="rounded-md md:w-3/4 lg:w-3/5"></input>
                </div>
                <div className="flex flex-col mb-5">
                <label>Provincias</label>
                <select className="rounded-md md:w-3/5 lg:w-2/5">
                    <option>--Todas--</option>
                    <option>Coruña (A)</option>
                    <option>Lugo</option>
                    <option>Ourense</option>
                    <option>Pontevedra</option>
                </select>
                </div>
                <div className="flex flex-col mb-5">
                <label>Concello</label>
                <select className="rounded-md md:w-3/5 lg:w-2/5">
                    <option>--Todos--</option>
                    <option>...</option>
                </select>
                </div>
                <fieldset className="p-2 mt-4 bg-xuntaGris-300 rounded-md">
                <legend className="text-xs md:text-base lg:text-xl xl:text-2xl space-x-2">
                    <span>Titularidade e concerto</span>
                    <Tooltip handleOnClick={showModal}/>
                </legend>
                <div>
                    <div className="flex flex-col mb-5">
                    <label>Titularidade</label>
                    <select className="rounded-md w-4/5 md:w-3/6 lg:w-1/5">
                        <option>--Todas--</option>
                        <option>Privada</option>
                        <option>Pública</option>
                    </select>
                    </div>
                    <div className="flex flex-col mb-5">
                    <label>Dependencia</label>
                    <select className="rounded-md w-4/5 md:w-3/6 lg:w-1/4">
                        <option>--Todas--</option>
                        <option>Dependente</option>
                        <option>Non dependente</option>
                    </select>
                    </div>
                </div>
                </fieldset>
            </fieldset>
            <div className="flex justify-center mt-3 space-x-3">
                <PrimaryButton color="xuntaAzul" handleOnClick={(e) => {
                    e.preventDefault();
                    console.log("Prueba");
                }}>
                    Buscar
                </PrimaryButton>
                <SecondaryButton color="xuntaAzul" handleOnClick={(e) => {
                    e.preventDefault();
                    console.log("Prueba");
                }}>
                    Limpiar
                </SecondaryButton>
            </div> 
            </fieldset>
            <MyModal></MyModal>
        </form>
    )
}