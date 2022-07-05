import styled from 'styled-components';

export const Wrapper = styled.div`
    button {
        width: 100%;
        height: 6rem;
        margin-top: 3rem;
        border: 0;
        border-radius: 0.5rem;

        background-color: var(--blue-300);
        color: var(--gray-200);
        font-size: 1.8rem;
        font-weight: 600;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;

        transition: background 0.2s;

        :hover {
            background: var(--blue-500);
        }
}
`

export const Container = styled.div`
    display: flex;
    align-items: center;

    font-family: Rajdhani;
    font-size: 12rem;
    color: var(--blue-900);

    > div {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-evenly;
        flex: 1;

        background: var(--gray-100);
        box-shadow: 0 0 0.5rem var(--gray-800);
        border-radius: 0.5rem;
    }

    > div span {
        flex: 1;
    }

    > div span:first-child {
        border-right: 1px solid var(--gray-200);
    }

    > div span:last-child {
        border-left: 1px solid var(--gray-200);
    }

    > span {
        font-size: 8rem;
        margin-inline: 0.8rem;
    }
`
