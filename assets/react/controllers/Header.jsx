import React from 'react';
import { useState } from 'react';
import logoPath from '../../images/marcas/marca-positivo.png';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondatyButton';
import LinkBox from './LinkBox';
import OutsideMenu from './OutsideMenu';
import AnimatedLines from './AnimatedLines';

export default function MyHeader() {
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
          <img src={logoPath} className="h-12" />
          <div className="md:hidden">
            <PrimaryButton color="xuntaAzul" handleOnClick={changeHiddenMenu}>
              <AnimatedLines isActive={isHiddenMenuDisplayed}/>
            </PrimaryButton>
          </div>
          <nav className="hidden md:flex justify-around items-center grow lg:text-xl xl:text-2xl">
            <LinkBox link="http://127.0.0.1:8000/prueba" currentURL={currentURL}>Buscador</LinkBox>
            <LinkBox link="#">Administración</LinkBox>
            <LinkBox link="http://127.0.0.1:8000/login" currentURL={currentURL}>Iniciar sesión</LinkBox>
          </nav>
        </header>
        <div className="flex items-center justify-center gap-x-3 w-fit m-auto pl-3 pt-4 lg:text-xl xl:text-2x">
          <p>Hola usuario username</p>
          <SecondaryButton color="xuntaRojo" handleOnClick={() => {
            console.log("Cerrar sesión");
          }}>Cerrar sesión</SecondaryButton>
        </div>
        <OutsideMenu isActive={isHiddenMenuDisplayed}></OutsideMenu>
      </div>
    );
}
