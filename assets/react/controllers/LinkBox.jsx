import React from 'react';

export default function LinkBox({ children, link, currentURL }) {
    let borderVariants = {
        true: "border-b-4 border-xuntaAzul-500",
        false: "hover:border-b-4 hover:border-xuntaAzul-300 active:border-b-4 active:border-xuntaAzul-500"
    }
    return (
        <a href={link} className={"p-2 " + borderVariants[link === currentURL]}>{children}</a>
    );
}