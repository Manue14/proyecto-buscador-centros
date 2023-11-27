import React from 'react';
import HorizontalLinkBox from './HorizontalLinkBox';

export default function MyOutsideMenu({ isActive }) {
    let displays = {
        true: "flex",
        false: "hidden"
    }
    let currentURL = window.location.href;
    return(
        <nav id="hidden-menu" className={displays[isActive] + " flex-col w-1/2 text-right absolute right-0 top-14 z-10"}>
            <HorizontalLinkBox link="http://127.0.0.1:8000/prueba" currentURL={currentURL}>Buscador</HorizontalLinkBox>
            <HorizontalLinkBox link="#" currentURL={currentURL}>Administración</HorizontalLinkBox>
            <HorizontalLinkBox link="http://127.0.0.1:8000/login" currentURL={currentURL}>Inicio de sesión</HorizontalLinkBox>
        </nav>
    );
}