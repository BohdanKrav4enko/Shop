import styled from "styled-components";
import img from "../../assets/404.svg";

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
`;

const ErrorImage = styled.img`
  width: 90%;
  max-width: 90vw;
  max-height: 90%;
  object-fit: contain;
`;

export const ErrorPage = () => {
    return (
        <ErrorWrapper>
            <ErrorImage src={img} alt="404" />
        </ErrorWrapper>
    );
};
