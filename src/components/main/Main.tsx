import React from 'react'
import s from './Main.module.scss'
import Time from "./Time";

function Main() {


    return (
        <main className={s.main}>
            <div className={s.title}>Under Construction</div>
            <p className={s.improveInfo}>We're making lots of improvements and will be back soon</p>
            <Time />
            <p className={s.eventPageCheck}>Check our event page when you wait:</p>
            <a href={'https://youtube.com'} className={s.goToButton}>Go to the event
            <img className={s.arrow} src={'../../public/arrow.svg'} />
            </a>
        </main>
    )
}

export default Main
