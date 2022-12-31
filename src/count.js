import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import StopIcon from '@mui/icons-material/Stop';
function Count() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [lists, setlists] = useState([]);
    const [time, settime] = useState(0);
    const inc = useRef(null)
    const start = () => {
        setIsActive(true);
        setIsPaused(true);
        inc.current = setInterval(() => {
            settime((time) => time + 1)
        }, 1000)
    }
    const pause = () => {
        clearInterval(inc.current);
        setIsActive(false);
    }
    const formater = () => {
        const sec = `0${(time % 60)}`.slice(-2)
        const cmin = `${Math.floor(time / 60)}`
        const min = `0${(cmin % 60)}`.slice(-2)
        const hr = `0${Math.floor(time / 3600)}`.slice(-2)

        return `${hr} : ${min} : ${sec}`
    }
    const reset = () => {
        settime(0);
    }
    const flag = () => {
        const s = formater();
        
        setlists([...lists, s])
    }

    return (
        <div className='item'>
            <h1>{formater()}</h1>
            {!isActive ? <div>
                <Button variant="text" size="large" onClick={start}><PlayArrowIcon fontSize='large' /></Button>
                <Button variant="text" size="large" onClick={reset}><StopIcon fontSize='large' /></Button></div> : <div>
                <Button variant="text" size="large" onClick={pause}><PauseIcon fontSize='large' /></Button>
                <Button variant="text" size="large" onClick={flag}><FlagCircleIcon fontSize='large' /></Button>
            </div>
            }
            <ul>
                {
                    lists.map((value) => {
                    <li>{value}</li>
                })}
            </ul>
        </div >
    )
}

export default Count
