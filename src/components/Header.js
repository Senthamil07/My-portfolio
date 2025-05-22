import { Bars3Icon } from '@heroicons/react/24/solid' 
import { useState } from 'react';
export default function Header() {
   const [toggleMenu, setTogglemenu] =useState(false)
    return (
        <header className="flex justify-between px-5 py-5 bg-secondary">
            <h1 className="font-bold text-green-400">SENTHAMIL SELVAN</h1>
            <nav className="hidden md:block">
                <ul className="flex text-white">
                    <li className='hover:text-green-600  font-bold'><a href="#home">Home</a></li>
                    <li  className='hover:text-green-600  font-bold'><a href="#about">About</a></li>
                    <li  className='hover:text-green-600  font-bold'><a href="#project">Projects</a></li>
                    <li  className='hover:text-green-600  font-bold'><a href="#resume">Resume</a></li>
                    <li  className='hover:text-green-600  font-bold'><a href="#skills">Skills</a></li>
                    <li  className='hover:text-green-600  font-bold'><a href="#contact">Contact</a></li>
                    
                </ul>
            </nav>
            {/* for mobile view bars */}
             {toggleMenu && <nav className="block md:hidden ">
                <ul onClick={()=> setTogglemenu(!toggleMenu)} className="flex flex-col text-white mobile-nav mt-4">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#skills">Skills</a></li>
                     <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>}
            {/* md mobile device */}
            <button onClick={()=> setTogglemenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        </header>
    );
}