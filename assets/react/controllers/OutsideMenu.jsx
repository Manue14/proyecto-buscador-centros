import React from 'react';
import HorizontalLinkBox from './HorizontalLinkBox';

export default function MyOutsideMenu({ isActive, buscador_link, administracion_link, login_link }) {
    let displays = {
        true: "flex",
        false: "hidden"
    }
    let currentURL = window.location.href;
    return(
        <nav id="hidden-menu" className={displays[isActive] + " flex-col w-1/2 text-right absolute right-0 top-14 z-10"}>
            <HorizontalLinkBox link={buscador_link} currentURL={currentURL}>Buscador</HorizontalLinkBox>
            <HorizontalLinkBox link={administracion_link} currentURL={currentURL}>Administración</HorizontalLinkBox>
            <HorizontalLinkBox link={login_link} currentURL={currentURL}>Inicio de sesión</HorizontalLinkBox>
        </nav>
    );
}