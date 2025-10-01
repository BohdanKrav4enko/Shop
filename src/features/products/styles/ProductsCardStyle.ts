import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
    padding: 16px;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 12px;

  img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px;
  min-height: 40px;
`;

export const Price = styled.p`
  font-size: 18px;
  font-weight: 300;
  font-family: Roboto, sans-serif;
  color: #000000;
  margin: 0;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;
export const BuyButton = styled.button`
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
export const CartWrapper = styled.div`
    position: relative;
    z-index: 500;
    padding: 4px;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    cursor: pointer;
`
export const Badge = styled.div`
  position: absolute;
  top: -1px;
  right: -1px;
  background-color: #222;
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;