import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1.8rem;

    img {
        width: 7.2rem;
        border-radius: 50%;
    }

    .profileContainer {
        margin-left: 1.8rem;
    }

    .profileContainer strong {
        font-size: 1.8rem;
        font-size: 600;
    }

    .profileContainer > div {
        margin-top: 1rem;
        display: flex;
        gap: 0.75rem;
    }

    .profileContainer p {
        font-size: 1.4rem;
    }
`