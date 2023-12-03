import React from "react";

export default function MessageModal({ type, message }) {
    function hideModal(e) {
        let modal = document.getElementById("messageModal");
        modal.style.display = "none";
    }
    const variants = {
        error: 'bg-xuntaRojo-50 border border-xuntaRojo-300 text-xuntaRojo-600',
        normal: 'bg-xuntaAzul-50 border border-xuntaAzul-300 text-xuntaAzul-600'
    }
    const iconVariants = {
        error: 'hover:text-xuntaRojo-300',
        normal: 'hover:text-xuntaAzul-300'
    }

    if (message == null) {
        return (
            <></>
        );
    }

    return (
        <div id="messageModal" className={"border mt-5 mx-8 text-lg flex justify-between " + variants[type]}>
            <div className="mx-3 w-full">{message}</div>
            <button className={"justify-self-end self-start " + iconVariants[type]} onClick={hideModal}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    )
}