import React, { useState, useEffect } from "react";
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
const AlertWrapper = styled.div<{ leaving: boolean }>`
    position: fixed;
    bottom: 24px;
    left: 24px;
    width: auto;
    max-width: 360px;
    min-width: 280px;
    background-color: #ff4d4f;
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
const CloseButton = styled.button`
    background: transparent;
    border: none;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    color: #fff;
    margin-left: 12px;
`
interface ErrorAlertProps {
    message: string;
    duration?: number;
}
export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, duration = 5000 }) => {
    const [visible, setVisible] = useState(true);
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLeaving(true), duration - 400);
        const removeTimer = setTimeout(() => setVisible(false), duration);
        return () => {
            clearTimeout(timer);
            clearTimeout(removeTimer);
        };
    }, [duration]);
    if (!visible) return null;
    return (
        <AlertWrapper leaving={leaving}>
            <span>{message}</span>
            <CloseButton onClick={() => setLeaving(true)}>×</CloseButton>
        </AlertWrapper>
    );
};
