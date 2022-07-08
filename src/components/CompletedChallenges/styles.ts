import styled from 'styled-components';

export const Container = styled.div`
    color: var(--gray-600);
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-block: 4rem;
    padding-bottom: 1.4rem;
    border-bottom: 1px solid var(--gray-600);

    font-weight: 500;

    span:first-child {
        font-size: 1.65rem;
    }

    span:last-child {
        font-size: 2rem;
    }
`