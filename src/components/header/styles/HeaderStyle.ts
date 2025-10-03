import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    padding: 16px 24px;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    @media (max-width: 520px) {
        justify-content: center;   
    }
`;
export const Title = styled.h1`
    font-family: "Acme", sans-serif;
    font-size: 26px;
    font-weight: 800;
    color: #222;
    margin: 0;
    text-align: center;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
`
export const TextAdmin = styled.div`
    position: absolute;
    color: #0066ff;
    right: 20px;
    top: 20px;
    z-index: 1000;
`
export const HeaderButtonsWrapper = styled.div`
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
        z-index: 900;
`
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
export const ButtonLabel = styled.p`
    @media (max-width: 600px) {
        display: none;
    }
`