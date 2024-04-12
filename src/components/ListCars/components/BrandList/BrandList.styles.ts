import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    color: #000040;
    font-size: 22px;
  }
  h2 {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.5;
  }
`;
export const WrapperList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-y: auto;
  gap: 20px;
  width: 100%;
  padding: 10px 0;

  @media (max-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 775px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;
