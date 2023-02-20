import React, {useEffect, useState} from 'react'
import s from './Time.module.scss'
import Item from "./Item";
import useMediaQuery from "../../hooks/useMediaQuery";

function Time() {

    const isSmallScreen = useMediaQuery('(max-width: 940px)')

    const [finishTime] = useState(new Date('Wed, 31 May 2023 00:00:00').getTime());
    const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);

    useEffect(()=> {
        // @ts-ignore
        const diff = (finishTime - new Date()) / 1000;
        if (diff < 0) return // время вышло
        setDiff([
            Math.floor(diff / 86400), // дни
            Math.floor((diff / 3600) % 24),
            Math.floor((diff / 60) % 60),
            Math.floor(diff % 60)
        ])
    }, [tick, finishTime])

    useEffect(()=>{
        const timerID = setInterval(() => setTick(!tick), 1000);
        return () => clearInterval(timerID);
    }, [tick])

    return (
        <div className={s.time}>
            <Item text={String(diffDays)} name={ isSmallScreen ? 'DD' :'Days' }/>
            <Item text={String(diffH.toString().padStart(2, '0'))} name={ isSmallScreen ? 'HH' : 'Hours'}/>
            <Item text={String(diffM.toString().padStart(2, '0'))} name={ isSmallScreen ? 'MM' : 'Minutes'}/>
            <Item text={String(diffS.toString().padStart(2, '0'))} name={ isSmallScreen ? 'SS':'Seconds'}/>
        </div>
    )
}

export default Time
