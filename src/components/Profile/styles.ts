import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
        width: 7.2rem;
        border-radius: 50%;
    }

    .profileContainer {
        margin-left: 2rem;
    }

    .profileContainer strong {
        font-size: 2rem;
        font-size: 600;
    }

    .profileContainer > div {
        margin-top: 1rem;
        display: flex;
        gap: 0.8rem;
    }

    .profileContainer p {
        font-size: 1.5rem;
    }
`