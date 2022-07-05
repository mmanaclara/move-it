import { useEffect, useState } from "react";
import { Wrapper, Container } from "./styles";

export function Countdown() {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true)
    }

    useEffect(() => {
        if(active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time]);

  return (
    <Wrapper>
        <Container>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </Container>
        <button onClick={startCountdown}>
            Iniciar um ciclo
            <svg width="20" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
            </svg>
        </button>
    </Wrapper>
  )
}