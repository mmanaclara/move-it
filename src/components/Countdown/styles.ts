import styled from 'styled-components';

export const Wrapper = styled.div`
    button {
        width: 100%;
        height: 5.5rem;
        margin-top: 3rem;
        border: 0;
        border-radius: 0.5rem;

        background-color: var(--blue-300);
        color: var(--gray-200);
        font-size: 1.6rem;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        transition: background 0.2s;

        :not(:disabled):hover {
            background: var(--blue-500);
        }

        :disabled {
            background-color: var(--gray-800);
            cursor: not-allowed;

            gap: 1.2rem;
        }
    }

    .countdownButtonActive {
        background-color: var(--gray-850);
        gap: 1.4rem;
    }

    .countdownButtonActive:not(:disabled):hover {
        background-color: var(--red-400);
    }

`

export const Container = styled.div`
    display: flex;
    align-items: center;

    font-family: Rajdhani;
    font-size: 12rem;
    color: var(--gray-100);

    > div {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-evenly;
        flex: 1;

        background: var(--gray-850);
        border-radius: 0.5rem;
    }

    > div span {
        flex: 1;
    }

    > div span:first-child {
        border-right: 1px solid var(--gray-700);
    }

    > div span:last-child {
        border-left: 1px solid var(--gray-700);
    }

    > span {
        font-size: 8rem;
        color: #83848A;
        margin-inline: 0.8rem;
    }
`

