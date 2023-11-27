import React from 'react';

export default function PrimaryButton({ children, color, handleOnClick }) {
    const colorVariants = {
        xuntaAzul: 'bg-xuntaAzul-600 hover:bg-xuntaAzul-300',
        xuntaNaranja: 'bg-xuntaNaranja-400 hover:bg-xuntaNaranja-100',
        xuntaRojo: 'bg-xuntaRojo-600 hover:bg-xuntaRojo-200'
    }

    return(
        <button className={"text-white p-2 rounded-2xl " + colorVariants[color]} onClick={handleOnClick}>{children}</button>
    );
}