import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
        font-size: 1.4rem;
    }

    .experienceBar {
        flex: 1;
        height: 0.4rem;
        border-radius: 0.4rem;
        background: var(--gray-100);
        margin-inline: 2rem;
        position: relative;
    }

    .experiencePercentage {
        height: 0.4rem;
        border-radius: 0.4rem;
        background-color: var(--green-500);
    }

    span.currentExperience {
        position: absolute;
        top: 1.2rem;
        transform: translateX(-50%);
    }
`

/* Parei na aula 1, 01:26:00 */