import styled from 'styled-components';

export const Wrapper = styled.div`
        height: 100vh;
        max-width: 992px;

        margin-inline: auto;
        padding: 4rem 2rem;

        display: flex;
        flex-direction: column;
`

export const Container = styled.section`
    margin-block: 6rem;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    align-content: center;
`