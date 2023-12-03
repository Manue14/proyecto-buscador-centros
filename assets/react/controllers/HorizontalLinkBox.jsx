import React from 'react';

export default function HorizontalLinkBox({ children, link, currentURL }) {
    let borderVariants = {
        true: "border-l-4 border-xuntaAzul-500",
        false: ""
    }
    let coincidence = false;
    if (typeof link !== 'undefined' && typeof currentURL !== 'undefined') {
        if (currentURL.includes(link)) {
            coincidence = true
        }
    }
    return (
        <a href={link} className={"p-3 lg:text-xl xl:text-2xl odd:bg-slate-100 even:bg-slate-200 hover:bg-white " + borderVariants[coincidence]}>{children}</a>
    );
}