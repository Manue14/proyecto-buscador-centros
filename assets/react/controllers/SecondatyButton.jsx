import React from 'react';

export default function SecondaryButton({ children, color, handleOnClick }) {
    const colorVariants = {
        xuntaAzul: 'border-xuntaAzul-600 hover:bg-xuntaAzul-600',
        xuntaNaranja: 'border-xuntaNaranja-400 hover:bg-xuntaNaranja-400',
        xuntaRojo: 'border-xuntaRojo-600 hover:bg-xuntaRojo-600'
    }

    return(
        <button className={"bg-transparent border hover:text-white p-2 rounded-2xl " + colorVariants[color]} onClick={handleOnClick}>{children}</button>
    );
}