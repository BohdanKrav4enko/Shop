import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`
const slideOut = keyframes`
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(100%);
        opacity: 0;
    }
`
export const AlertWrapper = styled.div<{ leaving: boolean; type: "success" | "error" | "info" }>`
    position: fixed;
    bottom: 24px;
    left: 24px;
    width: auto;
    max-width: 360px;
    min-width: 280px;
    background-color: ${({ type }) =>
            type === "success" ? "#52c41a" :
                    type === "error" ? "#ff4d4f" :
                            "#1890ff"};
    color: #fff;
    padding: 14px 20px;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    font-weight: 500;
    font-size: 15px;
    z-index: 9999;
    animation: ${({ leaving }) => (leaving ? slideOut : slideIn)} 0.4s ease forwards;
`
export const CloseNotificationButton = styled.button`
    background: transparent;
    border: none;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    color: #fff;
    margin-left: 12px;
`