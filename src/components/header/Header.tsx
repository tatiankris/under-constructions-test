import React from 'react'
import s from './Header.module.scss'


function Header() {


    return (
        <header className={s.header}>
            <a href={'http://localhost:5173'} className={s.info}>
            <img src={'../../../public/logo.svg'} alt={'No logo, sorry'} className={s.logo}/>
            </a>
        </header>
    )
}

export default Header
