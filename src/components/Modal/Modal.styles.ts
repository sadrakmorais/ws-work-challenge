import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  min-height: 50vh;
  width: 30%;

  @media (max-width: 1060px) {
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 70%;
  }

  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const CloseButton = styled.button`
  position: relative;
  top: 10%;
  right: -90%;
  background: none;
  border: none;
  cursor: pointer;
`;
