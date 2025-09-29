import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    padding: 16px 24px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    @media (max-width: 520px) {
        justify-content: center;   
    }
`;

export const Title = styled.h1`
    font-family: Pacifico, sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #222;
    margin: 0;
    text-align: center;
    flex: 1;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    position: 'relative'
`
export const TextAdmin = styled.p`
    position: absolute;
    font-family: "Story Script", sans-serif;
    color: red;
    font-size: 20px;
    font-weight: bold;
    left: -5px;
    bottom: -5px;
    z-index: 1000;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    gap: 1rem;
    @media (max-width: 520px) {
        display: none;
    }
`
export const ButtonsWrapperModile = styled.div`
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    padding: 10px 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.3);
    z-index: 900;

    @media (min-width: 520px) {
        display: none;
    }
`;
export const CartWrapper = styled.div`
    position: relative;
`
export const Badge = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: #000000;
    color: white;
    font-size: 12px;
    font-weight: bold;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`