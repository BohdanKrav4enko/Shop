import styled from "styled-components";
import {AlertTriangle} from "lucide-react";

export const ErrorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 24px;
    border-radius: 16px;
    background: #fff5f5;
    border: 1px solid #fecaca;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    max-width: 400px;
`;

export const ErrorIcon = styled(AlertTriangle)`
    margin-top: 10px;
    width: 40px;
    height: 40px;
    color: #dc2626;
    margin-bottom: 12px;
`;

export const ErrorMessage = styled.p`
    color: #b91c1c;
    font-size: 20px;
    font-weight: 500;
    margin: 10px;
`;

export const RetryButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background: #dc2626;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #b91c1c;
  }
  &:active {
    transform: scale(0.97);
  }
`;