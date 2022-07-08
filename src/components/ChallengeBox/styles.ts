import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--gray-850);
    border-radius: 0.5rem;
    height: 100%;
    padding: 4rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;
`

export const ChallengeActive = styled.div`
    padding-inline: 1.2rem;

    display: flex;
    flex-direction: column;

    header {
        color: var(--blue-300);
        font-weight: 600;

        border-bottom: 1px solid var(--gray-100);
        padding-bottom: 2rem;
    }

    main {
        margin-block: 2.8rem;
        padding-inline: 3rem;
        flex: 1;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 1.6rem;

        strong {
            font-weight: 600;
            font-size: 1.8rem;
        }

        p {
            line-height: 2.2rem;
            font-size: 1.45rem;
        }
    }
    
    footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        button {
            height: 3.2rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 0;
            border-radius: 0.5rem;
            color: var(--gray-200);
            font-size: 1.4rem;
            font-weight: 600;

            transition: filter 0.2s;
        }

        button.challengeFailedButton {
            background-color: var(--red-400);
        }

        button.challengeSucceededButton {
            background-color: var(--green-500);
        }

        button:hover {
            filter: brightness(0.9);
        }
    }
`

export const ChallengeNotActive = styled.div`
    p {
        font-size: 2rem;
        margin-bottom: 4.5rem;
        line-height: 3rem;
        max-width: 80%;
    }

    span {
        margin-block: 1.8rem 3.6rem;
        line-height: 2.4rem;
        max-width: 70%;
    }
`