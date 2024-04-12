import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0;
  overflow-y: auto;
  margin-top: 10px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(214, 214, 214, 0.4);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(9, 49, 80, 0.5);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const WrapperSkeleton = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 20px 0;
  gap: 10px;
`;
