import styled from "styled-components";

export const SidebarContainer = styled.div`
    margin-top: 70px;
    width: 220px;
    padding: 12px;
    border: 1px solid #ccc;
`;
export const CategoryItem = styled.div<{ active: boolean }>`
    padding: 10px 14px;
    margin-bottom: 8px;
    border-radius: 10px;
    cursor: pointer;
    background: ${({ active }) => (active ? "#f2f2f2" : "#f9f9f9")};
    color: ${({ active }) => (active ? "#000" : "#333")};
    font-weight: 500;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    box-shadow: ${({ active }) => (active ? "inset 0 0 0 2px #ccc" : "none")};

    &:hover {
        background: ${({ active }) => (active ? "#f2f2f2" : "#f0f0f0")};
        color: ${({ active }) => (active ? "#000" : "#111")};
        transform: ${({ active }) => (active ? "none" : "translateX(2px)")};
        box-shadow: ${({ active }) => (active ? "inset 0 0 0 2px #ccc" : "0 2px 5px rgba(0,0,0,0.05)")};
    }
`;