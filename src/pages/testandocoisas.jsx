import { useState } from 'react';
import Head from "./_components/Head"
import MenuHamburguer from './_components/MenuHamburguer';

export default function (){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(prev => !prev);
    };
    return(
        <>
            <MenuHamburguer />
            <Head pageTitle='Admin'/>
        </>
    )
}