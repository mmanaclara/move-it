import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../../contexts/ChallengeContext";
import { Wrapper, Container } from "./styles";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false);
        setTime(0.05 * 60)
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if(isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge()
        }
    }, [isActive, time]);

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

        { hasFinished ? (
            <button
                disabled
            >
                Ciclo encerrado
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0001 1.66663C5.40008 1.66663 1.66675 5.39996 1.66675 9.99996C1.66675 14.6 5.40008 18.3333 10.0001 18.3333C14.6001 18.3333 18.3334 14.6 18.3334 9.99996C18.3334 5.39996 14.6001 1.66663 10.0001 1.66663ZM8.33342 14.1666L4.16675 9.99996L5.34175 8.82496L8.33342 11.8083L14.6584 5.48329L15.8334 6.66663L8.33342 14.1666Z" fill="#04D361"/>
                </svg>
            </button>
        ) : (
            <>
                {isActive ? (
                    <button
                        className="countdownButtonActive"
                        type="button" 
                        onClick={resetCountdown}
                    >
                        Abandonar ciclo
                        <svg width="14" height="16" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#E1E1E1"/>
                        </svg>
                    </button>
                ) : (
                    <button
                        type="button" 
                        onClick={startCountdown}
                    >
                        Iniciar um ciclo
                        <svg width="20" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                        </svg>
                    </button>
                )}
            </>
        ) }
    </Wrapper>
  )
}

/* PAREI EM 18:00 */