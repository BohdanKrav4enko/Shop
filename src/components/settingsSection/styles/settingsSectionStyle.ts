import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: relative;
    display: inline-block;
    font-family: sans-serif;
    width: max-content;
    z-index: 1000;
`;

export const DropdownButton = styled.button`
    padding: 4px 8px;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    border-radius: 4px;
    background: ${({ theme }) => theme.palette.background.paper};
    cursor: pointer;
    width: max-content;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.palette.text.primary};

    &:hover {
        border-color: ${({ theme }) => theme.palette.text.primary};
    }
`;

export const DropdownList = styled.ul<{ open: boolean }>`
    position: absolute;
    top: 110%;
    left: 0;
    width: max-content;
    background: ${({ theme }) => theme.palette.background.paper};
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
    color: ${({ theme }) => theme.palette.text.primary};

    &:hover {
        background: ${({ theme }) => theme.palette.action.hover};
    }
`;
export const IconButton = styled.button`
  all: unset;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SettingsWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
    @media (max-width: 500px) {
        right: 2px;
    }
`;