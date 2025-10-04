import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
    display: inline-block;
    font-family: sans-serif;
    width: max-content;
    z-index: 1000;
`;

export const DropdownButton = styled.button`
    padding: 4px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    width: max-content;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        border-color: #888;
    }
`;

export const DropdownList = styled.ul<{ open: boolean }>`
    position: absolute;
    top: 110%;
    left: 0;
    width: max-content;
    background: #fff;
    border-radius: 4px;
    list-style: none;
    padding: 0;
    margin: 4px 0 0 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    max-height: ${({ open }) => (open ? "200px" : "0")};
    overflow: hidden;
    transition: max-height 0.2s ease;
`;

export const DropdownItem = styled.li`
    padding: 4px 8px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        background: #f0f0f0;
    }
`;
