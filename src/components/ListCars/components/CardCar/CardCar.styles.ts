import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  min-height: 25vh;
  border-radius: 12px;
  flex-direction: column;
  transition: 0.2s all ease;
  gap: 20px;
  align-items: center;
  border: 2px solid #000040;
  transform: scale(0.95);
  justify-content: space-between;
  div {
    display: flex;
  }

  &:hover {
    border-radius: 0;
    transform: scale(1);
    box-shadow: rgba(0, 0, 0, 0.15) -10px -5px 30px,
      rgba(0, 0, 0, 0.12) 0px 10px 15px;
  }
`;

export const IconCar = styled.div`
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  background: #000040;
  border-radius: 50%;
  border: 6px solid #9c9cea;
`;

export const WrapperCarInformations = styled.div`
  width: 100%;
  flex-direction: column;
  gap: 6px;

  h3 {
    font-family: var(--font-roboto);
    font-weight: 900;
    font-size: 20px;
    color: #000040;
  }

  p {
    font-size: 16px;
    font-family: var(--font-raleway);
    font-weight: 500;
  }
`;

export const FeatureCar = styled.div`
  gap: 8px;
`;

export const WrapperValue = styled.div`
  gap: 8px;
  background: #000040;
  padding: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 12px;

  .value {
    font-family: var(--font-roboto);
    font-size: 18px;
    color: #fff;
  }
  .total-amount {
    font-size: 18px;
    font-weight: 700;
    color: #76bf60;
  }
`;
