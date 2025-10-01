import styled from "styled-components";

export const DeleteButton = styled.button`
    font-size: 24px;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
        color: red;
    }
`
export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; /* 👈 кнопки уходят вправо */
    gap: 16px;
    background: #fff;
    border-radius: 12px;
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }

    a {
        flex: 1; /* 👈 ссылка с картинкой и инфо занимает всё место слева */
        display: flex;
        align-items: center;
        gap: 16px;
        text-decoration: none;
    }
`;

export const ItemImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 10px;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ItemTitle = styled.span`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 6px;
    color: #333;
`;

export const ItemPrice = styled.span`
    font-size: 14px;
    color: #777;
`;

export const ItemControls = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    margin-left: auto;
`;

export const ControlButton = styled.button`
    font-size: 20px;
    border: none;
    background: none;
    cursor: pointer;
    color: #555;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
        color: #ff4d4f;
        transform: scale(1.1);
    }
`;
