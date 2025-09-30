import styled from "styled-components";

export const ShowMoreButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const ShowMoreButton = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => (disabled ? "#f2f2f2" : "#f9f9f9")};
  color: ${({ disabled }) => (disabled ? "#aaa" : "#333")};
  border: 1px solid ${({ disabled }) => (disabled ? "#ddd" : "#ccc")};
  padding: 10px 20px;
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 15px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ disabled }) => (disabled ? "#f2f2f2" : "#f0f0f0")};
    border-color: ${({ disabled }) => (disabled ? "#ddd" : "#bbb")};
    transform: ${({ disabled }) => (disabled ? "none" : "translateY(-1px)")};
  }

  &:active {
    background: ${({ disabled }) => (disabled ? "#f2f2f2" : "#e6e6e6")};
    transform: translateY(0);
  }
`;
