import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
    justify-items: center;
`;
export const CategoryTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 20px 0;
  color: #333;
`;
export const Greetings = styled.p`
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  margin: 20px 0;
  color: #333;
`;