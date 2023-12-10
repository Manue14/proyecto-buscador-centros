import React from 'react';
import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondatyButton';
import Tooltip from './Tooltip';
import MyModal from './Modal';

export default function MyForm({ method, action, concellos, tipos_centro }) {
    const [selectedProvincia, setProvincia] = useState(null);
    const [selectedTitularidad, setTitularidad] = useState(null);
    let isProvinciaSelected = selectedProvincia !== null;
    let isTitularidadSelected = selectedTitularidad !== null;

    let concellosDropdown = <></>;
    if (isProvinciaSelected) {
        concellosDropdown = concellos[selectedProvincia].map((concello) => {
            let concelloArray = concello.split("-");
            return (<option key={concelloArray[0]} value={concelloArray[0]}>{concelloArray[1]}</option>);
        })
    }

    const tiposCentroDropdown = tipos_centro.map((tipo) => {
        let tipoArray = tipo.split("-");
        return (<option key={tipoArray[0]} value={tipoArray[1]}>{tipoArray[1]}</option>)
    })

    let dependenciaDropdown = <></>;
    if (isTitularidadSelected) {
        if (selectedTitularidad === "Privada") {
            dependenciaDropdown = <>
                <option value={true}>Concertado</option>
                <option value={false}>Non concertado</option>
            </>
        } else if (selectedTitularidad === "Pública") {
            dependenciaDropdown = <>
                <option value={true}>Dependente</option>
                <option value={false}>Non dependente</option>
            </>
        }
    }

    function dependenciaDiv() {
        if (isTitularidadSelected) {
            return (
                <div className="flex flex-col mb-5">
                    <label htmlFor="dependencia">Dependencia</label>
                    <select className="rounded-md w-4/5 md:w-3/6" id="dependencia" name="dependencia">
                        <option value="">--Todas--</option>
                        {dependenciaDropdown}
                    </select>
                </div>
            )
        }
        return (<></>);
    }
    

    function handleSelectProvincia() {
        let provinciaSelect = document.getElementById("provincia");
        if (provinciaSelect.value.length !== 0) {
            setProvincia(parseInt(provinciaSelect.value) - 1);
        } else {
            setProvincia(null);
        }  
    }

    function handleSelectTitularidad() {
        let titularidadSelect = document.getElementById("titularidad");
        if (titularidadSelect.value.length !== 0) {
            setTitularidad(titularidadSelect.value);
        } else {
            setTitularidad(null);
        }
        
    }

    function clearForm(e) {
        e.preventDefault();
        let searchForm = document.getElementById("searchForm");
        searchForm.reset();
    }

    function showModal(e) {
        e.preventDefault();
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }

    return (
        <form id="searchForm" className="lg:text-xl xl:text-2xl w-full" method={method} action={action}>
            <fieldset className="w-4/5 m-auto p-4 bg-xuntaGris-50 rounded-md">
                <legend>Filtros para a busca</legend>
                <p><i>Indique polo menos un filtro e prema o botón Buscar</i></p>
                <fieldset className="p-4 bg-xuntaGris-100 rounded-md">
                    <legend>Centro</legend>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="nombre">Centro</label>
                        <input className="rounded-md lg:w-3/4" id="nombre" name="nombre"></input>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="tipo_centro">Tipo de Centro</label>
                        <select className="rounded-md md:w-3/5 lg:w-2/5" id="tipo_centro" name="tipo_centro">
                            <option value="">--Todas--</option>
                            {tiposCentroDropdown}
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="provincia">Provincias</label>
                        <select className="rounded-md md:w-3/5 lg:w-2/5" id="provincia" name="provincia" onChange={handleSelectProvincia}>
                            <option value="">--Todas--</option>
                            <option value="1">Coruña (A)</option>
                            <option value="2">Lugo</option>
                            <option value="3">Ourense</option>
                            <option value="4">Pontevedra</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="concello">Concello</label>
                        <select className="rounded-md md:w-3/5" id="concello" name="concello" disabled={!isProvinciaSelected}>
                            <option value="">--Todos--</option>
                            {concellosDropdown}
                        </select>
                    </div>
                    <fieldset className="p-2 mt-4 bg-xuntaGris-300 rounded-md">
                        <legend className="text-xs md:text-base lg:text-xl xl:text-2xl space-x-2">
                            <span>Titularidade e concerto</span>
                            <Tooltip handleOnClick={showModal}/>
                        </legend>
                        <div>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="titularidad">Titularidade</label>
                                <select className="rounded-md w-4/5 md:w-3/6" id="titularidad" name="titularidad" onChange={handleSelectTitularidad}>
                                    <option value="">--Todas--</option>
                                    <option value="Privada">Privada</option>
                                    <option value="Pública">Pública</option>
                                </select>
                            </div>
                            {dependenciaDiv()}
                        </div>
                    </fieldset>
                </fieldset>
                <div className="flex justify-center mt-3 space-x-3">
                    <PrimaryButton color="xuntaAzul">
                        Buscar
                    </PrimaryButton>
                    <SecondaryButton color="xuntaAzul" handleOnClick={clearForm}>
                        Limpiar
                    </SecondaryButton>
                </div> 
            </fieldset>
            <MyModal></MyModal>
        </form>
    )
}