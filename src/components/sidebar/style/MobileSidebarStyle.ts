import styled from "styled-components";

export const MobileSidebarContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 100%;
    height: 100%;
    background: #fff;
    transition: left 0.3s ease;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
`;

export const SidebarTitle = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin: 30px 0 30px 0;
`;

export const CategoriesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
`;

export const MobileCategoryItem = styled.div<{ active: boolean }>`
    padding: 12px;
    border-radius: 10px;
    cursor: pointer;
    background: ${({ active }) => (active ? "#f0f0f0" : "#fafafa")};
    color: ${({ active }) => (active ? "#000" : "#333")};
    font-weight: 500;
    text-align: center;
    transition: all 0.2s ease;
    border: 1px solid #ddd;

    &:hover {
        background: #f0f0f0;
    }
`;
