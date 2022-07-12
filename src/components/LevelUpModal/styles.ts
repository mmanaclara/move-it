import styled from "styled-components";

export const Overlay = styled.div`
    background: rgba(242, 243, 245, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
    background: var(--gray-100);
    width: 100%;
    max-width: 290px;
    padding: 2rem 4rem 3rem 4rem;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);

    text-align: center;

    position: relative;

    header {
        font-size: 12rem;
        font-weight: 600;
        color: var(--blue-300);
        background: url('/icons/wings.svg') no-repeat center;
        background-size: 55%;
    }

    strong {
        font-size: 2.2rem;
        color: var(--gray-900);
        line-height: 3rem;
    }

    p {
        font-size: 1.6rem;
        color: var(--gray-800);
        margin-top: 0.4rem;
        line-height: 2rem;
    }

    button {
        position: absolute;
        right: 0.8rem;
        top: 0.8rem;
        background: transparent;
        border: 0;
        font-size: 10px;
    }
`