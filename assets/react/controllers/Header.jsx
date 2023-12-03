import React from 'react';
import { useState } from 'react';
import logoPath from '../../images/marcas/marca-positivo.png';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondatyButton';
import LinkBox from './LinkBox';
import OutsideMenu from './OutsideMenu';
import AnimatedLines from './AnimatedLines';

export default function MyHeader({ buscador_link, administracion_link, login_link }) {
  const [isHiddenMenuDisplayed, setMenuDisplay] = useState(false);
  let currentURL = window.location.href;
  window.addEventListener("resize", () => {
    let windowWidth = window.innerWidth;
    let menu = document.getElementById("hidden-menu");
    
    if (menu.style.display != "none" && windowWidth >= 768) {
      setMenuDisplay(false);
    }
    
  })
  
  function changeHiddenMenu(event) {
    setMenuDisplay(!isHiddenMenuDisplayed);
  }

    return (
      <div className='bg-xuntaGris-50'>
        <header className="flex justify-between items-center h-16 p-3" id="main_header">
          <a href="https://www.edu.xunta.gal/">
            <img src={logoPath} className="h-12" />
          </a>
          <div className="md:hidden">
            <PrimaryButton color="xuntaAzul" handleOnClick={changeHiddenMenu}>
              <AnimatedLines isActive={isHiddenMenuDisplayed}/>
            </PrimaryButton>
          </div>
          <nav className="hidden md:flex justify-around items-center grow lg:text-xl xl:text-2xl">
            <LinkBox link={buscador_link} currentURL={currentURL}>Buscador</LinkBox>
            <LinkBox link={administracion_link}>Administración</LinkBox>
            <LinkBox link={login_link} currentURL={currentURL}>Iniciar sesión</LinkBox>
          </nav>
        </header>
        <div className="flex items-center justify-center gap-x-3 w-fit m-auto pl-3 pt-4 lg:text-xl xl:text-2x">
          <p>Hola usuario username</p>
          <SecondaryButton color="xuntaRojo" handleOnClick={() => {
            console.log("Cerrar sesión");
          }}>Cerrar sesión</SecondaryButton>
        </div>
        <OutsideMenu isActive={isHiddenMenuDisplayed} buscador_link={buscador_link} administracion_link={administracion_link} login_link={login_link}></OutsideMenu>
      </div>
    );
}
