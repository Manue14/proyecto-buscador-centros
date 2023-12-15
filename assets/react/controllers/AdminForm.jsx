import React from 'react';
import { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondatyButton';
import Tooltip from './Tooltip';
import MyModal from './Modal';

export default function AdminForm({ method, action, centros, concellos, tipos_centro, action_delete }) {
    const [selectedCentro, setCentro] = useState({tipo_de_centro: ""});
    const [selectedProvincia, setProvincia] = useState(null);
    const [selectedTitularidad, setTitularidad] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    let isProvinciaSelected = selectedProvincia !== null;
    let isTitularidadSelected = selectedTitularidad !== null;

    let provinciaId = "";
    if (selectedProvincia !== null) {
        provinciaId = selectedProvincia + 1;
    }
    let concelloId = "";
    let found = false;
    for (let i = 0; i < concellos.length && !found; i++) {
        for (let j = 0; j < concellos[i].length; j++) {
            if (concellos[i][j].split('-')[0] === selectedCentro.concello) {
                concelloId = concellos[i][j].split('-')[0];
                provinciaId = i + 1;
                found = true;
                if (selectedProvincia !== i) {
                    setProvincia(i);
                }
            }
        }
    }

    let titularidadName = "";
    let dependenciaValue = "";
    if (parseInt(selectedCentro.titularidad) === 1 || parseInt(selectedCentro.titularidad) === 2) {
        titularidadName = "Pública";
        if (selectedTitularidad !== "Pública") {
            setTitularidad("Pública");
        }
        isTitularidadSelected = true;
    }
    if (parseInt(selectedCentro.titularidad) === 3 || parseInt(selectedCentro.titularidad) === 4) {
        titularidadName = "Privada";
        if (selectedTitularidad !== "Privada") {
            setTitularidad("Privada");
        }
        isTitularidadSelected = true;
    }
    if (parseInt(selectedCentro.titularidad) === 1 || parseInt(selectedCentro.titularidad) === 3) {
        dependenciaValue = true;
    }
    if (parseInt(selectedCentro.titularidad) === 2 || parseInt(selectedCentro.titularidad) === 4) {
        dependenciaValue = false;
    }

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

    const centrosDropdown = centros.map((centro) => {
        return (<option key={centro.id} value={centro.id}>{centro.nombre}</option>)
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

    function dependenciaDiv(dependenciaValue) {
        if (isTitularidadSelected) {
            return (
                <div className="flex flex-col mb-5">
                    <label htmlFor="dependencia">Dependencia</label>
                    <select className="rounded-md w-4/5 md:w-3/6" id="dependencia" name="dependencia" value={dependenciaValue} onChange={handleSelectDependencia}>
                        {dependenciaDropdown}
                    </select>
                </div>
            )
        }
        return (<></>);
    }
    
    function handleSelectCentro() {
        let centroSelect = document.getElementById("centroSelect");
        let centro = null;
        let found = false;
        if (centroSelect.value.length !== 0) {
            for (let i = 0; i < centros.length && !found; i++) {
                if (centros[i].id === centroSelect.value) {
                    centro = centros[i];
                    found = true;
                }
            }
            setCentro(centro);
        } else {
            setCentro({tipo_de_centro: ""});
            setProvincia(null);
            setTitularidad(null);
        }  
    }

    function handleSelectProvincia() {
        let provinciaSelect = document.getElementById("provincia");
        let editedCentro = {...selectedCentro};
        if (provinciaSelect.value.length !== 0) {
            editedCentro.concello = "";
            setProvincia(parseInt(provinciaSelect.value) - 1);
            setCentro(editedCentro);
        } else {
            setProvincia(null);
        }
    }

    function handleSelectConcello() {
        let concelloSelect = document.getElementById("concello");
        let editedCentro = {...selectedCentro};
        if (concelloSelect.value.length !== 0) {
            editedCentro.concello = concelloSelect.value;
        } else {
            editedCentro.concello = "";
        }
        setCentro(editedCentro);
    }

    function handleSelectTitularidad() {
        let titularidadSelect = document.getElementById("titularidad");
        let editedCentro = {...selectedCentro};
        if (titularidadSelect.value.length !== 0) {
            setTitularidad(titularidadSelect.value);
            if (titularidadSelect.value === "Pública") {
                editedCentro.titularidad = 1;
            } else if (titularidadSelect.value === "Privada") {
                editedCentro.titularidad = 3;
            }
        } else {
            setTitularidad(null);
            editedCentro.titularidad = "";
        }
        setCentro(editedCentro);
    }

    function handleSelectDependencia() {
        let dependenciaSelect = document.getElementById("dependencia");
        let titularidadSelect = document.getElementById("titularidad");
        let editedCentro = {...selectedCentro};

        if (dependenciaSelect.value === "true") {
            if (titularidadSelect.value === "Pública") {
                editedCentro.titularidad = 1;
            } else if (titularidadSelect.value === "Privada") {
                editedCentro.titularidad = 3;
            }
        } else {
            if (titularidadSelect.value === "Pública") {
                editedCentro.titularidad = 2;
            } else if (titularidadSelect.value === "Privada") {
                editedCentro.titularidad = 4;
            }
        }
        setCentro(editedCentro);
    }

    function handleSelectTipoCentro() {
        let tipoSelect = document.getElementById("tipo_centro");
        let editedCentro = {...selectedCentro};
        if (tipoSelect.value.length !== 0) {
            editedCentro.tipo_de_centro = tipoSelect.value;
        } else {
            editedCentro.tipo_de_centro = "";
        }
        setCentro(editedCentro);
    }

    function handleCheckbox() {
        let checkbox = document.getElementById("editar");
        if (checkbox.checked == true) {
            setIsEditing(true);
        } else {
            setIsEditing(false);
        }
        let searchForm = document.getElementById("adminForm");
        searchForm.reset();
        setCentro({tipo_de_centro: ""});
        setProvincia(null);
        setTitularidad(null);
    }

    function deleteCentro() {
        let form = document.getElementById("adminForm");
        form.action = action_delete;
    }

    function clearForm(e) {
        e.preventDefault();
        let searchForm = document.getElementById("adminForm");
        searchForm.reset();
        setCentro({tipo_de_centro: ""});
        setProvincia(null);
        setTitularidad(null);
    }

    function showModal(e) {
        e.preventDefault();
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }

    return (
        <form id="adminForm" className="lg:text-xl xl:text-2xl w-full" method={method} action={action}>
            <fieldset className="w-4/5 m-auto p-4 bg-xuntaGris-50 rounded-md">
                <legend>Campos propios de cada centro</legend>
                <p><i>Asegúrese de cubrir todos os campos</i></p>
                <fieldset className="p-4 bg-xuntaGris-100 rounded-md">
                    <legend>Centro</legend>
                    <div className='lg:flex lg:justify-around lg:space-x-6 mb-5'>
                        <div className="flex flex-col lg:w-1/2">
                            <label htmlFor="nombre">Centro</label>
                            <input className="rounded-md w-full" id="nombre" name="nombre" disabled={isEditing}></input>
                        </div>
                        <div className="flex items-center justify-start space-x-2 mt-2 mb-2 lg:mt-0 lg:flex-col lg:space-x-0">
                            <label htmlFor="editar">Editar</label>
                            <input className="rounded-md mt-1 lg:w-full lg:h-full" id="editar" name="editar" type="checkbox" checked={isEditing} onChange={handleCheckbox}></input>
                        </div>
                        <div className="flex flex-col lg:w-1/2">
                            <label htmlFor="nombre">Centro</label>
                            <select className="rounded-md w-full" id="centroSelect" name="centroSelect" disabled={!isEditing} onChange={handleSelectCentro}>
                                <option value="">------</option>
                                {centrosDropdown}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="tipo_centro">Tipo de Centro</label>
                        <select className="rounded-md w-1/2 md:w-3/5 lg:w-2/5" id="tipo_centro" name="tipo_centro" value={selectedCentro.tipo_de_centro} onChange={handleSelectTipoCentro}>
                            <option value="">--Todas--</option>
                            {tiposCentroDropdown}
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="provincia">Provincias</label>
                        <select className="rounded-md w-8/12 md:w-3/5 lg:w-2/5" id="provincia" name="provincia" onChange={handleSelectProvincia} value={provinciaId}>
                            <option value="">--Todas--</option>
                            <option value="1">Coruña (A)</option>
                            <option value="2">Lugo</option>
                            <option value="3">Ourense</option>
                            <option value="4">Pontevedra</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="concello">Concello</label>
                        <select className="rounded-md w-8/12 md:w-3/5" id="concello" name="concello" disabled={!isProvinciaSelected} onChange={handleSelectConcello} value={concelloId}>
                            <option value="">--Todos--</option>
                            {concellosDropdown}
                        </select>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="enderezo">Enderezo</label>
                        <input className="rounded-md w-8/12 md:w-3/5" id="enderezo" name="enderezo" defaultValue={selectedCentro !== null ?
                                selectedCentro.direccion
                            :
                                ""}>
                        </input>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="postal">Código postal</label>
                        <input className="rounded-md w-1/2 md:w-3/5" id="postal" name="postal" type="number" defaultValue={selectedCentro !== null ?
                                selectedCentro.cod_postal
                            :
                                ""}>
                        </input>
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="postal">Teléfono</label>
                        <input className="rounded-md w-1/2 md:w-3/5" id="tlf" name="tlf" type="tel" defaultValue={selectedCentro !== null ?
                                selectedCentro.tlf
                            :
                                ""}>
                        </input>
                    </div>
                    <div className='md:flex md:justify-around md:space-x-1'>
                        <div className="md:flex md:flex-col mb-5">
                            <label htmlFor="coordenadaX">Coordenada X</label>
                            <input className="rounded-md md:w-full" id="coordenadaX" name="coordenadaX" type="number" step="0.001" defaultValue={selectedCentro !== null ?
                                    selectedCentro.coordenadaX
                                :
                                    ""}>
                            </input>
                        </div>
                        <div className="md:flex md:flex-col mb-5">
                            <label htmlFor="coordenadaX">Coordenada Y</label>
                            <input className="rounded-md md:w-full" id="coordenadaY" name="coordenadaY" type="number" step="0.001" defaultValue={selectedCentro !== null ?
                                    selectedCentro.coordenadaY
                                :
                                    ""}>
                            </input>
                        </div>
                    </div>
                    
                    <fieldset className="p-2 mt-4 bg-xuntaGris-300 rounded-md">
                        <legend className="text-xs md:text-base lg:text-xl xl:text-2xl space-x-2">
                            <span>Titularidade e concerto</span>
                            <Tooltip handleOnClick={showModal}/>
                        </legend>
                        <div>
                            <div className="flex flex-col mb-5">
                                <label htmlFor="titularidad">Titularidade</label>
                                <select className="rounded-md w-1/2 md:w-3/6" id="titularidad" name="titularidad" onChange={handleSelectTitularidad} value={titularidadName}>
                                    <option value="">--Todas--</option>
                                    <option value="Privada">Privada</option>
                                    <option value="Pública">Pública</option>
                                </select>
                            </div>
                            {dependenciaDiv(dependenciaValue)}
                        </div>
                    </fieldset>
                </fieldset>
                <div className="flex justify-center mt-3 space-x-3">
                    <PrimaryButton color="xuntaAzul">
                        Enviar
                    </PrimaryButton>
                    {selectedCentro.id !== undefined ?
                        <PrimaryButton color="xuntaRojo" handleOnClick={deleteCentro}>
                            Eliminar
                        </PrimaryButton>
                    :
                        <></>
                    }
                    <SecondaryButton color="xuntaAzul" handleOnClick={clearForm}>
                        Limpiar
                    </SecondaryButton>
                </div> 
            </fieldset>
            <MyModal></MyModal>
            <input className='hidden' id="id" name="id" readOnly value={selectedCentro.id !== undefined ?
                selectedCentro.id
                :
                "1"}></input>
        </form>
    )
}