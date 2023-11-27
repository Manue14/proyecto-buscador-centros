import React from 'react';

export default function MyModal() {
    function hideModal() {
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    return(
        <div id="myModal" className="hidden fixed top-0 left-0 bg-black bg-opacity-40 h-screen w-screen">
            <div className="bg-white h-fit w-11/12 md:w-4/5 rounded-xl text-sm  md:text-lg lg:text-xl xl:text-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-r border-l border-b border-x-stone-300 pl-">
                <div className="relative bg-xuntaAzul-50 top-0 rounded-t-xl p-2">
                    <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Titularidade e concerto</h1>
                    <button className="font-bold absolute top-1 right-3 hover:text-slate-300 text-xl md:text-2xl lg:text-3xl" onClick={hideModal}>x</button>
                </div>
                <div className="py-2 px-4 border-b pl-8">
                    <h2 className="font-semibold">Neste filtro distinguimos</h2>
                    <ul className="list-disc list-inside pl-10">
                        <li>
                        <span className="font-medium">Titularidade pública</span>: Todos os centros de titularidade pública, sexan da Consellería de Cultura,  Educación e Universidade, outras consellerías, ministerios, deputacións, concellos, etc.
                        </li>
                        <br/>
                        <li>
                        <span className="font-medium">Titularidade privada</span>: Centros cuxos titularidades son entes de carácter privado (Congregacións, Sociedades Limitadas, etc)
                        </li>
                    </ul>
                </div>
                <div className="py-2 px-4 pl-8">
                <h2 className="font-semibold">Logo indicamos a <i>dependencia</i> do centro</h2>
                    <ul className="list-disc list-inside pl-10">
                        <li>
                        <span className="font-medium">Dependente</span>:
                        <ul className="list-disc list-inside pl-10">
                            <li>Para os públicos isto significa que o seu titular é a Consellería de Cultura,  Educación e Universidade</li>
                            <li>Para os privados isto significa que teñen algún ensino sostido con fondos públicos, é dicir, son concertados</li>
                        </ul>
                        </li>
                        <br/>
                        <li>
                        <span className="font-medium">Non dependente</span>:
                        <ul className="list-disc list-inside pl-10">
                            <li>Para os públicos isto significa que o seu titular é un organismo privado distinto da Consellería de Cultura</li>
                            <li>Para os privados isto significa que ninguna axuda de fondos públicos para o seu funcionamento</li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}