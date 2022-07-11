import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    max-width: 900px;
    padding-inline: 2rem;

    margin-inline: auto;

    display: flex;
    flex-direction: column;
`

export const Container = styled.section`
    margin-block: 6rem;
    padding-block: 2rem;
    flex: 1;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
    align-content: center;
`